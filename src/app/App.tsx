import { QueryClient, QueryClientProvider } from "react-query";
import { CharacterProfile, CharacterList } from "pages";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/characters/:characterId" component={CharacterProfile} />
          <Route path="/characters" component={CharacterList} />
          <Redirect to="/characters" />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
