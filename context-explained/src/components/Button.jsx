import { useContext } from 'react'
import { UserContext } from "../context/userContext";

export const Button = () => {
  const { setUser, community, year } = useContext(UserContext);
  return (
    <>
      <p>Hacemos parte de la comunidad {community} / {year}</p>
      <button
        onClick={() => setUser({
          name: 'Javi',
          age: 26
        })}
      >Change USER</button>
    </>
  )
}