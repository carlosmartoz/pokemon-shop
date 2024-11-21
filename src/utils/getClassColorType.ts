// Function to get the color class based on the type of the pokemon
export function getClassColorType(type: string): string {
  // Switch
  switch (type) {
    case "normal":
      return "bg-normal text-white";
    case "fire":
      return "bg-fire text-white";
    case "water":
      return "bg-water text-white";
    case "electric":
      return "bg-electric text-white";
    case "grass":
      return "bg-grass text-white";
    case "ice":
      return "bg-ice text-white";
    case "fighting":
      return "bg-fighting text-white";
    case "poison":
      return "bg-poison text-white";
    case "ground":
      return "bg-ground text-black";
    case "flying":
      return "bg-flying text-black";
    case "psychic":
      return "bg-psychic text-white";
    case "bug":
      return "bg-bug text-white";
    case "rock":
      return "bg-rock text-white";
    case "ghost":
      return "bg-ghost text-white";
    case "dark":
      return "bg-dark text-white";
    case "dragon":
      return "bg-dragon text-black";
    case "steel":
      return "bg-steel text-white";
    case "fairy":
      return "bg-fairy text-white";
    default:
      return "bg-black text-white";
  }
}
