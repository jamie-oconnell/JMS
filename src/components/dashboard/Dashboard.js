import React from "react";
import { Card } from "semantic-ui-react";
import RepairCalulator from "./RepairCalculator";
// import Pos from "../Pos";
import QuickMenu from "./QuickMenu";
import ProductRequests from "./ProductRequests";
import NewCustomer from '../customers/NewCustomer'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-item">
        <Card fluid>
          <RepairCalulator />
        </Card>
      </div>
      <div className="dashboard-item">
        <Card fluid>
          {/* <Pos /> */}
        </Card>
      </div>
      <div className="dashboard-item">
        <Card fluid>
          <QuickMenu />
        </Card>
      </div>
      <div className="dashboard-item">
        <Card fluid>
          <ProductRequests />
        </Card>
      </div>
      <div className="dashboard-item">
        <Card fluid>
          <NewCustomer />
        </Card>
      </div>
    </div>
  );
}
