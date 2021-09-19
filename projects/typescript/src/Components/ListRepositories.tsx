import { GitHubRepository } from "../Types/GitHub";

interface Props {
  repositories?: Array<GitHubRepository>;
}

// React.FC represents our functional component
const ListRepositories: React.FC<Props> = ({ repositories = [] }) => {
  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank">
            {repo.full_name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListRepositories;
