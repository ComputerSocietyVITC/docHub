import { Fragment, useEffect, useState } from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

let idGenerator = (params: string) => {
  return params.toLowerCase().split(" ").join("_").replaceAll("_?", "");
};

let useMDX = (content: any) => {
  let rehypeAddIdToParagraphs = () => {
    return function transformParagraphs(tree: any) {
      visit(tree, { type: "element", tagName: "h2" }, (node) => {
        node.properties = {
          ...node.properties,
          id: idGenerator(node.children[0].value),
        };
      });
    };
  };

  const [markDown, setMarkdown] = useState({ default: Fragment });

  useEffect(() => {
    // @ts-ignore
    evaluate(content, {
      ...runtime,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeAddIdToParagraphs],
    }).then((res: any) => setMarkdown(res));
  }, [content]);

  return markDown;
};

const useBodyLockScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
};

const events = [`mousedown`, `touchstart`];

export default function useClickOutside(refs: any, onClickOutside: any) {
  const isOutside = (element: any) =>
    refs.every((ref: any) => !ref.current || !ref.current.contains(element));

  const onClick = (event: any) => {
    if (isOutside(event.target)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    events.forEach((event) => document.addEventListener(event, onClick));

    return () => {
      events.forEach((event) => document.removeEventListener(event, onClick));
    };
  });
}

export { useMDX, idGenerator, useBodyLockScroll, useClickOutside };
