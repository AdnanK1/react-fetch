import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Frontpage } from "./pages/Frontpage";
import { Repos } from "./pages/Repos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="Repos" element={<Repos />} />
      </Routes>
    </BrowserRouter>
  );
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
