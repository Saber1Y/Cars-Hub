import React from "react";
import Image from "next/image";

const SearchButton = ({ otherstyles }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherstyles}`}>
      <Image
        src="magnifiying-glass.svg"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
