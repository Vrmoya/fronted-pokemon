import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import Style from "./NavBar.module.scss";
import Logo from "../../assets/pokemon.svg";

const NavBar = ({ handleSearch }) => {
 const {pathname} = useLocation ();
 const isPokemonDetailPage = pathname.startsWith("/pokemon/:id");
  return (
    <div className={Style.envelop}>
      <div className={Style.Container}>
        <div className={Style.logoContainer}>
          <img src={Logo} alt="Pokemon Logo" className={Style.logo} />
        </div>
        <div> {!isPokemonDetailPage && pathname === "/home" && (<SearchBar className={Style.searchBar} handleSearch={handleSearch} />
        )}</div>

       { pathname !== "/home" && (<Link to="/home" className={Style.button}>
          <span>Home</span>
        </Link>)}
        <Link to="/create" className={Style.button}>
          <span>Create</span>
        </Link>
        <div>
          <Link to="/">
            <button className={Style.button}>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
