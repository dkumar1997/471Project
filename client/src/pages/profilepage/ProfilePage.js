import NavBar from "../../components/NavBar";
import "./ProfilePage.css";
import { useState, useEffect } from "react";
function ProfilePage() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    console.log(userId);
    fetch(`/get_user_info?userId=${userId}`)
      .then((res) => res.json())
      .then((userInfo) => {
        console.log(userInfo);
        setUserInfo(userInfo);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <NavBar />
      {userInfo != null ? (
        <div className="plat-form-container">
          <div className="col-md-8">
            <div
              className="profile-card"
              style={{ width: "50%", margin: "auto", marginTop: "20px" }}
            >
              <div className="profile-card-body" style={{ margin: "auto" }}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      width: "50%",
                    }}
                  />
                  <div className="mt-3" style={{ textAlign: "center" }}>
                    <h4>
                      {userInfo
                        ? userInfo.firstName + " " + userInfo.lastName
                        : "Hello"}
                    </h4>
                    <p className="text-muted font-size-sm">
                      {userInfo ? userInfo.address : "address"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-card mb-3">
              <div className="profile-card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userInfo ? userInfo.firstName : "Dheeraj"}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userInfo ? userInfo.lastName : "Kumar"}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userInfo ? userInfo.email : "123@gmail.com"}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Riding </h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userInfo.ridingName}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userInfo ? userInfo.address : "Address"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default ProfilePage;
