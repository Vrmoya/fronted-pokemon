import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonById } from "../../redux/actions";
import Style from "./Detail.module.scss";


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.selectedPokemon);

  useEffect(() => {
    if (id) {
      dispatch(fetchPokemonById(id));
    }
  }, [dispatch, id]);

  return (
    <div className={Style.background}>
      {pokemon && pokemon.name && (
        <>
          <div className={Style.container}>
            <div className={Style.card1}>
              <img
                className={Style.image}
                src={pokemon.image}
                alt={pokemon.name}
              />
           
              <ul>
                <h3 className={Style.h3}>#{pokemon.id}</h3>
                <h1 className={Style.h3}>{pokemon.name}</h1>
                <div className={Style.lists}>
                <li>Hp: {pokemon.hp}</li>
                <li>Attack: {pokemon.attack}</li>
                <li>Defense: {pokemon.defense}</li>
                <li>Speed: {pokemon.speed}</li>
                <li>Height: {pokemon.height}</li>
                <li>Weight: {pokemon.weight}</li>
                <li>Type: {pokemon.type}</li>
                </div>              
              </ul>
            </div>
          </div>
        </>
      )}
      {!pokemon && <p>Loading...</p>}
      {pokemon && !pokemon.name && <p>Pokemon not found</p>}
    </div>
  );
};

export default Detail;
