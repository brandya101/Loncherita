import React from 'react'
import {Jumbotron, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button, Glyphicon,InputGroup,Form,Col} from 'react-bootstrap'
import createReactClass from 'create-react-class'

const Contact = () =>
(
  <div>
  <Jumbotron>
    <FormExample />
  </Jumbotron>
  <Jumbotron>
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Form elements that are useful..."
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup
      id="formControlsPassword"
      label="Password"
      type="password"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>

    <FormGroup>
      <Checkbox inline>
        1
      </Checkbox>
      {' '}
      <Checkbox inline>
        2
      </Checkbox>
      {' '}
      <Checkbox inline>
        3
      </Checkbox>
    </FormGroup>
    <FormGroup>
      <Radio name="radioGroup" inline>
        1
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
        2
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
        3
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </FormGroup>

    <Button type="submit">
      Submit
    </Button>
  </form>

  <br />
  <br />
  <br />
  <form>
    <FormGroup controlId="formValidationSuccess1" validationState="success">
      <ControlLabel>Input with success</ControlLabel>
      <FormControl type="text" />
      <HelpBlock>Help text with validation state.</HelpBlock>
    </FormGroup>

    <FormGroup controlId="formValidationWarning1" validationState="warning">
      <ControlLabel>Input with warning</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

    <FormGroup controlId="formValidationError1" validationState="error">
      <ControlLabel>Input with error</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

    <FormGroup controlId="formValidationNull" validationState={null}>
      <ControlLabel>Input with no validation state</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

    <FormGroup controlId="formValidationSuccess2" validationState="success">
      <ControlLabel>Input with success and feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="formValidationWarning2" validationState="warning">
      <ControlLabel>Input with warning and feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="formValidationError2" validationState="error">
      <ControlLabel>Input with error and feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="formValidationSuccess3" validationState="success">
      <ControlLabel>Input with success and custom feedback icon</ControlLabel>
      <FormControl type="text" />
      <FormControl.Feedback>
        <Glyphicon glyph="music" />
      </FormControl.Feedback>
    </FormGroup>

    <FormGroup controlId="formValidationWarning3" validationState="warning">
      <ControlLabel>Input group with warning</ControlLabel>
      <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
      <FormControl.Feedback />
    </FormGroup>

    <Form componentClass="fieldset" horizontal>
      <FormGroup controlId="formValidationError3" validationState="error">
        <Col componentClass={ControlLabel} xs={3}>
          Input with error
        </Col>
        <Col xs={9}>
          <FormControl type="text" />
          <FormControl.Feedback />
        </Col>
      </FormGroup>

      <FormGroup controlId="formValidationSuccess4" validationState="success">
        <Col componentClass={ControlLabel} xs={3}>
          Input group with success
        </Col>
        <Col xs={9}>
          <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
            <FormControl type="text" />
          </InputGroup>
          <FormControl.Feedback />
        </Col>
      </FormGroup>
    </Form>

    <Form componentClass="fieldset" inline>
      <FormGroup controlId="formValidationWarning4" validationState="warning">
        <ControlLabel>Input with warning</ControlLabel>
        {' '}
        <FormControl type="text" />
        <FormControl.Feedback />
      </FormGroup>
      {' '}
      <FormGroup controlId="formValidationError4" validationState="error">
        <ControlLabel>Input group with error</ControlLabel>
        {' '}
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl type="text" />
        </InputGroup>
        <FormControl.Feedback />
      </FormGroup>
    </Form>

    <Checkbox validationState="success">
      Checkbox with success
    </Checkbox>
    <Radio validationState="warning">
      Radio with warning
    </Radio>
    <Checkbox validationState="error">
      Checkbox with error
    </Checkbox>

    {/* This requires React 15's <span>-less spaces to be exactly correct. */}
    <FormGroup validationState="success">
      <Checkbox inline>
        Checkbox
      </Checkbox>
      {' '}
      <Checkbox inline>
        with
      </Checkbox>
      {' '}
      <Checkbox inline>
        success
      </Checkbox>
    </FormGroup>
  </form>
  </Jumbotron>
  </div>
)

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

// validation form example
const FormExample = createReactClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Form validation based on the length of the string </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
});
export default Contact;