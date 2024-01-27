import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPokemons, setCurrentPage } from "../../redux/actions";
import styles from "../SearchBar/SearchBar.module.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { pathname } = useLocation();

  const handleSearch = () => {
    dispatch(fetchPokemons(searchTerm.trim()));

    console.log("Antes de la actualización:", searchTerm);

    dispatch(setCurrentPage(1));
    setSearchTerm("");
  };

  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.button} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
