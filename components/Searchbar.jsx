"use client";
import React, { useState } from "react";
import { SearchManufac } from "..";
import SearchButton from "./SearchButton";
import Image from "next/image";

const Searchbar = () => {
  const [modal, setModal] = useState("");
  const [manufacturer, setManufacturer] = useState();

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufac
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherstyles="sm:hidden " />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />

        <input
          type="text"
          name="model"
          value={modal}
          onClick={(e) => setModal(e.target.value)}
          placeholder="model"
          className="searchbar__input"
        />
      </div>
    </form>
  );
};

export default Searchbar;
