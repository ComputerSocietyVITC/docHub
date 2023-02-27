import * as React from "react";
import "../../css/gradients.css";
import { AiFillGithub, AiOutlineInstagram, AiOutlineSearch } from "react-icons/ai";
import { SocialMediaIcon, SearchIcon } from "./footer";
import { StaticImage } from "gatsby-plugin-image";
import { SearchBar, PopUp } from "./searchbar";
import SearchPopUp from "./popup";

const Navbar = (): JSX.Element => {
  const [ButtonPopUp, setButtonPopUp]= React.useState(false);
  return (
    <>
      <nav className="bg-black h-18 items-center grid grid-cols-3">
        <section className="md:block lg:block justify-self-start">
          <a href="/">
            <StaticImage
            src={"../images/icon.svg"}
            alt="Computer Society Logo"
            className="h-12 w-12"
            />
          </a>
        </section>
        <section className="font-Plex font-black m-2 text-white justify-self-center">
          <a className='text-9xl' href="/">
            <p>docHub</p></a>
        </section>
        <section className="flex items-center justify-self-end">
          <section>
          <button onClick={() => setButtonPopUp(true)}>
          <SearchIcon icon={<AiOutlineSearch />} />
          </button>
          <SearchPopUp Button={ButtonPopUp} setButton={setButtonPopUp}/>
          </section>
          <SocialMediaIcon
            icon={<AiFillGithub />}
            link={"https://github.com/ComputerSocietyVITC"}
          />
          <SocialMediaIcon
            icon={<AiOutlineInstagram />}
            link={"https://instagram.com/comsoc.vitcc"}
          />         
        </section>
      </nav>
      <section className="h-0.5 rounded-md bg-gradient-to-r from-primary to-[#0000FF]" />
    </>
  );
};
//<SearchBar text={String.fromCodePoint(0x1F50E)+"Search"} />
export default Navbar;
