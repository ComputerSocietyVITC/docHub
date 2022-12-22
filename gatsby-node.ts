import { GatsbyNode } from "gatsby";
import { resolve } from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}: any) => {
  const { createPage } = actions;
  const allMdx: { errors?: any; data?: any } = await graphql(`
    query MarkDownQuery {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  allMdx.data?.allMdx.nodes.forEach((node: any) => {
    createPage({
      path: `/docs${node.frontmatter.slug}`,
      component: node.internal.contentFilePath,
      context: {},
    });
  });
};
