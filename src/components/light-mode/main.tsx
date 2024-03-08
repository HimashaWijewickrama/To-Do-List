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
import { Header } from "./header";

export const Main = () => {
  const [inputValue, setInputValue] = useState<string | "">("");
  const [selectValue, setSelectValue] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<{ task: string; date: Date }[]>([]);
  const [show, setShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState<{
    task: string;
    date: Date;
  } | null>(null);
  const [hide, setHide] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = (task: { task: string; date: Date }) => {
    setSelectedTask(task);
    setShow(true);
  };

  const handleDeleteClick = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); // Remove the task at the specified index
    setTasks(updatedTasks); // Update the tasks state
    Swal.fire({
      icon: "success",
      title: "Done..",
      text: "Your Added Task Removed from the List!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectValue(date ? date : null);
  };

  const handleAddClick = () => {
    if (inputValue.trim() === "" || selectValue === null) {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Please Enter a Task Details Before Adding!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      const newTask = {
        task: inputValue,
        date: selectValue,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
      setSelectValue(null);
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
    setSelectValue(null);
  };

  return (
    <div className="container overflow-hidden">
      <div className="row gy-3">
        <Header />

        <TaskForm
          handleInputChange={handleInputChange}
          selectValue={selectValue}
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
                    <ListGroup as="ul" key={index}>
                      <Row>
                        <Col xs={12} md={10}>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item list-group-item-action text-start"
                          >
                            <Form.Label className="fs-6">
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
                              onClick={() => handleShow(task)}
                            >
                              <GrView /> View
                            </Button>

                            <Button
                              variant="outline-danger"
                              onClick={() => handleDeleteClick(index)}
                            >
                              <GrTrash /> Delete
                            </Button>
                          </ButtonGroup>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-6">View Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTask && (
            <>
              <p>Task Description: {selectedTask.task}</p>
              <p>Scheduled Date: {selectedTask.date.toLocaleDateString()}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
