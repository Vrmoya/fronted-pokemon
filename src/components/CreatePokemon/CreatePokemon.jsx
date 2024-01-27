import  { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { crearPokemon, fetchTypes } from "../../redux/actions";
import Validate from "../CreatePokemon/Validate";
import styles from "./CreatePokemon.module.scss";




const CreatePokemon = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.types);

  const initialState = {
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    type: [],
  };

  const [newPokemon, setNewPokemon] = useState(initialState);
  const [errors, setErrors] = useState({});

  
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);




  const handleChange = (event) => {
  setNewPokemon({
    ...newPokemon,
    [event.target.name]: event.target.value,
  });

  const validationErrors = Validate({
    ...newPokemon,
    [event.target.name]: event.target.value,
  });

  console.log("Datos actualizados:", newPokemon);
  console.log("Errores actualizados:", validationErrors);

  setErrors(validationErrors);
};


  const handleTypeChange = (event) => {
    const selectedTypes = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    setNewPokemon((prevPokemon) => ({
      ...prevPokemon,
      type: selectedTypes,
    }));
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.value.trim();

    if (selectedImage !== "") {
      setNewPokemon((prevPokemon) => ({
        ...prevPokemon,
        image: selectedImage,
      }));

      const validationErrors = Validate({
        ...newPokemon,
        image: selectedImage,
      });
      setErrors(validationErrors);
    } else {
      setNewPokemon((prevPokemon) => ({
        ...prevPokemon,
        image: "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        image: "",
      }));
    }
  };
  
  const resetForm = () => {
    setNewPokemon(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos antes de enviar:", newPokemon);
    console.log("Errores antes de enviar:", errors);

    const formValid = Object.values(errors).every((value) => value === "");

    if (formValid) {
      console.log("Datos a enviar:", newPokemon);
      dispatch(crearPokemon(newPokemon));

      resetForm();
    } else {
      console.error("Formulario no válido");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Container}>
        <div className={styles.card}>
          <h2 className={styles.h1}>Crea tu pokemon</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label className={styles.text} htmlFor="name">
                Name
              </label>
              <input
                className={styles.input}
                placeholder="name"
                type="text"
                name="name"
                value={newPokemon.name}
                onChange={handleChange}
              />
            </div>
              <p className={styles.p}>{errors.name}</p>

            <div>
              <label className={styles.text} htmlFor="hp">
                HP
              </label>
              <input
                className={styles.input}
                placeholder="hp"
                type="number"
                name="hp"
                value={newPokemon.hp}
                onChange={handleChange}
              />
            </div>
              <p className={styles.p}>{errors.hp}</p>

            <div>
              <label className={styles.text} htmlFor="attack">
                ATTACK
              </label>
              <input
                className={styles.input}
                placeholder="attack"
                type="number"
                name="attack"
                value={newPokemon.attack}
                onChange={handleChange}
              />
            </div>
              <p className={styles.p}>{errors.attack}</p>
            <div>
              <label className={styles.text} htmlFor="defense">
                DEFENSE
              </label>
              <input
                className={styles.input}
                placeholder="defense"
                type="number"
                name="defense"
                value={newPokemon.defense}
                onChange={handleChange}
              />
            </div>
              <p className={styles.p}>{errors.defense}</p>
            <div>
              <label className={styles.text} htmlFor="speed">
                SPEED
              </label>
              <input
                className={styles.input}
                placeholder="speed"
                type="number"
                name="speed"
                value={newPokemon.speed}
                onChange={handleChange}
              />
            </div>
              <p className={styles.p}>{errors.speed}</p>
            <div>
              <label className={styles.text} htmlFor="weight">
                WEIGHT
              </label>
              <input
                className={styles.input}
                placeholder="weight"
                type="number"
                name="weight"
                value={newPokemon.weight}
                onChange={handleChange}
              />
            </div>
              <p className={styles.p}>{errors.weight}</p>
            <div>
              <label className={styles.text} htmlFor="height">
                HEIGHT
              </label>
              <input
                className={styles.input}
                placeholder="height"
                type="number"
                name="height"
                value={newPokemon.height}
                onChange={handleChange}
              />
            </div>
              <p className={styles.p}>{errors.height}</p>
            <div>
              <label className={styles.text} htmlFor="image">
                Imagen URL
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="URL de la imagen"
                name="image"
                value={newPokemon.image}
                onChange={handleImageChange}
              />
            </div>
              <p className={styles.p}>{errors.image}</p>

            <div>
              <label className={styles.text} htmlFor="type">
                TYPE <p>CTRL + click para seleccionar mas de un type</p>
              </label>
              
              <select multiple
                className={styles.select}
                name="type"
                onChange={handleTypeChange}
              >
                <option>Seleccionar tipo</option>
                {type.map((type) => (
                  <option key={type.name} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
                {/* <p className={styles.p}>{errors.type}</p> */}
           

            <button className={styles.button} type="submit">
              Guardar Pokemon
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreatePokemon;
