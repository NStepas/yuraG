import React from 'react';
import { useFormik } from 'formik';
import { validate, initialValues } from './formValidation';
import { Input } from '../../../components/Input/Input';

export const Login = () => {
  const handleSubmit = async () => {};

  const formik = useFormik({
    initialValues,
    validationSchema: validate,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form className="flex justify-center">
        <h1></h1>
        <Input
          formik={formik}
          name="email"
          text="Email field"
          type="email"
          autoComplete="email"
        ></Input>
      </form>
    </div>
  );
};
