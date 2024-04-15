import React from "react";
import Image from "next/image";

const SearchButton = ({ otherClasses }) => {
  return (
    <button type="submit" className={`-ml-3  ${otherClasses}`}>
      <Image
        src="magnifying-glass.svg"
        width={40}
        height={40}
        className="object-contain"
        alt="search-icon"
      />
    </button>
  );
};

export default SearchButton;
