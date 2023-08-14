import { Pagination } from 'semantic-ui-react';
import './styles.scss';

interface NavSearchProps {
  page: number
  setPage: (nb: number) => void
  getRepository: () => void
}

function NavSearch({ page, setPage, getRepository } : NavSearchProps) {
  const handleChangePage = (e : React.MouseEvent<HTMLLinkElement>) => {
    const link = e.target;
    setPage(link.getAttribute('value'));
    getRepository();
  };

  return (
    <nav className="nav-search">
      <Pagination
        activePage={page}
        boundaryRange={0}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={10}
        onClick={(e) => handleChangePage(e)}
      />
    </nav>
  );
}

export default NavSearch;
