import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import AdminPage from "./admin";
import Header from "./components/header";
import Profile from "./admin/profile";
import Contacts from "./admin/contact";
import Sidebar from "./components/sidebar";

function App() {
  const currentPath = window.location.pathname
  const adminPath = currentPath.includes("admin")
  console.log("pathname:",adminPath);
  return (
    <BrowserRouter>
      {
        adminPath && <>
          <Header/>
          <Sidebar/>
        </>
      }
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/admin/profile" element={<Profile/>} />
      <Route path="/admin/contact" element={<Contacts/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
