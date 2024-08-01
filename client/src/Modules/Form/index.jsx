import React, { useState } from "react";
import Input from "../../Components/input/input";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });

  console.log("data", data);
  return (
    <div className="bg-[#edf3fc] h-screen flex justify-center items-center">
      <div className="bg-white w-[600px] py-10 shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">
          Welcome {isSignInPage && "back"}
        </div>
        <div className="text-xl font-light mb-14">
          {isSignInPage
            ? "Sign in to get expored"
            : "Sign up now to get started"}
        </div>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={() => console.log("submit")}
        >
          {!isSignInPage && (
            <Input
              label="Full Name"
              name="name"
              inputClassName="mb-6"
              placeholder="Enter your name"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
            inputClassName="mb-6"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            inputClassName="mb-6"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={!isSignInPage ? "Sign Up" : "Sign In"}
            className="mt-14 mb-6 "
            type="submit"
          />
        </form>
        <div>
          {isSignInPage
            ? "Did'nt have an account?"
            : "Already have an Account?"}{" "}
          <Link
            className="text-primary cursor-pointer underline"
            to={isSignInPage ? "/users/sign_up" : "/users/sign_in"}
          >
            {isSignInPage ? "Sign in" : "Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
