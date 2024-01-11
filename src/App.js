import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import AdminPage from "./admin";
import Profile from "./admin/profile";
import Contacts from "./admin/contact";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/contact" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
