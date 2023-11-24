import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [values, setValues] = useState({
    Name: '',
    Gender: '',
    Age: '',
    Mobile: '',
    Gmail: '',
    Address: '',
    District: '',
    State: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mistakes = {};

    if (!values.Name) {
      mistakes.Name = 'Name is required';
    }

    if (!values.Gender) {
      mistakes.Gender = 'Gender is required';
    }

    if (!values.Age) {
      mistakes.Age = 'Age is required';
    }

    if (values.Mobile.length !== 10) {
      mistakes.Mobile = 'Mobile number is not valid';
    }

    if (!values.Gmail) {
      mistakes.Gmail = 'Gmail is required';
    }

    if (!values.Address) {
      mistakes.Address = 'Address is required';
    }

    if (!values.District) {
      mistakes.District = 'District is required';
    }

    if (!values.State) {
      mistakes.State = 'State is required';
    }

    if (Object.keys(mistakes).length === 0) {
      axios
        .post('http://localhost:8080/insert', {
          Name: values.Name,
          Gender: values.Gender,
          Age: values.Age,
          Mobile: values.Mobile,
          Gmail: values.Gmail,
          Address: values.Address,
          District: values.District,
          State: values.State
        })
        .then((res) => {
          console.log(res.data);
          if(res.data.success===true){
            alert("sucess")
            window.location.reload();
          }else{
            alert("failed")
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    setErrors(mistakes);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Bio - Data</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="Name"
            name="name"
            placeholder="enter your name"
            onChange={handleChange}
            value={values.Name}
            required
          />
          {errors.Name && <span>{errors.Name}</span>}

          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="Gender"
            name="gender"
            placeholder="enter your gender"
            onChange={handleChange}
            value={values.Gender}
            required
          />
          {errors.Gender && <span>{errors.Gender}</span>}

          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="Age"
            name="age"
            placeholder="enter your age"
            onChange={handleChange}
            value={values.Age}
            required
          />
          {errors.Age && <span>{errors.Age}</span>}

          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            id="Mobile"
            name="mobile"
            placeholder="enter your mobile"
            onChange={handleChange}
            value={values.Mobile}
            required
          />
          {errors.Mobile && <span>{errors.Mobile}</span>}

          <label htmlFor="gmail">Gmail:</label>
          <input
            type="email"
            id="Gmail"
            name="gmail"
            placeholder="enter your gmail"
            value={values.Gmail}
            onChange={handleChange}
            required
          />
          {errors.Gmail && <span>{errors.Gmail}</span>}

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="Address"
            name="address"
            placeholder="enter your address"
            onChange={handleChange}
            value={values.Address}
            required
          />
          {errors.Address && <span>{errors.Address}</span>}

          <label htmlFor="district">District:</label>
          <input
            type="text"
            id="District"
            name="district"
            placeholder="enter your district"
            onChange={handleChange}
            value={values.District}
            required
          />
          {errors.District && <span>{errors.District}</span>}

          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="State"
            name="state"
            placeholder="enter your state"
            onChange={handleChange}
            value={values.State}
            required
          />
          {errors.State && <span>{errors.State}</span>}

          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default App;