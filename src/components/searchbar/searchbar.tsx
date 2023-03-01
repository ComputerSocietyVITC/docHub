import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./searchbar.css";
import { SearchIcon } from "../footer";
import { RiCloseFill } from "react-icons/ri";

const SearchBar = (placeholder: any): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
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
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.allMdx.nodes.filter((value: any) => {
      return value?.frontmatter.title
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div className="search">
        <section className="searchInputs">
          <input
            type="text"
            placeholder={"  " + placeholder?.text}
            value={wordEntered}
            onChange={handleFilter}
          />
        </section>
        <section id="list" className="dataResult rounded-1xl">
          {filteredData.map((values: any) => {
            return (
              <a className="dataItem" href={"/docs" + values.frontmatter.slug}>
                <p>{values?.frontmatter.title}</p>
              </a>
            );
          })}
        </section>
      </div>
    </>
  );
};

const PopUp = (props: any): any => {
  return props.trigger ? (
    <section className="popup">
      <section>
        <button className="closeBtn" onClick={() => props.setTrigger(false)}>
          <SearchIcon icon={<RiCloseFill />} />
        </button>
        <section>{props.children}</section>
      </section>
    </section>
  ) : (
    ""
  );
};

export { SearchBar, PopUp };
