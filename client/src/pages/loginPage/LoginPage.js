import LoginForm from "../../components/loginComponents/LoginForm";
import "./LoginPage.css";
import logo from "../../images/canada.png";
import { useState } from "react";
function LoginPage(props) {
  const [loginErrorMessage, setLoginErrorMessage] = useState(true);
  const validateLogin = (userInfo) => {
    fetch(
      `/get_user_credentials?username=${userInfo.username}&password=${userInfo.password}`
    )
      .then((res) => res.json())
      .then((id) => {
        if (id > 0) {
          setLoginErrorMessage(true);
          console.log(id);
          localStorage.setItem("userId", id);
          console.log("localstorage:" + localStorage.getItem("userId"));
          props.navigate("/profile");
        } else {
          setLoginErrorMessage(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src={logo} alt="logo" id="icon" />
        </div>
        <h2 className="active"> Sign In </h2>
        <LoginForm
          onLogin={validateLogin}
          navigate={props.navigate}
          loginErrorMessage={loginErrorMessage}
        />
      </div>
    </div>
  );
}
export default LoginPage;
