import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { GrAdd, GrClear } from "react-icons/gr";

type TaskFormProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearClick: () => void;
  handleAddClick: () => void;
};
export const TaskForm = (props: TaskFormProps) => {
  return (
    <div className="col-12">
      <div className="p-3 border bg-dark">
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            type="text"
            onChange={props.handleInputChange}
            className="me-auto"
            placeholder="Add your item here..."
            id="textInput"
          />
          <Button variant="secondary" onClick={props.handleAddClick}>
            <GrAdd />
            Add
          </Button>
          <Button variant="outline-danger" onClick={props.handleClearClick}>
            <GrClear />
            Clear
          </Button>
        </Stack>
        <hr />
      </div>
    </div>
  );
};
