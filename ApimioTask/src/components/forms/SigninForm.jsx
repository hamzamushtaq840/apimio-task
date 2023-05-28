import { ErrorMessage, Field, Form, Formik } from "formik";
import React from 'react';
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const SigninFormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SigninForm = ({ handleLogin }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SigninFormSchema}
      onSubmit={(fields) => {
        handleLogin(fields);
      }}
    >
      {({ errors, touched }) => (
        <Form className="w-[447.99999999999994px] xsm:w-[320px] bg-white flex flex-col gap-6 py-8 px-10 rounded-lg shadow sm:rounded-lg sm:px-10">
          <div className="flex flex-col">
            <label className="text-sm font-medium leading-5 mb-1 text-gray-700">Email</label>
            <Field
              name="email"
              type="text"
              className={
                "py-2 px-3 border rounded-md shadow-sm focus:border-blue-300 focus:outline-none focus:shadow-blue-200 sm:text-sm sm:leading-5 w-full" +
                (errors.email && touched.email
                  ? "border border-red-600 "
                  : "border border-gray-300 ")
              }
            />
            <ErrorMessage
              name="email"
              component="div"
              className='text-xs mt-1 text-red-500'
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium leading-5 mb-1 text-gray-700">Password</label>
            <Field
              name="password"
              type="password"
              className={
                "py-2 px-3 border rounded-md shadow-sm focus:border-blue-300 focus:outline-none focus:shadow-blue-200 sm:text-sm sm:leading-5 w-full" +
                (errors.password && touched.password
                  ? "border border-red-600"
                  : "border border-gray-300")
              }
            />
            <ErrorMessage
              name="password"
              component="div"
              className='text-xs mt-1 text-red-500'
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Sign in
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SigninForm