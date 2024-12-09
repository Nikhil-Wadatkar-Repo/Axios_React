import ChildComponent from "./ChildComponent";

const { useState } = require("react");

function ParentComponent() {
  // state variables
  const [name, setName] = useState("");
  return (
    <div>
      <h3>Parent Component</h3>
      Enter name:{" "}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <ChildComponent name={name}></ChildComponent>
    </div>
  );
}
export default ParentComponent;
