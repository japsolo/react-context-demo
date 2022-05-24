// Context
import { CharactersContextProvider } from "./context/charactersContext";

// Components
import { Characters } from './components/Characters';

export const App = () => {
  return (
    <div className="container">
      <h2 className="alert alert-success text-center">Rick and Morty App</h2>
      
      <CharactersContextProvider>
        <Characters/>
      </CharactersContextProvider>
    </div>
  )
}