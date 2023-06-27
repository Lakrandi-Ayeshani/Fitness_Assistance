import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import AppIcon from "../Icons/AppIcon";

export const SideBar = () => {
    return (
        <div className="sidebar align-items-center">
            <Row className="sidebar-row-header justify-content-center text-center">
                <Col className="align-self-center">
                    <div className="sidebar-header-app-icon mx-auto">
                       <AppIcon/> 
                    </div>
                    <div>Fitness Assistant</div>
                </Col>
            </Row>
            <Row className="sidebar-row-menu">
                <Col>
                    <Link className="sidebar-link" to="/">Dashboard</Link><br/>
                    <Link className="sidebar-link" to="/exercise">Exercise</Link>
                </Col>
            </Row>
            <Row className="sidebar-row-footer">
                <Col>
                   <div>Footer</div>
                </Col>
            </Row>
        </div>
    )
}