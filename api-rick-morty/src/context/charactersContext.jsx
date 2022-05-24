// Deps
import { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const CharactersContext = createContext();

export const CharactersContextProvider = ({children}) => {
  const [characters, setCharacters] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pages, setPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        if(response.status === 200) {
          const { info, results } = response.data;
          setCharacters(results); 
          setTotalResults(info.count);
          setPages(info.pages);
          setPrevPage(info.prev);
          setNextPage(info.next);
        }
      })
  }, []);

  const goToPage = (page, e) => {
    const type = e.target.dataset.type;

    switch (type) {
      case 'prev':
        setActualPage(actualPage - 1);
        break;
      case 'next':
        setActualPage(actualPage + 1);
        break;
      case 'goTo':
        const number = Number(e.target.value);
        page = `https://rickandmortyapi.com/api/character?page=${number}`;
        setActualPage(number);
        break;
      default:
        return;
    }

    Axios.get(page)
      .then(response => {
        if (response.status === 200) {
          const { info, results } = response.data;
          setCharacters(results);
          setPrevPage(info.prev);
          setNextPage(info.next);
        }
      })
  }

  return (
    <CharactersContext.Provider value={{
      characters, 
      totalResults,
      pages,
      actualPage,
      prevPage,
      nextPage,
      goToPage
    }}>
      {children}
    </CharactersContext.Provider>
  )
}
