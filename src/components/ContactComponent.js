import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Container, Button, Form, Label, Input } from "reactstrap";

function Contact(props) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      email: "",
      message: "",
    }
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setUserInput({ [name]: newValue });
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (e,data) => {
    console.log(data);
    alert(`firstname: ${userInput.firstName}\n email: ${userInput.email}\n message: ${userInput.message}`);
  }
  // console.log(watch("email"));

  return (
    <Container>
      <Row>
        <Col>
          <h1>Let's Connect!</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>First Name</Label>
        <Input
          type="text"
          id="name"
          value={userInput.firstName}
          onChange={handleChange}
          name="firstName"
          innerRef={register({ required: true })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <div>This is required</div>
        )}
        <Label>Email</Label>
        <Input
          type="email"
          id="email"
          value={userInput.email}
          onChange={handleChange}
          name="email"
          innerRef={register({ required: true })}
        />
        {errors.email && errors.email.type === "required" && (
          <div>This is required</div>
        )}
        <Label>Message</Label>
        <Input
          type="text"
          id="message"
          value={userInput.message}
          onChange={handleChange}
          name="message"
          innerRef={register({ required: true })}
        />
        {errors.message && errors.message.type === "required" && (
          <div>This is required</div>
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;
