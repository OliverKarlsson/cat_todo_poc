export interface ButtonProps {
  htmlType?: "submit" | "button";
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ButtonTemplateProps extends ButtonProps {}
