import { Card } from 'semantic-ui-react';
import './styles.scss';
import { IRepository } from '../../@types/repository';

interface RepositoryProps {
  repository: IRepository
}

function Repo({ repository } : RepositoryProps) {
  return (
    <Card
      className="card"
      image={repository.owner.avatar_url}
      header={repository.name}
      meta={repository.owner.login}
      description={repository.description}
    />
  );
}

export default Repo;
