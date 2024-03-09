import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Navbar/Layout";
import Home from "./Navbar/Home";
import Blogs from './Navbar/Blogs';
import Contact from './Navbar/Contact';
import Register from "./Navbar/Register";
import Component1 from "./context/Component1";
// import Example from "./UseRef";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Component2 />} /> */}
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Component1/>
    {/* <Example/> */}
    </>
  );
}

export default App;
