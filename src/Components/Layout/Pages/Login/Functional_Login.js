import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  Form,
  Alert,
} from "react-bootstrap";
import "./Login.css";
import { FcPhone, FcKey } from "react-icons/fc";
import firebase from "./firebase";
import Navigation from "./Navigation"

let x = "";

const Functional_Login = () => {

const  navigate=useNavigate()
  const [phone, setPhone] = useState({
    mobile: "",
    otp: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    console.log(value);
    setPhone({ ...phone, [name]: value });
  };

  const { mobile } = phone;

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("Otp has been sent successfully");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("Otp Not Sent");
      });
  };
 
  const onSubmitOTP = (e) => {
    const {  otp } = phone;
    e.preventDefault();
    const Otp = otp;
    console.log(Otp);
    window.confirmationResult
      .confirm(Otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        window.alert("User Verified Successfully");
        navigate("/home")
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  const showOtpForm = () => {
    if (document.getElementById("mobile").value.length >= 10)
      document.getElementById("submitform").style.display = "block";
    else x = document.getElementById("alert").style.display = "block";
    if (document.getElementById("mobile").value.length >= 10)
      document.getElementById("alert").style.display = "none";
  };

  return (
   <div >
   <div className="loginnav"><Navigation/></div>
       <div className="maindivlogin shadow">
      <Card className="text-center  shadow">
        <Card.Header className="cardheader">WELCOME TO TOMATOMAN</Card.Header>
        <Card.Body className="cardbody">
          <Card.Title>Login With Phone Number</Card.Title>
          <Form onSubmit={onSignInSubmit}>
            <div id="sign-in-button"></div>
            <InputGroup className="mt-3">
              <InputGroup.Text id="basic-addon1">
                <FcPhone size="25" />
              </InputGroup.Text>
              <FormControl
                id="mobile"
                placeholder="Enter Your Mobile Number"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                onChange={handleChange}
                type="number"
                name="mobile"
              />
            </InputGroup>

            <Button
              type="submit"
              onClick={showOtpForm}
              className="form-control mt-4 buttonlogin"
            >
              GET OTP
            </Button>
            <hr />
            <Alert id="alert" className="alert alert-danger">
              Please Enter A Valid Number
            </Alert>
          </Form>
          <Form id="submitform" onSubmit={onSubmitOTP}>
            <InputGroup className="mt-4">
              <InputGroup.Text id="basic-addon1">
                <FcKey size="25" />
              </InputGroup.Text>
              <FormControl
                placeholder="Enter Your One Time Password Here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                onChange={handleChange}
                type="number"
                name="otp"
              />
            </InputGroup>

            <Button type="submit"  className="form-control mt-4 buttonsubmit">
              Submit
            </Button>
            <hr />
          </Form>
        </Card.Body>
      </Card>
    </div>
</div>

  );
};

export default Functional_Login;
