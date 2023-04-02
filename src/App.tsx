import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Steven",
    last: "Strange",
  };

  const nameList = [
    {
      first: "John",
      last: "Wick",
    },
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Tony",
      last: "Stark",
    },
    {
      first: "Peter",
      last: "Parker",
    },
    {
      first: "Clark",
      last: "Kent",
    },
  ];
  
  return (
    <div className="App">
      <Greet name="Karan" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
