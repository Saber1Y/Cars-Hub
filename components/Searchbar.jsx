"use client";
import React, { useState } from "react";
import { SearchManufac } from "..";
import SearchButton from "./SearchButton";
import Image from "next/image";
import { URLSearchParams } from "url";

const Searchbar = () => {
  const [modal, setModal] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (manufacturer === "" && modal === "") {
      return alert("Please add car");
    }
  };

  const updatedSearchParams = (modal, manufacturer) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (modal) {
      searchParams.set("modal", modal);
    } else {
      searchParams.delete("modal");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufac
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
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
        <SearchButton otherClasses="sm:hidden " />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
