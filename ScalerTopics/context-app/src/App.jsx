import "./App.css";
import Family from "./Prop_drills/Family";
import { FamilyContext } from "./Prop_drills/FamilyContext";

function App() {
  const familyMsg = {
    secret: "Locker-code:1928",
  };

  return (
    <>
      {/* //Using Prop drilling */}
      {/* <Family Msg={familyMsg} /> */}

      {/* Using context Api */}

      <FamilyContext.Provider value={familyMsg}>
        <Family />
      </FamilyContext.Provider>
    </>
  );
}

export default App;

//Problem:
// Prop drilling is a React technique where data is passed down from parent to child components through their props,
// often through several layers, regardless of whether intermediate components use the data. While simple for shallow
// hierarchies, it becomes cumbersome with deep component trees, complicating maintenance and leading to less efficient
//data management among components.

//Solution: Context API
// Lets pass this msg using context API.
