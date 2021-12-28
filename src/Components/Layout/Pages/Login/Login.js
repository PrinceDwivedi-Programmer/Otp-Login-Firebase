import React, { Component,useNavigate } from "react";
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

let x = "";



class Login extends Component {
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  configureCaptcha = () => {
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

  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = "+91" + this.state.mobile;
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
  onSubmitOTP = (e) => {
    e.preventDefault();
    const otp = this.state.otp;
    console.log(otp);
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("User is verified");
       
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  showOtpForm = () => {
    if (document.getElementById("mobile").value.length >= 10)
      document.getElementById("submitform").style.display = "block";
    else x = document.getElementById("alert").style.display = "block";
    if (document.getElementById("mobile").value.length >= 10)
      document.getElementById("alert").style.display = "none";
  };

  render() {
    return (
      <div className="maindivlogin shadow">
        <Card className="text-center  shadow">
          <Card.Header className="cardheader">
            Welcome To Tomato Man
          </Card.Header>
          <Card.Body className="cardbody">
            <Card.Title>Login With Phone Number</Card.Title>
            <Form onSubmit={this.onSignInSubmit}>
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
                  onChange={this.handleChange}
                  type="number"
                  name="mobile"
                />
              </InputGroup>

              <Button
                type="submit"
                onClick={this.showOtpForm}
                className="form-control mt-4 buttonlogin"
              >
                GET OTP
              </Button>
              <hr />
              <Alert id="alert" className="alert alert-danger">
                Please Enter A Valid Number
              </Alert>
            </Form>
            <Form id="submitform" onSubmit={this.onSubmitOTP}>
              <InputGroup className="mt-4">
                <InputGroup.Text id="basic-addon1">
                  <FcKey size="25" />
                </InputGroup.Text>
                <FormControl
                  placeholder="Enter Your One Time Password Here"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                  onChange={this.handleChange}
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
    );
  }
}

export default Login;




