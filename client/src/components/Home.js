import NavBar from "./Nav";
import logo from '../assist (4).png'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import Grid from '@material-ui/core/Grid';
// import { SmoothProvider } from 'react-smooth-scrolling'

function Home() {
    return(
    <div className="Body">
        <NavBar />
        <div className="centered">
        <img src={logo}></img>
        </div>
        <div className="btn-wrapper">
        <Button type="button" className="front-reg-btn " variant="primary">Register</Button>
        </div>
        <section className="card-mid-page">
            <h1 className="why-use-title">Why Use Assist?</h1>
            <Container className="Container">
        <Row>
       <Col><Card className="card">
            <Card.Header className="card-head">Chat 24/7</Card.Header>
            <Card.Body className="card-body">Assist will chat any time, day or night! </Card.Body>
        </Card></Col>
       
        <Col><Card className="card-2">
            <Card.Header className="card-head">Instant Speeds</Card.Header>
            <Card.Body className="card-body">Assist will answer 
in a instant to help 
with your needs. </Card.Body>
        </Card></Col>
        <Col><Card className="card-3">
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