import SignUpForm from "../../components/signupComponents/SignUpForm";
import logo from "../../images/canada.png";

function SignUpPage(props) {
  const onSignUp = (state) => {
    fetch(`/signup_user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((id) => {
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
    props.navigate("/");
  };
  return (
    <div className="login-wrapper fadeInDown" style={{ marginTop: "10px" }}>
      <div id="formContent">
        <div className="fadeIn first">
          <img src={logo} alt="logo" id="icon" />
        </div>
        <h2 className="active"> Sign Up </h2>
        <SignUpForm onSignUp={onSignUp} />
      </div>
    </div>
  );
}
export default SignUpPage;
