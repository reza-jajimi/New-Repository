import { ErrorMessage } from "@hookform/error-message";
import React from "react";

type inputFieldType = {
  register: any;
  errors: any;
  inputName: string;
  inputType: string;
  title: string;
};

const InputField = ({
  register,
  errors,
  inputType,
  inputName,
  title,
}: inputFieldType) => {
  return (
    <div className="mb-3">
      <p className="text-gray-900">{title}</p>
      <input
        className="w-full p-1 border border-gray-400 bg-white rounded-md focus:outline-light-green-800/80"
        type={inputType}
        {...register(inputName)}
      />
      <div className="h-4">
        <ErrorMessage
          errors={errors}
          name={inputName}
          render={({ message }) => <p className="text-xs text-red-600">{message}</p>}
        />
      </div>
    </div>
  );
};

export default InputField;
