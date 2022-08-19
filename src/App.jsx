import { useFetch } from "./useFetch"

export default function App() {
  const {data:profiles,error} = useFetch('https://api.github.com/users/Charity-Mutembei')
  return(
    <div>
      {error && <h2> {error} </h2>}
      {profiles && <p> {profiles.bio} {profiles.followers} <a href={profiles.followers_url}>{profiles.followers_url}</a></p> }
    </div>
  )
}


// class RootObject:
//  avatar_url: str
//  bio: str
//  blog: str
//  company: None
//  created_at: datetime
//  email: None
//  events_url: str
//  followers: int
//  followers_url: str
//  following: int
//  following_url: str
//  gists_url: str
//  gravatar_id: str
//  hireable: None
//  html_url: str
//  id: int
//  location: None
//  login: str
//  name: str
//  node_id: str
//  organizations_url: str
//  public_gists: int
//  public_repos: int
//  received_events_url: str
//  repos_url: str
//  site_admin: bool
//  starred_url: str
//  subscriptions_url: str
//  twitter_username: None
//  type: str
//  updated_at: datetime
//  url: str

 

