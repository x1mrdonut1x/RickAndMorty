import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Character } from "../interfaces/Character";
import { CharacterProfile, CharacterList } from "../pages";

const queryClient = new QueryClient();

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<
    Character | undefined
  >();
  const handleGoToCharacter = (x: Character) => {
    setSelectedCharacter(x);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {selectedCharacter ? (
        <CharacterProfile
          data={selectedCharacter}
          onBack={() => setSelectedCharacter(undefined)}
        />
      ) : (
        <CharacterList onGoToCharacter={handleGoToCharacter} />
      )}
    </QueryClientProvider>
  );
}

export default App;
