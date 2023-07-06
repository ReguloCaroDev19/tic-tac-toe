import React, { useState } from "react";

export const Square = ({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: any;
}) => {
  /*   const [value, setValue] = useState<String>(""); */
  console.log(value);

  /* const changeValue = () => {
    setValue("X");
  }; */
  return (
    <div
      className="flex justify-center text-center border-solid border-2 py-6 border-white h-[150px] w-[150px]"
      onClick={onSquareClick}
    >
      <button className="flex text-white px-4 text-[50px] justify-center text-center">
        {value}
      </button>
    </div>
  );
};
