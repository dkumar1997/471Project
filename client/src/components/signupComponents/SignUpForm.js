import { useState } from "react";
function SignUpForm(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    sin: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSignUp(state);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="fadeIn second"
        name="firstName"
        placeholder="firstName"
        onChange={onChange}
        value={state.firstName}
      />
      <input
        type="text"
        className="fadeIn second"
        name="lastName"
        placeholder="lastName"
        onChange={onChange}
        value={state.lastName}
      />
      <input
        type="text"
        className="fadeIn second"
        name="address"
        placeholder="address"
        onChange={onChange}
        value={state.address}
      />
      <input
        type="text"
        className="fadeIn second"
        name="email"
        placeholder="email"
        onChange={onChange}
        value={state.email}
      />
      <input
        type="text"
        className="fadeIn second"
        name="username"
        placeholder="username"
        onChange={onChange}
        value={state.username}
      />
      <input
        type="password"
        className="fadeIn second"
        name="password"
        placeholder="password"
        onChange={onChange}
        value={state.password}
      />
      <input
        type="text"
        className="fadeIn second"
        name="sin"
        placeholder="sin"
        onChange={onChange}
        value={state.sin}
      />
      <div className="formButtons">
        <input type="submit" className="fadeIn fourth" value="Sign Up" />
      </div>
    </form>
  );
}
export default SignUpForm;
