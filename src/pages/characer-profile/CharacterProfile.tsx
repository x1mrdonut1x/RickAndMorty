import { useLocations, useEpisodes } from "../../hooks";
import { Character } from "../../interfaces/Character";
import { getLocationId } from "../../utils";

interface CharacterProfileProps {
  onBack: () => void;
  data: Character;
}

export const CharacterProfile = ({ onBack, data }: CharacterProfileProps) => {
  const episodes = useEpisodes(data.episode);
  const locations = useLocations([data.origin.url, data.location.url]);

  const originId = getLocationId(data.origin.url);
  const locationId = getLocationId(data.location.url);

  return (
    <div>
      <div onClick={onBack}>Back</div>
      {data.name}
      <div>
        Origin:
        {locations.data?.find((x) => x.id === originId)?.name}
      </div>
      <div>
        Location:
        {locations.data?.find((x) => x.id === locationId)?.name}
      </div>
      <div>
        Episodes:
        {episodes.data?.map(x => x.name)}
      </div>
    </div>
  );
};
