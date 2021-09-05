import NavBar from "./Nav";
import logo from '../blue-logo.png'
import tom from '../tom.jpg'
import martha from '../Martha.jpg'
import jimmy from '../jimmy.jpg'
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Assistants() {
    return(
        <div className="Body">
            <NavBar />
            <div className="centered">
            <img src={logo}></img>
            </div>
            
            <h1 className="assistants-title">Assistants</h1>
            <div className="assistants-div">
            <hr className="hr" />
            </div>
            <Container className="card-container">
            <Row>
            <Col><Card className="card-tom">
                <Card.Img variant="top" src={tom} />
                <Card.Body className="card-body">
                <Card.Title className="card-title" >Tom</Card.Title>
               <Card.Text>Do you need to talk to a heart warming person that is wise?</Card.Text> 
               <Link className='Link' to="/chat">
               <Button className="btn-primary">Chat</Button>
               </Link>
                </Card.Body>
            </Card></Col>
            <Col><Card className="card-tom">
                <Card.Img variant="top" src={martha} />
                <Card.Body className="card-body">
                <Card.Title className="card-title" >Martha</Card.Title>
               <Card.Text>Do you need to talk to a Cheerful person that will help you through tuff times?</Card.Text> 
               <Link className='Link' to="/chat">
               <Button className="btn-primary">Chat</Button>
               </Link>
                </Card.Body>
            </Card></Col>
            <Col><Card className="card-tom">
                <Card.Img variant="top" src={jimmy} />
                <Card.Body className="card-body">
                <Card.Title className="card-title" >Jim</Card.Title>
               <Card.Text>Do you need to talk to a person that is humerous and will make you laugh?</Card.Text> 
               <Link className='Link' to="/chat">
               <Button className="btn-primary">Chat</Button>
               </Link>
                </Card.Body>
            </Card></Col>
            </Row>
            </Container>
            
        </div>
    )
}

export default Assistants;