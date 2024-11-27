"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

import Buttons from "@/components/Buttons";
import InputField from "@/components/InputField";
import { useContextProvider } from "../../../hooks/useContextProvider";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setSelectSubjectHandler } = useContextProvider();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmitHandler = async (formData) => {
    setLoading(true);

    signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    }).then((cb) => {
      if (cb?.ok) {
        setLoading(false);
        router.push("/");

        router.refresh();
        toast.success("Login Success");
      }
      if (cb?.error) {
        setLoading(false);
        toast.error(cb.error);
      }
    });
  };

  useEffect(() => {
    setSelectSubjectHandler("subjects/all");
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)]  flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="sm:w-[470px] w-[360px]  shadow-custom rounded-xl  pt-10 pb-7 sm:px-8 px-4"
      >
        <div className="mb-5">
          <h1 className=" text-center font-extrabold text-3xl uppercase italic  text-textColor">
            cleverlly
          </h1>
          <p className="text-slate-600 text-center">
            Enter your credentials to SignIn
          </p>
        </div>

        <div className="flex flex-col gap-2">
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
          />
        </div>
        <Buttons
          disabled={loading}
          onClickhandler={() => {}}
          className="bg-rose-700 rounded-md font-semibold flex justify-center text-white w-full py-2 hover:text-slate-400 transition-colors duration-100  my-3"
          type="text"
        >
          {loading ? <span>Loading...</span> : "LogIn"}
        </Buttons>
      </form>
    </div>
  );
};

export default SignIn;
