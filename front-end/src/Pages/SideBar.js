import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export const SideBar = () => {
    return (
        <Row className="sidebar align-items-center">
            <Col>
                <Link className="sidebar-link" to="/">Dashboard</Link><br/>
                <Link className="sidebar-link" to="/exercise">Exercise</Link>
            </Col>
        </Row>
    )
}