import React,{Component} from 'react'
import { Form, Button, Container,Card, Alert } from "react-bootstrap"
import { HashLink as Link} from 'react-router-hash-link';



export default class RegisterPageView extends Component {
    
    render() {
        const { email, password, passwordVerif, error } = this.props.state;
        return (
          <Container  className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}>
              <div  className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={this.props.method.submit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" onChange={(e) => this.props.method.inputChange(e)}  required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" onChange={(e) => this.props.method.inputChange(e)} type="password" required />
                        </Form.Group>
                        <Form.Group id="password-confirm" className='mb-4'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control name="passwordVerif" onChange={(e) => this.props.method.inputChange(e)} type="password"  required />
                        </Form.Group>
                        <Form.Group>
                            <Button className="w-100" type="submit">
                                Sign Up
                            </Button>
                        </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
              </div>
         </Container>
        )
    }
}


