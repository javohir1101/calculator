import React from "react";
import styled, { css } from "styled-components";

// img background
import backFon from "../../assets/img/loginBackground.png";

interface ILogin {
  backfon: string;
}

export default function Login() {
  return (
    <StyledLogin backfon={backFon}>
      <div className="container">
        <img src={backFon} className="back" />
        <h1>Welcome back!</h1>
        <div className="information">
          <p>Phone number</p>
          <input type="text" />
        </div>
        <div className="information">
          <p>Password</p>
          <input type="password" />
        </div>
        <button className="lg" type="submit">
          Login
        </button>
      </div>
    </StyledLogin>
  );
}

const StyledLogin = styled.div<ILogin>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0;
    z-index: -1;
  }

  .container {
    max-width: 425px;
    margin: 0 auto;
    padding: 38px;
    background: #fff;
    box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
    border-radius: 16px;
  }
  h1 {
    margin-bottom: 21px;
    font-size: 26px;
    line-height: 31px;
    color: #181c25;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  p {
    margin-bottom: 8px;
    width: 91px;
    font-size: 14px;
    color: #181c25;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  input {
    padding: 0 20px;
    margin-bottom: 18px;
    width: 349px;
    height: 48px;
    background: #fdfdfd;
    border: 1px solid rgba(137, 146, 169, 0.2);
    border-radius: 16px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
  button {
    margin-top: 35px;
    cursor: pointer;
    width: 349px;
    height: 48px;
    background: #3b72ff;
    border-radius: 16px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    border: none;
  }
  .lg {
    color: white;
  }
`;
