type iconType = string;
type onSwitchType = React.MouseEventHandler<HTMLSpanElement>;

interface IconSwitchProps {
  icon: iconType;
  onSwitch: onSwitchType;
}

export default IconSwitchProps;
export type { iconType, onSwitchType };
