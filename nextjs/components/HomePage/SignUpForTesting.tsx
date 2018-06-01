import React from 'react';
import { Button, Row, Col, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
// export interface ContactFormProps {

// }
interface SignUpForTestingState {
    value: string;
}

class SignUpForTesting extends React.Component<SignUpForTestingState> {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) {
            return 'success';
        } else if (length > 5) {
            return 'warning';
        } else if (length > 0) {
            return 'error';
        }
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h2>Contact us <small>get in touch with us by filling form below</small></h2>
                        <hr className="colorgraph" />
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <form action="" method="post" role="form" className="contactForm">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name"
                                    placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email"
                                    id="email" placeholder="Your Email" data-rule="email"
                                    data-msg="Please enter a valid email" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject"
                                    id="subject" placeholder="Subject" data-rule="minlen:4"
                                    data-msg="Please enter at least 8 chars of subject" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name={'message'} rows={5}
                                    data-rule="required" data-msg="Please write something for us"
                                    placeholder="Message"></textarea>
                                <div className="validation"></div>
                            </div>

                            <div className="text-center"><button type="submit"
                                className="btn btn-theme btn-block btn-md">Send Message</button></div>

                        </form>
                        <hr className="colorgraph" />

                    </div>
                </div>

                <Row>
                    <Col>
                        <Form>
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationState()}
                            >
                                <ControlLabel>Working example with validation</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Validation is based on string length.</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SignUpForTesting;