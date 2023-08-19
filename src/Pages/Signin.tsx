import React from 'react';
import Form from "../Component/Form/Form";
import {formSignIn} from "../Util/Form-sheet";
import {Col, Row} from "react-bootstrap";



function Signin() {
    return (
        <div className={"signin"}>
                <Row>
                    <Col md={6}>
                        <img src={"https://img.freepik.com/premium-vector/mobile-otp-secure-verification-method-mobile-phone-hand-onetime-password-secure-transaction-security-one-time-password-verification-mobile-app-smartphone-screen-2step-verification_735449-279.jpg"}/>
                    </Col>
                    <Col md={6}>
                        <Form forms={formSignIn} className={"sign_form"}/>
                    </Col>
                </Row>
        </div>
    );
}

export default Signin;