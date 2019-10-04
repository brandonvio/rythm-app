import React, { Component } from "react";
import TvChart from "./TvChart";
import MySocket from "./MySocket";
import { Col, Row } from "reactstrap";

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <MySocket />
          </Col>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <Col>
            <div>
              <TvChart />
            </div>
          </Col>
          <Col>
            <div>
              <TvChart />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <TvChart />
            </div>
          </Col>
          <Col>
            <div>
              <TvChart />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
