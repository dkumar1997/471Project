import "./LoginForm.css";
import { useState } from "react";
function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onLogin({ username: username, password: password });
  };
  const onSignUpClick = () => {
    props.navigate("/signup");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      {props.loginErrorMessage ? (
        ""
      ) : (
        <div style={{ color: "red" }}>Please try again</div>
      )}
      <input
        type="text"
        id="login"
        className="fadeIn second"
        name="username"
        placeholder="Username"
        onChange={usernameChangeHandler}
        value={username}
      />
      <input
        type="password"
        id="password"
        className="fadeIn third"
        name="login"
        placeholder="password"
        onChange={passwordChangeHandler}
        value={password}
      />
      <div className="formButtons">
        <input type="submit" className="fadeIn fourth" value="Log In" />
        <input
          type="button"
          className="fadeIn fourth"
          value="Sign-up"
          onClick={onSignUpClick}
        />
      </div>
    </form>
  );
}
export default LoginForm;
