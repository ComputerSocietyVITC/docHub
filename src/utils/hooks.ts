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

export { useMDX, idGenerator };
