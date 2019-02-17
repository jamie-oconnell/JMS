import React from "react";
import { Card } from "semantic-ui-react";
import RepairCalulator from "./RepairCalculator";
import Pos from "./Pos";

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
          <Pos />
        </Card>
      </div>
    </div>
  );
}
