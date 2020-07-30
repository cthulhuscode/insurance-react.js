// Get the difference between years
export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

// Get the total to pay according to the car brand
export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case "europeo":
      increment = 1.3;
      break;

    case "americano":
      increment = 1.15;
      break;

    case "asiatico":
      increment = 1.05;
      break;

    default:
      break;
  }

  return increment;
}

// Calculate insurance type
export function getPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

// Show the first the letter in uppercase
export function firstLetterToUpperCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1); //slice deletes the first letter
}
