import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const initialColor = localStorage.getItem("backgroundColor");
  const [color, setcolor] = useState(initialColor);

  useEffect(() => {
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setcolor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
              onClick={() => setcolor("grey")}
            >
              Grey
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#efa9ae" }}
              onClick={() => setcolor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setcolor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#8980f5" }}
              onClick={() => setcolor("#8980f5")}
            >
              Indigo
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#4b4e6d" }}
              onClick={() => setcolor("#4b4e6d")}
            >
              Violet
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#fee440" }}
              onClick={() => setcolor("#fee440")}
            >
              Maize
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#cadf9e" }}
              onClick={() => setcolor("#cadf9e")}
            >
              Tea-green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#fa824c" }}
              onClick={() => setcolor("#fa824c")}
            >
              Coral
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#B8D4E3" }}
              onClick={() => setcolor("#B8D4E3")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
