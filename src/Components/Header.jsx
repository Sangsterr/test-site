import { Link } from "react-router-dom";
import dieselLogo from "../Images/diesel-logo.png"

function Header({ user }) {
  return (
    <header id="header">
      <img src={dieselLogo} className="header-logo"/>
    </header>
  );
}

export default Header;
