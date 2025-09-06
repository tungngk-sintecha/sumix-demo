import React from "react";

interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // wrapper class
  inputClassName?: string; // input-specific class
  labelClassName?: string; // label-specific class
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "",
  inputClassName = "",
  labelClassName = "",
  disabled = false,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm 
                    dark:bg-gray-700 dark:border-gray-600 cursor-pointer 
                    focus:outline-none focus:ring-0 ${inputClassName}`}
      />
      {label && (
        <label
          htmlFor={id}
          className={`ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${labelClassName}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
