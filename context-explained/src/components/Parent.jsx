import { useContext } from 'react'
import { Child } from './Child';

import { UserContext } from "../context/userContext";

export const Parent = () => {
  const { developer } = useContext(UserContext);

  return (
    <div>
      <h1>Parent</h1>
      <p>El developer se llama {developer}</p>
      <hr />
      <Child/>
    </div>
  )
}