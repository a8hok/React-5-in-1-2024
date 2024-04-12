import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import DisplayPost from "./components/Post/DisplayPost";
import Posts from "./components/Post/Posts";
import SinglePost from "./components/Post/SinglePost";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);

  function Logout() {
    setUser(null);
  }
  return (
    <>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/posts">Post</Link>
          </li>
          <li>{!user && <Link to="/login">Login</Link>}</li>
          <li>{user && <button onClick={Logout}>Logout</button>}</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/posts" element={<Posts />}>
          <Route index element={<DisplayPost />} />
          <Route path=":slug" element={<SinglePost />} />
        </Route>

        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user}/>} />
      </Routes>
    </>
  );
}

export default App;
