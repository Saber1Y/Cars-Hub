"use client";
import React, { useState } from "react";
import { SearchManufac } from "..";
import SearchButton from "./SearchButton";
import Image from "next/image";
// import { router } from "next/navigation";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const [modal, setModal] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (manufacturer === "" && modal === "") {
      return alert("Please add car");
    }

    updatedSearchParams(
      modal.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    );
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

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
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
          onChange={(e) => setModal(e.target.value)}
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
