import { Container, Row, Col } from "react-bootstrap";

const Welcome = () => (
  <div className="jumbotron">
    <Container fluid>
      <Row>
        <Col xs={6}>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </Col>
        <Col xs={6}>
          <img
            src="https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg"
            alt="books"
          ></img>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Welcome;
