import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Item from "./item";
import { element } from "prop-types";

interface ISidebarProps {
  name: string;
}

const Sidebar = (props: ISidebarProps): JSX.Element => {
  const query = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { priority: ASC } }) {
        nodes {
          frontmatter {
            subtopic
            slug
            title
          }
        }
        distinct(field: { frontmatter: { subtopic: SELECT } })
      }
    }
  `);

  const data: any[] = query.allMdx.nodes;
  let subbox = (element:any) => {
    let insides = (topic:any) => {
      if (element == topic.frontmatter.subtopic){
        return(<>
        {mapMethod(topic)}
        </>)
      }
    }
    return(<>
      <section className="text-3xl font-extrabold">{element}</section>
      <section>{data.map(insides)}</section>
    </>

    )
  }

  let mapMethod = (element: any) => {
    if (element?.frontmatter.title == props?.name) {
      return (
        <Item
          key={element?.frontmatter.title}
          text={element?.frontmatter.title}
          active={true}
          slug={element?.frontmatter.slug}
          subtopic={element.frontmatter.subtopic}
        />
      );
    } else {
      return (
        <Item
          key={element?.frontmatter.title}
          text={element?.frontmatter.title}
          active={false}
          slug={element?.frontmatter.slug}
          subtopic={element.frontmatter.subtopic}
        />
      );
    }
  };
  const subtopic_list = query.allMdx.distinct;

  return (
    <section className="col-span-2 col-start-1 hidden border border-r-[1px] border-b-0 border-l-0 border-t-0 border-textcolors-boundary bg-darkshades-passive py-2 md:grid lg:grid">
      <aside>
        <nav className="relative z-20 mt-5">
        <div>{subbox('Index')}</div>
          <div>{subtopic_list.filter((item: string) => ((item!=("Index")) && (item!=("Misc")))).map(subbox)}</div>
        <div>{subbox('Misc')}</div>
        </nav>
      </aside>
    </section>
  );
};

export default Sidebar;
