import React from "react";
import { useStaticQuery, graphql, Page } from "gatsby";
import Item from "./item";

interface PageQueryType {
  nodes: {
    frontmatter: {
      slug: string;
      title: string;
    };
  };
}

const Sidebar = (): JSX.Element => {
  const query = useStaticQuery(graphql`
    query MarkdownQuery {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);
  const data: any[] = query.allMdx.nodes;
  console.log(typeof data, data);

  return (
    <section className="col-start-1 col-span-2 border border-r-[1px] border-b-0 border-l-0 border-t-0 border-textcolors-boundary bg-darkshades-passive py-2">
      <aside>
        <nav className="relative z-20 mt-5">
          <ul>
            {data.map((element: any) => (
              <Item text={element?.frontmatter.title} active={false} />
            ))}
          </ul>
        </nav>
      </aside>
    </section>
  );
};

export default Sidebar;
