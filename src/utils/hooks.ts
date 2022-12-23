import { Fragment, useEffect, useState } from "react";

import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

let useMDX = (content: any) => {
  const [markDown, setMarkdown] = useState({ default: Fragment });

  useEffect(() => {
    evaluate(content, { ...runtime }).then((res) => setMarkdown(res));
  }, [content]);

  return markDown;
};

export default useMDX;
