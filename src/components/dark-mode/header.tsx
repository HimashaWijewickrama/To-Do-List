import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/esm/Stack";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const Header = () => {
  return (
    <div className="col-12">
      <div className="p-3 border bg-dark">
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
            <Button variant="dark" className="rounded-pill fs-6">
              <MdOutlineDarkMode /> Dark Mode
            </Button>
          </a>
        </Stack>
        <p className="fw-bold fs-2 text-center text-light">🗓️ MY TO-DO LIST</p>
      </div>
    </div>
  );
};
