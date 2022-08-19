import { useFetch } from "../useFetch";

export const Frontpage = () => {
  const { data: profiles, error } = useFetch(
    "https://api.github.com/users/Charity-Mutembei"
  );
  return (
    <div>
      {error && <h2> {error} </h2>}
      {profiles && (
        <p>
          {" "}
          {profiles?.bio} {profiles?.followers}{" "}
          <a href={profiles?.followers_url}>{profiles?.followers_url}</a>
        </p>
      )}
      {profiles && (
        <div>
          {" "}
          <img src={profiles?.avatar_url} />{" "}
        </div>
      )}
    </div>
  );
};
