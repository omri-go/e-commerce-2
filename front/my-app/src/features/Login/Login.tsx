import React, { useState } from "react";
import { selectLogged, loginAsync } from "./loginSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
const Login = () => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const logged = useAppSelector(selectLogged);
  const dispatch = useAppDispatch();
  return (
    <div>
      {logged ? "welcome..." : "please login"}
      <h1>Login</h1>
      User:
      <input onChange={(e) => setuser(e.target.value)} />
      Pwd:
      <input onChange={(e) => setpassword(e.target.value)} />
      <button onClick={() => dispatch(loginAsync({ user, password }))}>Login</button>
    </div>
  );
};

export default Login;
