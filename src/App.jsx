import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Directory from "./pages/Directory";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ProfileDetails from "./pages/ProfileDetails";
import NewsDetails from "./pages/NewsDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/directory"
          element={<Directory />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/dashboard/profile"
          element={<Profile />}
        />

        <Route path="/news" element={<News />} />
        <Route
          path="/news/:id"
          element={<NewsDetails />}
        />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/profile/:id"
          element={<ProfileDetails />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;