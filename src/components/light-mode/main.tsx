import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { TaskForm } from "./taskForm";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { GrView, GrTrash } from "react-icons/gr";
import { Header } from "../header";

export const Main = () => {
  const [inputValue, setInputValue] = useState<string | "">("");
  const [selectValue, setSelectValue] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<{ task: string; date: Date }[]>([]); // define the type of tasks as string[]
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteClick = () => {
    setHide(false);
    Swal.fire({
      icon: "success",
      title: "Done..",
      text: "Your Added Task Removed from the List!",
      footer: '<a href="#">Why do I have this issue?</a>',
    }).then((result) => {
      if (result.isConfirmed) {
        setInputValue("");
        setSelectValue(null);
      }
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleDateChange = (date: Date | null) => {
    setSelectValue(date ? date : null); // Update the selected value with the date object or null
  };
  const handleAddClick = () => {
    console.log(inputValue);
    console.log(selectValue);
    if (inputValue.trim() === "" || selectValue === null) {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Please Enter a Task Before Adding!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      const newTask = {
        task: inputValue,
        date: selectValue,
      };
      console.log(newTask.date);
      setTasks([...tasks, newTask]);
      setInputValue(""); // Clear input field after adding task
      setSelectValue(null);
      console.log(newTask);
      Swal.fire({
        icon: "success",
        title: "Done..",
        text: "Your Task Added to the List!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  const handleClearClick = () => {
    setInputValue("");
    console.log(inputValue);
    setSelectValue(null);
    console.log(selectValue);
    // (window.location.reload as (cache: boolean) => void)(false);
  };

  return (
    <div className="container overflow-hidden">
      <div className="row gy-3">
        <Header />

        <TaskForm
          handleInputChange={handleInputChange}
          selectValue={selectValue} // Pass selectValue as a prop
          handleDateChange={handleDateChange}
          handleClearClick={handleClearClick}
          handleAddClick={handleAddClick}
          inputValue={inputValue}
        />
        <div className="col-12">
          <div className="p-3 bg-light">
            {hide && (
              <Stack direction="horizontal" gap={1}>
                <Container>
                  {tasks.map((task, index) => (
                    <ListGroup as="ul">
                      <Row>
                        <Col xs={12} md={10}>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item list-group-item-action  text-start"
                          >
                            <Form.Label key={index} className="fs-6">
                              ⚪ {task.task}
                              <br />
                            </Form.Label>
                          </ListGroup.Item>
                          <hr />
                        </Col>
                        <Col xs={12} md={2}>
                          <ButtonGroup className="d-flex mb-2">
                            <Button
                              variant="outline-primary"
                              onClick={handleShow}
                            >
                              <GrView /> View{" "}
                            </Button>

                            <Button
                              variant="outline-danger"
                              onClick={handleDeleteClick}
                            >
                              <GrTrash /> Delete{" "}
                            </Button>
                          </ButtonGroup>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title className="fs-6">
                                View Task
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Task Description: {task.task}
                              <br />
                              Scheduled Date: {task.date.toLocaleDateString()}{" "}
                              <br />
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </Col>
                      </Row>
                    </ListGroup>
                  ))}
                </Container>
              </Stack>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
