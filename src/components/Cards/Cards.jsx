import Card from '../Card/Card';
import styles from './Cards.module.scss';

const Cards = ({ pokemons }) => {
  return (
    <div className={styles.Container}>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.api ? `api_${pokemon.id}` : `db_${pokemon.id}`}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          hp={pokemon.hp}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          height={pokemon.height}
          weight={pokemon.weight}
          type={pokemon.type}
        />  
      ))}
    </div>
  );
};

export default Cards;


