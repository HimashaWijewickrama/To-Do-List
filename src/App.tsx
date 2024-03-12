import "./App.css";
import { Main } from "./components/light-mode/main";
import { MainDark } from "./components/dark-mode/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/ToDo-List" element={<Main />} />
          <Route path="/ToDo-List/dark-mode" element={<MainDark />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// export default App;
export default App;
