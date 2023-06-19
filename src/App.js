import { useState } from "react";
import "./App.css";

function App() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  console.log(fname);
  console.log(lname);
  function changeFnameHandler(event) {
    // console.log("FirstName");
    // console.log(event.target.value);
    setFName(event.target.value);
  }
  function changeLnameHandler(event) {
    // console.log("LastName");
    // console.log(event.target.value);
    setLName(event.target.value);
  }
  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="firstname"
          onChange={changeFnameHandler}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="lastname"
          onChange={changeLnameHandler}
        />
      </form>
    </div>
  );
}

export default App;
