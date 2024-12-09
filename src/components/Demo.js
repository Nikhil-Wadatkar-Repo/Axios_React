import React, { useEffect, useState } from "react";

function Demo() {
  // normal method
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [array, setArray] = useState([]);
  const [age, setAge] = useState(10);
  const getNames = () => {
    setArray(["1", "2", "3"]);
  };
  //   const[var, method for changing var]=useState(defaultvalues)
  // used to call or sdo operation at page loading
  useEffect(() => {
    getNames();
  }, []);

  const validate = (num) => {
    if (num === "" || num === undefined || num === null) {
      setErrorMessage("Please enter valid input.");
    } else {
      setErrorMessage("Added");
    }
  };
  return (
    <div>
      Name: {name}
      Age:{age}
      <h3>Error: {errorMessage}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br></br>
      <button
        onClick={(e) => {
          setArray([...array, name]);
          setName("");
        }}
      >
        Add Name
      </button>
      <button
        onClick={(e) => {
          validate(name);
        }}
      >
        Validate
      </button>
      <br></br>
      List <br></br>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <br></br>
      Condition rendering : <br></br>
      {age >= 1 && age <= 18 && name === "Hima" ? (
        <div> {name}</div>
      ) : (
        <div>NA</div>
      )}
      <br></br>
    </div>
  );
}

export default Demo;
