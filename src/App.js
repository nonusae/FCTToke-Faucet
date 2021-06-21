import './App.css';
import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Faucet from './components/Faucet';
import TokenSend from './components/TokenSend.js';

function App() {
  const token = FCTToken;

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div>
              <Faucet tokenContract={token} />
            </div>
          </Col>
          <Col>
            <TokenSend tokenContract={token} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
