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
        <section className="flex text-white">
          <input
            className="focus:outline-black bg-gray-500 text-white text-lg h-16 w-full rounded-full px-5"
            type="text"
            placeholder={"  " + placeholder.text}
            value={wordEntered}
            onChange={handleFilter}
          />
        </section>
        <section id="list" className="flex flex-col rounded-1xl">

          {(filteredDataTitles.length!==0)?(<>
            <p className="animate-pulse shadow-lg shadow-blue-500 bg-blue-950 text-white font-medium rounded-lg py-3 px-6 shadow-md transition duration-300 ease-in-out">Matching Titles: </p>
            {filteredDataTitles.map((values: any) => {
              return (
                <a className="w-full h-50 flex items-center text-black" href={"/docs" + values.frontmatter.slug}>
                  <p className="ml-20 text-cyan-300">
                    {values?.frontmatter.title} - {values.frontmatter.author}
                  </p>
                </a>
              );
            })}
</>): ""}
{(filteredDataBody.length!==0)?(<><p className="animate-pulse shadow-lg shadow-blue-500 bg-blue-950 text-white font-medium rounded-lg py-3 px-6 shadow-md transition duration-300 ease-in-out">
            References of the query were found in this page:{" "}
          </p>
          {filteredDataBody.map((values: any) => {
            return (
              <a className="w-full h-50 flex items-center text-black" href={"/docs" + values.frontmatter.slug}>
                <p className="ml-20 text-cyan-300">
                  {values?.frontmatter.title} - {values.frontmatter.author}
                </p>
              </a>
            );
          })}
          </>): ""}

          {(filteredDataAuthor.length!==0) ?(<><p className="animate-pulse shadow-lg shadow-blue-500 bg-blue-950 text-white font-medium rounded-lg py-3 px-6 shadow-md transition duration-300 ease-in-out">Query matching Author names: </p>
          {filteredDataAuthor.map((values: any) => {
            return (
              <a className="w-full h-50 flex items-center text-black" href={"/docs" + values.frontmatter.slug}>
                <p className="ml-20 text-cyan-300 hover:bg-emerald-950">
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
    <section className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
      <section className="fixed top-20 overflow-auto workspace">
        <button onClick={() => props.setTrigger(false)}>
          <SearchIcon icon={<RiCloseFill />} />
        </button>
        <section className="">{props.children}</section>
      </section>
    </section>
  ) : (
    ""
  );
};

export { SearchBar, PopUp };
