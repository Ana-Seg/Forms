import React from 'react';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Username should be an email';
      }

      if (!values.password) {
        errors.password = 'Field required';
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      alert('Login Successful');
      console.log('Login Successful');

      resetForm();
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div>Email</div>
        <input
          id="emailField"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div id="emailError">{formik.errors.email}</div>
        )}

        <div>Password</div>
        <input
          id="pswField"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div id="pswError">{formik.errors.password}</div>
        )}

        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
