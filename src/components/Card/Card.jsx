  import { Link } from 'react-router-dom';
  import styles from './Card.module.scss'

  const Card = ({
    id,
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    type,
    api
  }) => {
    const prefixedId = api ? `api_${id}` : `db_${id}`;
    return (
    <Link to={`/pokemon/${id}`} className={styles.link}>
      <div className={styles.card}>
      
        <img src={image} alt={name} className={styles.img} />
        <h4>Name: {name}</h4>
        <div className={styles.p}>
        <p>Type: {type ? type.join(" - ") : 'Unknown'}</p>
        <p>attack: {attack}</p>
        <p>hp: {hp}</p>
        </div>
        
      </div>
      </Link>
    );
  };

  export default Card;

