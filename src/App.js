import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./containers/HomeLayout";
import BlogsLayout from "./containers/BlogsLayout";
import CreateBlogLayout from "./containers/CreateBlogLayout";
import SingleBlogLayout from "./containers/SingleBlogLayout";
import NotFoundLayout from "./containers/NotFoundLayout";
import DashboardLayout from "./containers/DashboardLayout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<HomeLayout />} />
          <Route path='/blogs' element={<BlogsLayout />} />
          <Route path='/blogs/:slug' element={<SingleBlogLayout />} />
          <Route path='/blogs/new' element={<CreateBlogLayout />} />
          <Route path='/dashboard' element={<DashboardLayout />}/>
          <Route path='/blogs/edit/:slug' element={<CreateBlogLayout />} />
          <Route path='*' element={<NotFoundLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
