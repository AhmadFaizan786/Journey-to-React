import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title == "" || desc == "") {
      alert("input fields are empty !");
    } else {
      setmaintask([...maintask, { title, desc }]);
      settitle("");
      setdesc("");
    }
  };

  const deleteHandler = (i) => {
    let copyTask = [...maintask];
    copyTask.splice(i, 1);
    setmaintask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex items-center justify-between m-2 p-4">
            <div className="w-1/3 flex flex-wrap break-words">
              <h2 className="text-2xl font-semibold ">{t.title}</h2>
            </div>
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl font-semibold w-2/3">{t.desc}</h2>
              <button
                onClick={() => deleteHandler(i)}
                className="bg-black text-white px-4 py-2 rounded font-bold text-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <Navbar />
      <Hero
        title={title}
        desc={desc}
        settitle={settitle}
        setdesc={setdesc}
        submitHandler={submitHandler}
      />
      <div className="bg-slate-200 text-xl font-semibold text-left px-10 ">
        <ul className="text-2xl font-semibold ">{renderTask}</ul>
      </div>
    </>
  );
}

export default App;
