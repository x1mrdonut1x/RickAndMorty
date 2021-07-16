import { useLocations, useEpisodes, useCharacter } from "../../hooks";
import { Character } from "../../interfaces/Character";
import { getLocationId } from "../../utils";
import { Episodes } from "./parts/Episodes";
import { Location } from "./parts/Location";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Avatar } from "../../components";

export const CharacterProfile = () => {
  const { state: characterFromState } = useLocation<Character>();
  const { characterId } = useParams<{ characterId: string }>();
  const history = useHistory();

  const characterQuery = useCharacter(
    characterFromState ? undefined : characterId
  );

  const character = characterFromState || characterQuery.data;

  const originId = getLocationId(character?.origin?.url);
  const locationId = getLocationId(character?.location?.url);

  const episodes = useEpisodes(character?.episode);
  const locations = useLocations([originId, locationId]);

  const handleGoBack = () => {
    history.push("");
  };

  return (
    <div>
      <div
        onClick={handleGoBack}
        style={{ padding: 30, border: "1 solid black" }}
      >
        Back
      </div>
      <div style={{ width: 200, height: 200, borderRadius: 10 }}>
        <Avatar
          src={character.image}
          alt={character.name}
          style={{ borderRadius: 10 }}
        />
      </div>
      {character?.name}
      <div>
        Origin:
        <Location data={locations.data?.find((x) => x.id === originId)} />
      </div>
      <div>
        Location:
        <Location data={locations.data?.find((x) => x.id === locationId)} />
      </div>
      <div>
        Episodes:
        <Episodes data={episodes.data} />
      </div>
    </div>
  );
};
