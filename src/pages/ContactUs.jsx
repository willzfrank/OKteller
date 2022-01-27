import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
import styled from "styled-components";

import Layout from "../components/Layout";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: false,
      contact: "",
      email: "",
      emailError: false,
      emailError2: false,
      message: "",
      messageError: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  // isValidcontact(contactno) {
  //   return /^[6-9]\d{9}$/.test(contactno);
  // }

  handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });

    if (value.length <= 0 && name === "name") {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    }

    if (value.length <= 0 && name === "email") {
      this.setState({ emailError: true });
      this.setState({ emailError2: false });
    } else {
      this.setState({ emailError: false });
      if (this.isValidEmail(value)) {
        this.setState({ emailError2: false });
      } else {
        this.setState({ emailError2: true });
      }
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const {
      name,
      email,
      message,
      nameError,
      emailError,
      emailError2,
      messageError,
    } = this.state;

    this.setState({ nameError: name ? false : true });
    this.setState({ messageError: message ? false : true });
    this.setState({ emailError: email ? false : true });
    if (email && !emailError) {
      this.setState({ emailError2: this.isValidEmail(email) ? false : true });
    }

    if (
      name &&
      email &&
      message &&
      !nameError &&
      !emailError &&
      !emailError2 &&
      !messageError
    ) {
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }

    e.preventDefault();
  }

  render() {
    const { nameError, emailError, emailError2, messageError, formValid } =
      this.state;

    if (!formValid) {
      return (
        <Layout>
          <Section id="contactus" className="mx-5">
            <div className="card shadow-lg border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 form__main-container">
              <div className="card-body form__main-box">
                <div className="card-header bg-transparent border-0 text-center form__container">
                  <h3>Get In Touch</h3>
                </div>
                <form
                  action="/"
                  onSubmit={(e) => this.handleSubmit(e)}
                  encType="multipart/form-data"
                  autoComplete="off"
                >
                  <div className="form-group form-group-container my-3">
                    <label className="mb-2">
                      Your name<span className="span__text">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    {nameError ? (
                      <div className="alert alert-danger mt-0 w-60">
                        Name is a required field.
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group my-3">
                    <label className="mb-2">
                      Your email<span className="text-danger w-60">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    {emailError ? (
                      <div className="alert alert-danger mt-0 w-60">
                        Email is a required field.
                      </div>
                    ) : (
                      ""
                    )}
                    {emailError2 ? (
                      <div className="alert alert-danger mt-0 w-60">
                        Email invalid.
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* <div className="form-group">
                  <label className="mb-2">Your contact number (Optional)</label>
                  <input
                    name="contact"
                    type="text"
                    className="form-control"
                    placeholder="Contact"
                    onChange={this.handleChange}
                    value={this.state.contact}
                  />
                </div> */}
                  <div className="form-group my-3">
                    <label className="mb-3">
                      Message<span className="text-danger w-60">*</span>
                    </label>
                    <textarea
                      name="message"
                      type="text"
                      className="form-control"
                      placeholder="Message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    {messageError ? (
                      <div className="alert alert-danger mt-0 w-60">
                        Message is a required field.
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="text-left my-5">
                    <span
                      //     href="
                      //   mailto:info@okteller.com"
                      className="form__btn w-50"
                    >
                      <input
                        type="submit"
                        className="btn btn-lg  text-uppercase "
                        value="Submit Now"
                      />
                    </span>
                  </div>
                </form>
              </div>
              <div>
                <iframe
                  title="Okteller Nigeria"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9386.554352089293!2d3.3355374871187764!3d6.5602015364408315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d27acd7285d%3A0x6830cad9f459ea4c!2sVTU%20PROVIDER!5e0!3m2!1sen!2sng!4v1643236171599!5m2!1sen!2sng"
                  // width="600"
                  // height="450"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Section>
        </Layout>
      );
    } else {
      return (
        <Layout>
          <div className="thankyou_details">
            <div className="alert alert-success mt-3">
              Mail sent successfully.
            </div>
          </div>
        </Layout>
      );
    }
  }
}

export default ContactUs;

const Section = styled.section`
  margin: 0px 0px 150px 0px;
  font-family: "Montserrat", sans-serif;

  .form__main-container {
    display: flex;
    flex-direction: row;
    @media screen and (min-width: 320px) and (max-width: 846px) {
      flex-direction: column;
    }

    iframe {
      border: 0;
      width: 100%;
      height: 100%;
    }
    .form__container {
      h3 {
        text-align: left;
        margin: 25px 0px;
        font-family: "Montserrat", sans-serif;
        color: var(--fourth__color);
      }
    }
    .form__main-box {
      border-radius: 8px;
      width: 50% !important;
      @media screen and (min-width: 320px) and (max-width: 846px) {
        width: 100% !important;
      }
      form {
        color: var(--fourth__color);
        .form-group {
          input {
            width: 60%;
          }
          textarea {
            width: 60%;
          }
          label {
            .span__text {
            }
          }
        }
      }
    }
  }
`;
