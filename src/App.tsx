import {useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
