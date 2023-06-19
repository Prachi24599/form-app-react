import "./App.css";

function App() {
  function changeFnameHandler(event) {
    console.log("FirstName");
    console.log(event.target.value);
  }
  function changeLnameHandler(event) {
    console.log("LastName");
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="firstname"
          onChange={changeFnameHandler}
        />
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
