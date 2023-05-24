import React from "react";
import IconSwitchProps from "../types/IconSwitch.types";

type Props = Readonly<IconSwitchProps>;

const IconSwitch: React.FC<Props> = ({ icon, onSwitch }) => {
  return (
    <div className="IconSwitch">
      <button onClick={onSwitch}>
        <span className="material-icons">{icon}</span>
      </button>
    </div>
  );
};

export default IconSwitch;
