import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      {/* <Greet name="Karan" messageCount={10} isLoggedIn={true} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Karan" isLoggedIn={true} />
    </div>
  );
}

export default App;
