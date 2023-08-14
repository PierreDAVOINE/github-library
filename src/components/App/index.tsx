import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import 'semantic-ui-css/semantic.min.css';
import './styles.scss';
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';
import { IResult } from '../../@types/repository';
import Faq from '../Faq';
import NotFound from '../NotFound';
import NavSearch from '../NavSearch';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<IResult>();
  const [page, setPage] = useState(1);

  // Récupération des données de l'API
  const getRepository = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${page}&per_page=9`
      );
      setResults(response.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar
                setSearch={setSearch}
                getRepository={getRepository}
                setPage={setPage}
              />
              {results ? (
                <>
                  <Message nbFound={results.total_count} />
                  <ReposResults repos={results.items} />
                  <NavSearch
                    setPage={setPage}
                    getRepository={getRepository}
                    page={page}
                  />
                </>
              ) : (
                ''
              )}
            </>
          }
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
