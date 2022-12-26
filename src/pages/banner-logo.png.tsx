import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function Header() {
  // Import result is the URL of your image
  return <StaticImage src="banner-logo.png" alt="Logo" />;
}

export default Header;
