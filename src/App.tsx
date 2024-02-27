import "./App.css";
import { Main } from "./components/light-mode/main";
import { MainDark } from "./components/dark-mode/main";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ToDo-List" element={<Main />} />
        <Route path="/ToDo-List/dark-mode" element={<MainDark />} />


      </Routes>

    </BrowserRouter>
  );
}

// export default App;
export default App;
