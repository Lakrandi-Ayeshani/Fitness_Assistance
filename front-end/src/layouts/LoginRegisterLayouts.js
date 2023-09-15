import { Outlet } from 'react-router-dom';
import { Header } from 'screens/Header/Header';
import Container from 'react-bootstrap/Container';

function LoginRegisterLayout() {
  return (
    <div className="App">
      <Container fluid className="app-container">
        <Header />
        <Outlet />
      </Container>
    </div>
  );
}

export default LoginRegisterLayout;
