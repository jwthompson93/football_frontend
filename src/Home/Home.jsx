import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import FeedComponent from '../Feed/FeedComponent';
import TableComponent from '../Table/TableComponent';

function Home() {

    return (
        <Container>
            <Row>
                <Col><FeedComponent></FeedComponent></Col>
                <Col xs lg="4"><TableComponent size={'small'}></TableComponent></Col>
            </Row>
        </Container>
    );
}

export default Home;