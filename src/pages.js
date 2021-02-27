import React from "react"
import {Link, useLocation,} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import './pages.css';
import { Card, Form, Col, Nav, Table } from "react-bootstrap";

/*Main page*/
export function Home() {

    const approvedConfessions = [
        {
            "id": 2343234,
            "author": "a1",
            "body": "body1 jkksljdfklsdj sdkfljsdklfjksdljdkf"
        },
        {
            "id": 2343234,
            "author": "a1",
            "body": "body1 jkksljdfklsdj sdkfljsdklfjksdljdkf"
        },
        {
            "id": 2343234,
            "author": "a1",
            "body": "body1 jkksljdfklsdj sdkfljsdklfjksdljdkf"
        }]
    

    const listItems = approvedConfessions.map((confession) =>
    <div class="d-flex justify-content-center">
        <Card body border="primary" bg={'light'} style={{ width: '45rem'}}>
                <Card.Header><b>{confession.author}</b></Card.Header>
                <blockquote className="blockquote mb-0">
                    <p>{confession.body}</p>
                </blockquote>
        </Card>
    </div>
        
        
    
        );

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>PlexSessions</h1>
            <Nav className="justify-content-center">
                <Nav.Item><Nav.Link href="/post"><Button variant="outline-primary">Post a Confession</Button></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/adminView"><Button variant="outline-primary">Admin Login</Button></Nav.Link></Nav.Item>
                <br/>
                <br/>
            </Nav>
            
            {listItems}
        </div>
    )
}

/*Post a confession page*/
export function Post() {
    return (
        <div>
            <Nav>
                <Nav.Item><Nav.Link href="/"><Button variant="outline-primary">Return to the home page</Button></Nav.Link></Nav.Item>
            </Nav>
            <h1>Post a Confession</h1>
            <Form action="/create_confession" method="POST">
            <Col xs={5}>
                <Form.Group controlId="formBasicText">
                    
                    
                    <Form.Label >Title (and Anonymous Name): </Form.Label>
                        <Form.Control name="title" type="text" placeholder="Enter Title" required />
                    
                    <Form.Text className="text-muted">Your identity will never be revealed.</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Confession: </Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter Confession" required />
                </Form.Group>
                <Button variant="outline-primary" type="submit">Submit</Button></Col>

            </Form>
        </div>
    )
}

/*Login for admin*/
export function Login() {
    return (
        <div>
            <Nav>
                <Nav.Item><Nav.Link href="/"><Button variant="outline-primary">Return to the home page</Button></Nav.Link></Nav.Item>
            </Nav>
            <h1>Admin Login</h1>
            <Form action="/login" method="POST">
            <Col xs={5}>
                <Form.Group controlId="formBasicUser">
                    <Form.Label >Username: </Form.Label>
                        <Form.Control name="username" type="text" placeholder="Enter Username" required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="passoword" placeholder="Enter Password" required />
                </Form.Group>
                <Link to="/adminView"><Button variant="outline-primary" type="submit" /*onClick={() => handleSubmit()}*/>Log In</Button></Link></Col>
            </Form>
        </div>
    )
}

/*dashboard for admin*/
export function AdminView() {

    const pendingConfessions = [
        {
            "id": 2343234,
            "author": "a2",
            "body": "body2"
        },
        {
            "id": 2343234,
            "author": "a3",
            "body": "body3"
        }];

    const listItems = pendingConfessions.map((confession) =>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Confession</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{confession.id}</td>
                    <td>{confession.author}</td>
                    <td>{confession.body}</td>
                    <td><Button variant="outline-primary" type="submit" value="submit">Approve</Button>
        <Button variant="outline-primary" type="submit" value="submit">Delete</Button></td>
                </tr>
            </tbody>
        </Table>
        
        );

    return (
        
        <div>
            <nav>
            <Nav>
                <Nav.Item><Nav.Link href="/"><Button variant="outline-primary">Return to the home page</Button></Nav.Link></Nav.Item>
            </Nav>
            </nav>
            <h1>Review Submissions</h1>
            {listItems}
            
        </div>
    );
}
