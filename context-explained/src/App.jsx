import { Parent } from './components/Parent';

import { UserProvider } from "./context/userContext";

function App() {
  return (
    <div>
      <UserProvider>
        <Parent />
      </UserProvider>
    </div>
  )
}

export default App;
