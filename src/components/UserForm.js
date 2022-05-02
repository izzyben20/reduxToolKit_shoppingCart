import React, { useState } from 'react';

const UserForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    // const {name, value} = e.target;
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">FirstName</label>
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">FirstName</label>
        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
