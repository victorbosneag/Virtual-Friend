import NavBar from "./Nav";
import logo from '../blue-logo.png'
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Grid from '@material-ui/core/Grid';
// import { SmoothProvider } from 'react-smooth-scrolling'

function Home() {
    return(
    <div className="Body">
        <section className="sec">
        <NavBar />
        <div className="centered">
        <img src={logo}></img>
        </div>
        <div className="btn-wrapper">
            <Link  to='/register'>
        <Button type="button" className="front-reg-btn " variant="primary">Register</Button>
        </Link>
        </div>
        </section>
        <section className="card-mid-page sec">
            <h1 className="why-use-title">Why Use Assist?</h1>
            <Container className="Container">
        <Row className="row">
       <Col className="col"><Card className="card">
            <Card.Header className="card-head">Chat 24/7</Card.Header>
            <Card.Body className="card-body">Assist will chat any time, day or night! </Card.Body>
        </Card></Col>
       
        <Col className="col"><Card className="card-2">
            <Card.Header className="card-head">Instant Speeds</Card.Header>
            <Card.Body className="card-body">Assist will answer 
in a instant to help 
with your needs. </Card.Body>
        </Card></Col>
        <Col className="col"><Card className="card-3">
            <Card.Header className="card-head">Just Need To Talk</Card.Header>
            <Card.Body className="card-body">Assist can do that
to. With its highly trained AI. </Card.Body>
        </Card></Col>
        </Row>
        </Container>
        </section>
    </div>
    )
}

export default Home;