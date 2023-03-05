import * as React from "react";
import ExploreBox from "../components/cards/DeepdiveIntoLearning";
import AboutBox from "../components/cards/about";

export default function TestPage(): JSX.Element {
  return (
    <>
      <section className="bg-darkshades-passive">
        <AboutBox />
        <ExploreBox />
      </section>
    </>
  );
}
