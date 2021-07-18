export interface Character {
  id: number;
  name: string;
  status: StatusType;
  species: string;
  type: string;
  gender: "Female" | "Male" | "unknown";
  origin: URLObject;
  location: URLObject;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface URLObject {
  name: string | "unknown";
  url: string;
}

export type StatusType = "Alive" | "Dead" | "unknown";
