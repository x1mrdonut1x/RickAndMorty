export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: URLObject;
  location: URLObject;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface URLObject {
  name: string;
  url: string;
}
