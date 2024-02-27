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
  import { useState } from "react";
  import { GrView, GrTrash } from "react-icons/gr";
import { Header } from "./header";
  
  export const MainDark = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState<string[]>([]); // define the type of tasks as string[]
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleHide = () => {
      setHide(false);
      Swal.fire({
        icon: "success",
        title: "Done..",
        text: "Your Added Task Removed from the List!",
        footer: '<a href="#">Why do I have this issue?</a>',
      }).then((result) => {
        if (result.isConfirmed) {
          (window.location.reload as (cache: boolean) => void)(false);
        }
      });
    };
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleAddClick = () => {
      if (inputValue.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: "Please Enter a Task Before Adding!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      } else {
        setTasks([...tasks, inputValue]);
        setInputValue(""); // Clear input field after adding task
        Swal.fire({
          icon: "success",
          title: "Done..",
          text: "Your Task Added to the List!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    };
  
    const handleClearClick = () => {
      (window.location.reload as (cache: boolean) => void)(false);
    };
  
    return (
      <div className="container overflow-hidden">
        <div className="row gy-3">
            <Header/>
          <TaskForm
            handleInputChange={handleInputChange}
            handleClearClick={handleClearClick}
            handleAddClick={handleAddClick}
          />
          <div className="col-12">
            <div className="p-3 border bg-dark">
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
                                ⚪ {task}
                                <br />
                              </Form.Label>
                            </ListGroup.Item>
                            <hr className=""/>
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
                                onClick={handleHide}
                              >
                                <GrTrash /> Delete{" "}
                              </Button>
                            </ButtonGroup>
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title className="fs-6">View
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                {task}
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                  Save Changes
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
  