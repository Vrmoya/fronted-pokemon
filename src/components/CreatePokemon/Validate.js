export default function Validate(inputs) {

  console.log("Datos a validar:", inputs);

  let errors = {};
  // let RegExpression = /^[a-zA-Z\s]+$/; // Modificación: Permite letras y espacios
  let RegExpression = /^[a-zA-Z\s]*$/;

  if (!inputs.name || !inputs.name.trim()) {
    errors.name = "A name is required";
  } else if (!RegExpression.test(inputs.name)) {
    errors.name = "Numbers or special characters are not allowed";
  } else if (inputs.name.length > 18) {
    errors.name = `The name can't be longer than 18 characters`;
  } else {
    errors.name = ""; 
  }

  const validateStat = (stat, min, max, statName) => {
    if (isNaN(stat) || stat < min || stat > max) {
      errors[
        statName
      ] = `The ${statName} of the Pokemon must be between ${min} and ${max}`;
    }
  };

  validateStat(inputs.hp, 1, 150, "hp");
  validateStat(inputs.attack, 1, 200, "attack");
  validateStat(inputs.defense, 1, 200, "defense");
  validateStat(inputs.speed, 1, 100, "speed");
  validateStat(inputs.weight, 1, 150, "weight");
  validateStat(inputs.height, 1, 80, "height");

  if (!inputs.image || !isValidImageUrl(inputs.image)) {
    errors.image = "Please enter a valid image URL.";
  }

  // if (!inputs.type || inputs.type.length === 0) {
  //   errors.type = "Debes elegir al menos un tipo";
  // } else {
  //   errors.type = "";
  // }
  
  console.log("Errores generados:", errors);

  return errors;
}
const isValidImageUrl = (url) => {
 
  return url.startsWith("http://") || url.startsWith("https://");
};
