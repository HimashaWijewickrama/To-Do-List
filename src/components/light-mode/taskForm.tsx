import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { GrAdd, GrClear } from "react-icons/gr";
import React from "react";
import DatePicker from "react-datepicker";

interface TaskFormProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue: Date | null; // Include selectValue in TaskFormProps
  handleDateChange: (date: Date | null) => void;
  handleClearClick: () => void;
  handleAddClick: () => void;
}

export const TaskForm = (props: TaskFormProps) => {
  return (
    <div className="col-12">
      <div className="p-3 border bg-light">
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            type="text"
            onChange={props.handleInputChange}
            className="me-auto"
            placeholder="Add your item here..."
            id="textInput"
          />
          <DatePicker
            showIcon
            selected={props.selectValue} // Use props.selectValue to access the selectValue from props
            onChange={props.handleDateChange} // Use props.handleDateChange to access the handleDateChange from props
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
