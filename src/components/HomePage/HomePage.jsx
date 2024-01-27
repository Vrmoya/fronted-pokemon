import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByType,
  filterByOrigin,
  fetchPokemons,
  fetchTypes,
  sortByOrder,
  setPokemonsPerPage,
  setCurrentPage,
  resetFilters,
} from "../../redux/actions";

import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import Style from "../HomePage/HomePage.module.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const filteredPokemons = useSelector((state) => state.filteredPokemons);
  const currentPage = useSelector((state) => state.currentPage);
  const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);
  const [typeFilter, setTypeFilter] = useState("");
  const [originFilter, setOriginFilter] = useState("");
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(fetchPokemons());
    dispatch(setPokemonsPerPage(12));
    dispatch(fetchTypes());
  }, [dispatch]);
  

  useEffect(() => {
    setTypeFilter("");
    console.log(filteredPokemons)
    setOriginFilter("");
  }, [filteredPokemons]);


  const handleSort = (orderBy, order) => {
    if (order === "default") {
  
      dispatch(resetFilters());
      
    } else {
      dispatch(sortByOrder(orderBy, order));
    }
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleTypeFilterChange = (e) => {
    const selectedType = e.target.value;
    setTypeFilter(selectedType);
    dispatch(filterByType(selectedType));
    handlePageChange(1)
  };

  const handleOriginFilterChange = (e) => {
    console.log("Origin Filter Value:", e.target.value);
    setOriginFilter(e.target.value);
    dispatch(filterByOrigin(e.target.value));
    handlePageChange(1)
    console.log("Filtered Pokemons after Origin Filter:", filteredPokemons);
  };

  let filteredDisplayPokemons = filteredPokemons;

  if (typeFilter) {
    filteredDisplayPokemons = filteredDisplayPokemons.filter(
      (pokemon) => pokemon.types && pokemon.types.includes(typeFilter)
    );
  }

  if (originFilter === "API") {
    filteredDisplayPokemons = filteredDisplayPokemons.filter((pokemon) => pokemon.api);
  } else if (originFilter === "DDBB") {
    filteredDisplayPokemons = filteredDisplayPokemons.filter((pokemon) => !pokemon.api);
  }


  const startIndex = (currentPage - 1) * pokemonsPerPage;
  const endIndex = startIndex + pokemonsPerPage;

  const displayedPokemons = filteredDisplayPokemons.slice(startIndex, endIndex);

  return (
    <div>
      <div className={Style.container}>
        <select className={Style.content} onChange={handleTypeFilterChange}>
          <option value="all">Todos los tipos</option>
          {types.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>

        <select className={Style.content} onChange={handleOriginFilterChange}>
          <option value="all">Todos los orígenes</option>
          <option value="API">API</option>
          <option value="DDBB">DDBB</option>
        </select>

        <select className={Style.content} onChange={(e) => handleSort("name", e.target.value)}>
          <option value="default">Ordenar Nombre</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>

        <select className={Style.content} onChange={(e) => handleSort("attack", e.target.value)}>
          <option value="default">Ordenar Ataque</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div>
        <Cards pokemons={displayedPokemons} />
      </div>

      <div>
        <Pagination
          totalPages={Math.ceil(
            filteredDisplayPokemons.length / pokemonsPerPage
          )}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
