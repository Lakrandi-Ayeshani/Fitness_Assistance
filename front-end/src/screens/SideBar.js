import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppIcon from '../Icons/AppIcon';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slice/authSlice';

export const SideBar = () => {
  const isLoggedOut = useSelector((state) => state.auth.isLoggedOut);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    if (isLoggedOut) {
      navigate('/');
    }
  };

  return (
    <div className="sidebar align-items-center">
      <Row className="sidebar-row-header justify-content-center text-center">
        <Col className="align-self-center">
          <div className="sidebar-header-app-icon mx-auto">
            <AppIcon />
          </div>
          <div>Fitness Assistant</div>
        </Col>
      </Row>
      <Row className="sidebar-row-menu">
        <Col className="align-self-center px-0">
          <Link className="sidebar-menu-link px-5" to="/home">
            <i className="bi bi-0-circle px-3"></i>Dashboard
          </Link>
          <Link className="sidebar-menu-link px-5 " to="/exercise">
            <i className="bi bi-command px-3"></i>Exercise
          </Link>
          <Link className="sidebar-menu-link px-5 " to="/workout">
            <i className="bi bi-reception-3 px-3"></i>Workout
          </Link>
        </Col>
      </Row>
      <Row className="sidebar-row-footer">
        {/* <Col className="row align-items-end">
          <Link className="sidebar-footer-link" to="https://www.google.com/">
            <i className="bi bi-google"></i>
          </Link>
        </Col>
        <Col className="row align-items-end">
          <Link
            className="sidebar-footer-link"
            to="https://mail.google.com/mail/u/0/#lakrandiayeshani1204@gmail.com"
          >
            <i className="bi bi-envelope-at-fill"></i>
          </Link>
        </Col>
        <Col className="row align-items-end">
          <Link className="sidebar-footer-link">
            <i className="bi bi-telephone-fill">+94 705840979</i>
          </Link>
        </Col> */}
        <Col className="row align-items-end">
          <Link
            className="sidebar-footer-link text-center p-3"
            onClick={handleLogout}
          >
            <div className="logout-text">Log Out</div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
