import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/esm/Stack";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="col-12 p-3 border" id="header-container">
      <Stack direction="horizontal" gap={3}>
        <a href="/ToDo-List">
          <Button
            variant="light "
            className="border border-dark rounded-pill fs-6"
          >
            <MdOutlineLightMode /> Light Mode
          </Button>
        </a>
        <a href="/ToDo-List/dark-mode">
          <Button variant="outline-dark" className="rounded-pill fs-6">
            <MdOutlineDarkMode /> Dark Mode
          </Button>
        </a>
      </Stack>
      <hr className="header-divider" />

      <span className="header-logo-circle">
        <img src={logo} className="header-logo" />
      </span>
    </div>
  );
};
