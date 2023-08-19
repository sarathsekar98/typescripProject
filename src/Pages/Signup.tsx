import React from 'react';
import {Col, Row} from "react-bootstrap";
import Form from "../Component/Form/Form";
import {formSignUp} from "../Util/Form-sheet";

function Signup() {
    return (
        <div className={"signup"}>
            <Row>
                <Col md={6}>
                    <img src={"https://img.freepik.com/premium-vector/mobile-otp-secure-verification-method-mobile-phone-hand-onetime-password-secure-transaction-security-one-time-password-verification-mobile-app-smartphone-screen-2step-verification_735449-279.jpg"}/>
                </Col>
                <Col md={6}>
                    <Form forms={formSignUp} className={"sign_form"}/>
                </Col>
            </Row>
        </div>
    );
}

export default Signup;