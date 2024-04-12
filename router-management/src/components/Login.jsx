import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleChange(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      onLogin({usr: username, pwd: password});
      navigate("/dashboard");
    }
  }
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <button style={{ background: "lightgreen", padding: "10px 20px" }}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
