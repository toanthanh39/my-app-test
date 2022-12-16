import { Space, Switch } from "antd";
import { SwitchClickEventHandler } from "antd/es/switch";

type Handle = {
  handleChange: SwitchClickEventHandler | undefined;
  isChecked: boolean;
  className?: string;
};

const SwitchCustom = ({ handleChange, isChecked, className }: Handle) => {
  return (
    <Space>
      <Switch defaultChecked={isChecked} onChange={handleChange} />
    </Space>
  );
};

export default SwitchCustom;
