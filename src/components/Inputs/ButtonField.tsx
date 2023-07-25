import React from "react";

type buttonFieldPropsType = {
  btnType: "button" | "submit" | "reset" | undefined;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const GreenBtn = ({ btnType, title, onClick }: buttonFieldPropsType) => {
  return (
    <button
      onClick={onClick}
      type={btnType}
      className="bg-light-green-500 w-full rounded-md py-2 hover:shadow-green-700/60 hover:shadow-lg transition-all duration-150 active:scale-95"
    >
      {title}
    </button>
  );
};
const BlueBtn = ({ btnType, title, onClick }: buttonFieldPropsType) => {
  return (
    <button
      onClick={onClick}
      type={btnType}
      className="mt-3 bg-light-blue-300 w-full rounded-md py-2 hover:shadow-light-blue-700/60 hover:shadow-lg transition-all duration-150 active:scale-95"
    >
      {title}
    </button>
  );
};

export { GreenBtn, BlueBtn };
