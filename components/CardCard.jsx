"use client";

import React, { useState } from "react";
import Image from "next/image";
import { fetchCars } from "@/utils";
import { CustomButton } from "..";
import { CarDetials } from "..";

const CardCard = ({ car }) => {

    const [open, setOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>

      <div className="relative w-full h-40 object-contain my-3">
        <Image
          src="/hero.png"
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steer-wheel"
            />
            <p className="text-[14px]">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{car.drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steer-wheel"
            />
            <p className="text-[14px]">{car.city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
            <CustomButton title="View More" containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles="text-white text-[14px] leading-17px font-bold" rightIcon="/right-arrow.svg" handleClick={() => SetTrue(true)}  />
        </div>
      </div>

      <CarDetials open={open} closeModal={() => setOpen(false)} car={car} />
    </div>
  );
};

export default CardCard;
