// Function to get the color class alt based on the type of the Pokémon
export function getClassColorTypeAlt(type: string): string {
  // Switch
  switch (type) {
    case "normal":
      return "text-normal";
    case "fire":
      return "text-fire";
    case "water":
      return "text-water";
    case "electric":
      return "text-electric";
    case "grass":
      return "text-grass";
    case "ice":
      return "text-ice";
    case "fighting":
      return "text-fighting";
    case "poison":
      return "text-poison";
    case "ground":
      return "text-ground-alt";
    case "flying":
      return "text-flying-alt";
    case "psychic":
      return "text-psychic";
    case "bug":
      return "text-bug";
    case "rock":
      return "text-rock";
    case "ghost":
      return "text-ghost";
    case "dark":
      return "text-dark";
    case "dragon":
      return "text-dragon-alt";
    case "steel":
      return "text-steel";
    case "fairy":
      return "text-fairy";
    default:
      return "text-black";
  }
}
