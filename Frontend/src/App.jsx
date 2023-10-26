import LoginPage from "./pages/Login";
import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/Signup";
import MovieDetailsPages from "./pages/MovieDetailsPages";
import AboutPage from "./pages/AboutPage";
import Verification from "./pages/Verification";
import LoginIn from "./pages/LoginIn";
import Favorites from "./pages/favorites";
import TvShow from "./pages/TvShow";
import TVDetailsPages from "./pages/TVDetailsPages";
import FavoritesTV from "./pages/FavoritesTV";


function App() {
  return (

    // const sunIcon = document.querySelector(".sun");
    // Const moonIcon = document.querySelector(".moon");

// {/* <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
//   <div>
//     <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
//       <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><!-- ... --></svg>
//     </span>
//   </div>
//   <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
//   <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
//     The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
//   // </p>
// // </div> */}

    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/loginIn' element={<LoginIn />} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/movieDetails' element={<MovieDetailsPages />}/>
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Verification' element={<Verification />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/FavoriteTV' element={<FavoritesTV />} />
        <Route path='/TvShow' element={<TvShow />} />
        <Route path='/TvDetailsPage' element={<TVDetailsPages />} />
      </Routes>
    </Layout>
  )
}

export default App
