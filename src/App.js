import { useState } from "react";
import "./App.css";

function App() {
  // const [fname, setFName] = useState("");
  // const [lname, setLName] = useState("");
  // console.log(fname);
  // console.log(lname);
  // function changeFnameHandler(event) {
  //   // console.log("FirstName");
  //   // console.log(event.target.value);
  //   setFName(event.target.value);
  // }
  // function changeLnameHandler(event) {
  //   // console.log("LastName");
  //   // console.log(event.target.value);
  //   setLName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  function changeHandler(event) {
    setFormData(function (prevFormData) {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  }

  console.log(formData);
  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="firstname"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="lastname"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
      </form>
    </div>
  );
}

export default App;
