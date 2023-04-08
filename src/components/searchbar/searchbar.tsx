import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../../css/searchbar.css";
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
            author
          }
          body
        }
      }
    }
  `);
  const [filteredDataTitles, setFilteredDataTitles] = useState<Array<string>>(
    []
  );
  const [filteredDataBody, setFilteredDataBody] = useState<Array<string>>([]);
  const [filteredDataAuthor, setFilteredDataAuthor] = useState<Array<string>>(
    []
  );

  const [wordEntered, setWordEntered] = useState<string>("");
  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilterTitles = data.allMdx.nodes.filter((value: any) => {
      return String(value.frontmatter.title)
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    const newFilterBody = data.allMdx.nodes.filter((value: any) => {
      return String(value.body)
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    const newFilterAuthor = data.allMdx.nodes.filter((value: any) => {
      return String(value.frontmatter.author)
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredDataTitles([]);
      setFilteredDataBody([]);
      setFilteredDataAuthor([]);
    } else {
      setFilteredDataTitles(newFilterTitles);
      setFilteredDataBody(newFilterBody);
      setFilteredDataAuthor(newFilterAuthor);
    }
  };

  return (
    <>
      <div className="search">
        <section className="searchInputs">
          <input
            type="text"
            placeholder={"  " + placeholder.text}
            value={wordEntered}
            onChange={handleFilter}
          />
        </section>
        <section id="list" className="dataResult flex-col rounded-1xl">

          {(filteredDataTitles.length!==0)?(<>
            <p className="button flex-grow text-lime-600">Matching Titles: </p>
            {filteredDataTitles.map((values: any) => {
              return (
                <a className="dataItem" href={"/docs" + values.frontmatter.slug}>
                  <p>
                    {values?.frontmatter.title} - {values.frontmatter.author}
                  </p>
                </a>
              );
            })}
</>): ""}
{(filteredDataBody.length!==0)?(<><p className="button text-lime-600">
            References of the query were found in this page:{" "}
          </p>
          {filteredDataBody.map((values: any) => {
            return (
              <a className="dataItem" href={"/docs" + values.frontmatter.slug}>
                <p>
                  {values?.frontmatter.title} - {values.frontmatter.author}
                </p>
              </a>
            );
          })}
          </>): ""}

          {(filteredDataAuthor.length!==0) ?(<><p className="button text-lime-600">Query matching Author names: </p>
          {filteredDataAuthor.map((values: any) => {
            return (
              <a className="dataItem" href={"/docs" + values.frontmatter.slug}>
                <p>
                  {values?.frontmatter.title} - {values.frontmatter.author}
                </p>
              </a>
            );
          })}
          </>): ""}
        </section>
      </div>
    </>
  );
};

const PopUp = (props: any): any => {
  return props.trigger ? (
    <section className="popup">
      <section className="workspace">
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
