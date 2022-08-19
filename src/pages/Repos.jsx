import { useFetch } from "../useFetch";
import { Card } from "../components/card";

export const Repos = () => {
  const { data: repos, error } = useFetch(``);
  return (
    <div>
        {error && <h1> {error} </h1>}
        <Card repos={repos} />
    </div>
  );
};
