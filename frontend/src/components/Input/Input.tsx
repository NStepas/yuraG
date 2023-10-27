import { ReactElement } from 'react';
import './Input.scss';

export const Input = (props: any) => {
  const { name, text, formik, type, autoComplete } = props;
  return (
    <div className=" flex flex-col ">
      <label className=" ">{name}</label>
      <input
        className="outline-dotted outline-2 outline-offset-2 outline-offset-4 bg-darkModeColor m-2 w-auto"
        id={name}
        name={name}
        placeholder={text}
        type={type}
        autoComplete={autoComplete}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      ></input>
      {formik.errors[name] && <p className="error">{formik.errors[name]}</p>}
    </div>
  );
};
