import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

function NewsFeedRow({story}) {

    const style = { height: '200px', border: "solid black 1px", borderRadius: "5px", marginBottom: '5px'};

    return (
        <Container style={style}>
            <Row>
                <Col xs lg="8">
                    <h4>{ story.summary.title }</h4>
                    <p>
                        { story.summary.detail }
                    </p>
                    <p>
                        <a href=''>See more...</a>
                    </p>
                </Col>
                <Col xs lg="4">
                    <img src={ story.img } alt='image' height={160} width={250}></img>
                </Col>
            </Row>
        </Container>
    )
}

export default NewsFeedRow;