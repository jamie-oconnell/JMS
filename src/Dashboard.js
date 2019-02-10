import React from "react";
import { Card } from "semantic-ui-react";
import RepairCalulator from "./RepairCalculator";

export default function Dashboard() {
  return (
    <Card style={{ width: "500px" }}>
      <RepairCalulator />
    </Card>
  );
}
