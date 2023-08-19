import {Col, Container, Dropdown, Row} from "react-bootstrap";
import {Link, NavigateFunction, useNavigate} from "react-router-dom";
import {CATEGORY, HOME, PRODUCT, PROFILE, SIGNIN, SIGNOUT, SIGNUP, USER} from "../../Util/Path";
import React, {ReactElement, useContext} from "react";
import {user} from "../../Util/Types";
import {userContext} from "../../App";
// @ts-ignore
import logo from './logo.png';
import './Header.css';
import {JSX} from "react/jsx-runtime";

function BeforeSignin(): ReactElement<HTMLElement> {
    return (<>
            <ul className={"nav-list"}>
                <li className={"item"}><Link to={SIGNIN}>SignIn</Link></li>
                <li className={"item"}><Link to={SIGNUP}>SignUp</Link></li>
            </ul>
        </>);
}

function AfterSignIn(props: { navigate: NavigateFunction, users: user }) {
    const {users, navigate} = props;
    return (<div className={"header-profile"}>
            <img src={logo} alt={"profilePic"}/>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {users.firstName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate(PROFILE)}>Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate(SIGNOUT)}>Signout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>);
}

function ShowList():JSX.Element {
    return (
        <>
            <ul className="header-list">
                <li key={"home"} className="item"><Link to={HOME}>Home</Link></li>
                <li key={"home"} className="item"><Link to={USER}>User</Link></li>
                <li key={"home"} className="item"><Link to={PRODUCT}>Product</Link></li>
                <li key={"home"} className="item"><Link to={CATEGORY}>Category</Link></li>
            </ul>
        </>
    );
}

function Header() {
    const navigate = useNavigate();
    const {users, updateUser, deleteUser, dispatch} = useContext(userContext)
    return (<header>
            <Container fluid>
                <Row className={"align-items-center"}>
                    <Col md={{order: 1, span: 3}}  sm={{order: 1, span: 6}}>
                        <div className={"nav-brand"}>
                            <img src={logo} alt={"logo"}/>
                            <p>F<span>ireshop</span></p>
                        </div>
                    </Col>
                    <Col md={{order: 1, span: 6}} className={"d-none d-md-block"}>
                        {!users.firstName?"":<ShowList/>}
                    </Col>
                    <Col md={{order: 1, span: 3}} sm={{order: 1, span: 6}}>
                        {!users.firstName ? <BeforeSignin/> : <AfterSignIn navigate={navigate} users={users}/>}
                    </Col>
                </Row>
            </Container>
        </header>);
}

export default Header;