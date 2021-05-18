import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../img/logoLarge.png";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.profileURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <img src={Logo} />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (Required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          placeholder="Profile pic URL (Optional)"
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <RegisterSpan onClick={register}> Register Now</RegisterSpan>
      </p>
    </LoginContainer>
  );
}

export default Login;

const RegisterSpan = styled.span`
  color: #0177b7;
  cursor: pointer;
  font-weight: 600;
`;

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 200px;
  padding-bottom: 200px;

  > img {
    object-fit: contain;
    height: 200px;
    margin-top: 20px;
  }

  > form {
    display: flex;
    flex-direction: column;
  }

  > form > input {
    width: 350px;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  > form > Button {
    width: 365px;
    height: 50px;
    font-size: large;
    color: #fff;
    background-color: #0074b1;
    border-radius: 5px;
  }
  > p {
    margin-top: 20px;
  }
`;
