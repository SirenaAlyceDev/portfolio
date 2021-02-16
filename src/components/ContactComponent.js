import React, { useReducer } from "react";
import { useForm, Controller } from "react-hook-form";
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
  const { register, handleSubmit, watch, control, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("firstName"));

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
          innerRef={register({ required: true, maxLength: 30 })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <span>This is required</span>
        )}
        {/* <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
        />
        <Label>Message</Label>
        <Input
          type="text"
          name="message"
          value={userInput.message}
          onChange={handleChange}
        /> */}
        <input type="submit" />
      </Form>
      {/* <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Name</Label>
        <Input
          type="text"
          id="name"
          value={userInput.firstName}
          onChange={handleChange}
          name="firstName"
          innerRef={register({ required: true, maxLength: 30 })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <span>This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )}
        <input type="submit" />
      </Form> */}
    </Container>
  );
}

export default Contact;
