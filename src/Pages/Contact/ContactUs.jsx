import { useFormik } from 'formik';
import React, { useState } from 'react'
import validationSchemas from '../../Utility/ValidationSchemas';

function ContactUs() {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone_Number: "",
    subject: "",
    service: "",
  });

  const initialValues = {
    name: "",
    email: "",
    phone_Number: "",
    subject: "",
    service: ""
  };

  const { handleBlur, handleChange, touched, errors, values, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchemas,

      onSubmit: (values, {resetForm}) => {
        setContactFormData(values);
        console.log("values", values);
        resetForm();
      },
    });

  return (
    <div>
      <section className="common-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Contact Us</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="inputName"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name && (
                    <div className="error-message">{errors.name}</div>
                  )}
                </div>

                <div className="input-wrapper">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="inputEmail"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>

                <div className="input-wrapper">
                  <label htmlFor="inputPhoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone_Number"
                    id="inputPhoneNumber"
                    value={values.phone_Number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.phone_Number && errors.phone_Number && (
                    <div className="error-message">{errors.phone_Number}</div>
                  )}
                </div>

                <div className="input-wrapper">
                  <label htmlFor="inputSubject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="inputSubject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.subject && errors.subject && (
                    <div className="error-message">{errors.subject}</div>
                  )}
                </div>

                <div className="input-wrapper">
                  <label htmlFor="inputSubject" className="form-label">
                    Service
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleChange}
                    name="service"
                    onBlur={handleBlur}
                    value={values.service}
                  >
                    <option>Open this select menu</option>
                    <option value="Service One">Service One</option>
                    <option value="Service Two">Service Two</option>
                    <option value="Service Three">Service Three</option>
                  </select>

                  {touched.service && errors.service && (
                    <div className="error-message">{errors.service}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-lg-6">
              <div className="data-display-card">
                <h3>Contact form data</h3>
                <p>
                  Name: <strong>{contactFormData.name}</strong>
                </p>
                <p>
                  Email: <strong>{contactFormData.email}</strong>
                </p>
                <p>
                  phone_Number: <strong>{contactFormData.phone_Number}</strong>
                </p>
                <p>
                  subject: <strong>{contactFormData.subject}</strong>
                </p>
                <p>
                  Service: <strong>{contactFormData.service}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="todo-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="todo-wrapper">
                <h2>Todo Listing</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="todo-input-wrapper">
                      <input type="text" placeholder="Enter your todo name" />
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h3>Todo items results</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs