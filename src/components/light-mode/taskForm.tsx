import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import DatePicker from "react-datepicker";
import { GrAdd, GrClear } from "react-icons/gr";
interface TaskFormProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue: Date | null;
  inputValue: string | " ";
  handleDateChange: (date: Date | null) => void;
  handleClearClick: () => void;
  handleAddClick: () => void;
}

export const TaskForm = (props: TaskFormProps) => {
  return (
    <div className="col-12">
      <div className="p-3 border bg-light">
        <Stack direction="horizontal" gap={1}>
          <Form.Control
            type="text"
            value={props.inputValue}
            onChange={props.handleInputChange}
            className="me-auto"
            placeholder="Add your task here..."
            id="textInput"
          />
          <DatePicker
            showPopperArrow={true}
            selected={props.selectValue}
            onChange={props.handleDateChange}
            placeholderText=" Select date..."
            className="form-control"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker className="form-control" />
          </LocalizationProvider>

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
