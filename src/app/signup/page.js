"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import Divider from "@mui/material/Divider";
import Buttons from "@/components/Buttons";
import InputField from "@/components/InputField";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  //react hook form initialization
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmitHandler = async (data) => {
    const { username, email, password } = data;

    try {
      setLoading(true);
      const response = await api.post("/auth/public/signup", sendData);
      toast.success("Reagister Successful");
      reset();
      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      // Add an error programmatically by using the setError function provided by react-hook-form
      //setError(keyword,message) => keyword means the name of the field where I want to show the error

      if (
        error?.response?.data?.message === "Error: Username is already taken!"
      ) {
        setError("username", { message: "username is already taken" });
      } else if (
        error?.response?.data?.message === "Error: Email is already in use!"
      ) {
        setError("email", { message: "Email is already in use" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dashboardBd flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="sm:w-[470px] w-[360px]  shadow-custom rounded-xl  pt-10 pb-7 sm:px-8 px-4"
      >
        <div>
          <h1 className=" text-center font-extrabold text-3xl uppercase italic  text-textColor">
            cleverlly
          </h1>
          <p className="text-slate-600 text-center">
            Enter your credentials to create new account
          </p>

          <div className="flex items-center justify-between gap-1 py-5 ">
            <button
              type="button"
              className="flex gap-1 items-center justify-center flex-1 border p-2 shadow-sm shadow-slate-200 rounded-md hover:bg-slate-300 transition-all duration-300"
            >
              <span>
                <FcGoogle className="text-2xl" />
              </span>
              <span className="font-semibold sm:text-customText text-xs">
                Login with Google
              </span>
            </button>
            <button
              type="button"
              className="flex gap-1 items-center justify-center flex-1 border p-2 shadow-sm shadow-slate-200 rounded-md hover:bg-slate-300 transition-all duration-300"
            >
              <span>
                <FaApple className="text-2xl" />
              </span>
              <span className="font-semibold sm:text-customText text-xs">
                Login with Apple
              </span>
            </button>
          </div>

          <Divider className="font-semibold">OR</Divider>
        </div>

        <div className="flex flex-col gap-2">
          <InputField
            label="First Name"
            required
            id="firstName"
            type="text"
            message="*First Name is required"
            placeholder="type your first name"
            register={register}
            errors={errors}
          />
          <InputField
            label="Last Name"
            required
            id="lastName"
            type="text"
            message="*Last Name is required"
            placeholder="type your last name"
            register={register}
            errors={errors}
          />
          <InputField
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="type your email"
            register={register}
            errors={errors}
          />
          <InputField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="type your password"
            register={register}
            errors={errors}
            min={8}
          />
        </div>
        <Buttons
          disabled={loading}
          onClickhandler={() => {}}
          className="bg-rose-700 rounded-md font-semibold flex justify-center text-white w-full py-2 hover:text-slate-400 transition-colors duration-100  my-3"
          type="text"
        >
          {loading ? <span>Loading...</span> : "Register"}
        </Buttons>
      </form>
    </div>
  );
};

export default Signup;
