import { Character } from "interfaces/Character";
import Placeholder from "assets/placeholder.jpeg";

export const placeholderCharacter: Character = {
  name: "-",
  id: 0,
  status: "unknown",
  species: "",
  type: "",
  gender: "unknown",
  origin: { name: "unknown", url: "" },
  location: { name: "unknown", url: "" },
  image: Placeholder,
  episode: [],
  url: "",
  created: "",
};
