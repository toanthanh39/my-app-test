import { Switch } from "antd";
import { SwitchClickEventHandler } from "antd/es/switch";

type Handle = {
  handleChange: SwitchClickEventHandler | undefined;
  isChecked: boolean;
};

const SwitchCustom = ({ handleChange, isChecked }: Handle) => {
  return (
    <>
      <Switch defaultChecked={isChecked} onChange={handleChange} />
    </>
  );
};

export default SwitchCustom;
