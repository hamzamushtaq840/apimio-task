import { ErrorMessage, Field, Form, Formik } from "formik";
import React from 'react';
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  acceptTerms: false,
};

const SignupFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});

const SignupForm = ({ handleRegistration }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupFormSchema}
      onSubmit={(fields) => {
        handleRegistration(fields);
      }}
    >
      {({ errors, touched }) => (
        <Form className='w-[447.99999999999994px] xsm:w-[320px] bg-white flex flex-col gap-6 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <div className="flex flex-col">
            <label className="text-sm font-medium leading-5 mb-1 text-gray-700">Name</label>
            <Field
              name="name"
              type="text"
              className={
                "py-2 px-3 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  sm:text-sm sm:leading-5 w-full" +
                (errors.name && touched.name
                  ? " border border-red-600 focus:border-red-600"
                  : " border border-gray-300 focus:border-blue-300")
              }
            />
            <ErrorMessage
              name="name"
              component="div"
              className='text-xs mt-1 text-red-500'
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-sm font-medium leading-5 mb-1 text-gray-700">Email</label>
            <Field
              name="email"
              type="text"
              className={
                "py-2 px-3 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  sm:text-sm sm:leading-5 w-full" +
                (errors.email && touched.email
                  ? " border border-red-600 focus:border-red-600"
                  : " border border-gray-300 focus:border-blue-300")
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
                "py-2 px-3 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue sm:text-sm sm:leading-5 w-full" +
                (errors.password && touched.password
                  ? " border border-red-600 focus:border-red-600"
                  : " border border-gray-300 focus:border-blue-300")
              }
            />
            <ErrorMessage
              name="password"
              component="div"
              className='text-xs mt-1 text-red-500'
            />
          </div>
          <div className="col-12">
            <div className="flex gap-2 items-start">
              <Field
                type="checkbox"
                name="acceptTerms"
                className="h-4 w-4  transition duration-150 ease-in-out cursor-pointer"
              />
              <div className='flex flex-col'>
                <label className="font-medium text-sm leading-5 text-gray-700 mt-[-2px]">
                  I have read and accept Kiwify's terms of use, software use license terms, content policy
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className='text-xs mt-1 text-red-500'
                />
              </div>
            </div>

          </div>
          <div className="">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Sign up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm