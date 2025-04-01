import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const CatalogElement = lazy(() => import("./pages/CatalogElement/CatalogElement.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="catalog/:id" element={<CatalogElement/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
