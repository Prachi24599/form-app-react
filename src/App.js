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
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(function (prevFormData) {
      // return { ...prevFormData, [event.target.name]: event.target.value };.
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  // console.log(formData);

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing entore form data");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
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
        <br />
        <br />
        <textarea
          placeholder="comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          // value={formData.isVisible}
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I Visible?</label>
        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online-mode"
            id="online-mode"
            checked={formData.mode === "online-mode"}
          />
          <label htmlFor="online-mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="offline-mode"
            id="offline-mode"
            checked={formData.mode === "offline-mode"}
          />
          <label htmlFor="offline-mode">offline Mode</label>
        </fieldset>

        <label htmlFor="favCar">Tell me your favourite car:</label>

        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scorpio">Scorpio</option>
          <option value="maruti">Maruti</option>
          <option value="tata">Tata</option>
          <option value="tesla">Tesla</option>
        </select>

        <br />
        <br />
        {/* create submit button */}
        <input type="submit" value="Submit" />
        {/* By default type of button is submit in form (if we use button tag) */}
        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}

export default App;
