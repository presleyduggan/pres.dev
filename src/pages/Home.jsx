import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import "../styles/Construction.css"

function Construction() {

    useEffect(() => {
        document.title = "pres.dev"
     }, []);

    return ( 
        <div className='temp'>
        <h1>Under Construction! Check back later...</h1>
        <Container>
            <Row>
                <Col style={{color: "red"}, {backgroundColor: "blue"}} >1 of 1</Col>
            </Row>
        </Container>
        </div>
     );
}

export default Construction;