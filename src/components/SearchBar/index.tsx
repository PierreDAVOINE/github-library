import { Input, Icon } from 'semantic-ui-react';
import './styles.scss';

interface SearchBarProps {
  setSearch: (word: string) => void
  getRepository: () => void
  setPage: (nb : number) => void
}

function SearchBar({ setSearch, getRepository, setPage } : SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    getRepository();
  };
  return (
    <div className="search-bar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          fluid
          icon={<Icon type="submit" name="search" link onClick={() => { setPage(1); getRepository(); }} />}
          iconPosition="left"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
