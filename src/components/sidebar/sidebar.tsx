import React from "react";
import { useStaticQuery, graphql, Page } from "gatsby";
import Item from "./item";

interface ISidebarProps {
  name: string;
}

const Sidebar = (props: ISidebarProps): JSX.Element => {
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

  let mapMethod = (element: any) => {
    if (element?.frontmatter.title == props?.name) {
      return (
        <Item
          text={element?.frontmatter.title}
          active={true}
          slug={element?.frontmatter.slug}
        />
      );
    } else {
      return (
        <Item
          text={element?.frontmatter.title}
          active={false}
          slug={element?.frontmatter.slug}
        />
      );
    }
  };

  const data: any[] = query.allMdx.nodes;
  return (
    <section className="lg:grid col-span-2 col-start-1 border border-r-[1px] border-b-0 border-l-0 border-t-0 border-textcolors-boundary bg-darkshades-passive py-2 sm:hidden">
      <aside>
        <nav className="relative z-20 mt-5">
          <ul>{data.map(mapMethod)}</ul>
        </nav>
      </aside>
    </section>
  );
};

export default Sidebar;
