import React from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./sharedLayout/SharedLayout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import { Cast } from "./cast/Cast";
import { Reviews } from "./reviews/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
      </Route>
    </Routes>
  );
};

// key=7d64af72531b3a4fd4be20da05e7a65f
