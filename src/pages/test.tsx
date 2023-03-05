import * as React from "react";
import ExploreBox from "../components/cards/explore";
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
