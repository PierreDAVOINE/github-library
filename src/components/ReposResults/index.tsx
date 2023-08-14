import './styles.scss';
import Repo from '../Repo';
import { IRepository } from '../../@types/repository';

interface ReposResultsProps {
  repos: IRepository[]
}

function ReposResults({ repos } : ReposResultsProps) {
  return (
    <div className="results">
      {
        repos.map((repository) => (
          <Repo repository={repository} key={repository.id} />
        ))
      }
    </div>
  );
}

export default ReposResults;
