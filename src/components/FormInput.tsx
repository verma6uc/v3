import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

export const FormInput: React.FC<FormInputProps> = ({ id, label, type, placeholder }) => {
  return (
    <div>
      <label className="block text-[15px] font-medium text-apple-gray mb-2" htmlFor={id}>
        {label}
      </label>
      <input 
        type={type} 
        id={id} 
        name={id}
        className="w-full px-4 py-3 rounded-lg border border-black/[0.1] focus:border-apple-blue 
                 focus:ring-1 focus:ring-apple-blue outline-none transition-all duration-200
                 text-[17px] bg-white"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export const createFormInput = (
  id: string, 
  label: string, 
  type: string, 
  placeholder: string
): JSX.Element => {
  return <FormInput id={id} label={label} type={type} placeholder={placeholder} />;
};
