import React from "react";
import { useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 my-4">
      <label htmlFor={field.name}>{label}</label>
      <input
        className="form-control shadow-none"
        {...field}
        {...props}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
