import { Radio } from "antd";
import React from "react";
import { Card } from "../../components/Card/Card";

export const SelectTemplate: React.FC = () => {
  return (
    <Card>
      <Radio.Group>
        <Radio.Button value="GMail">GMail</Radio.Button>
        <Radio.Button value="Custom">Custom</Radio.Button>
      </Radio.Group>
    </Card>
  );
};
