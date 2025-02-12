/* eslint-disable no-unused-vars */
import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* ItemList de Artistas */}
      <ItemList
        title="Artistas"
        items={20}
        itemsArray={artistArray}
        path="/artists"
        idPath="artist"
      />

      {/* ItemList de Musicas */}
      <ItemList
        title="Músicas"
        items={40}
        itemsArray={songsArray}
        path="/songs"
        idPath="song"
      />
    </div>
  );
};

export default Main;
