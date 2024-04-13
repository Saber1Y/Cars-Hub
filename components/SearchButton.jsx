import React from "react";
import Image from "next/image";

const SearchButton = ({ otherstyles }) => {
  return (
    <button type="submit" className={`-ml-3  ${otherstyles}`}>
      <Image
        src="magnifying-glass.svg"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
