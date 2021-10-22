import { CustomeButton } from "./Button.Style";

export default function Button({
  text,
  onClick = () => {},
  isGray,
  width,
  borderRadius,
  style = {},
  height,
  bgcolor,
  border,
  fontSize,
  margin,
  color,
  isLoading,
  link = "",
  disabled,
}) {
  return (
    <CustomeButton
      to={link}
      as={link ? "" : "button"}
      disabled={isLoading}
      onClick={onClick}
      isGray={isGray}
      width={width}
      borderRadius={borderRadius}
      height={height}
      style={style}
      bgcolor={bgcolor}
      border={border}
      fontSize={fontSize}
      margin={margin}
      color={color}
    >
      {text}
    </CustomeButton>
  );
}
