import React from "react";

export const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
        />
        <label htmlFor="password">Password</label>
        <input type="passowrd" id="password" name="password" />
      </form>
    </div>
  );
};
