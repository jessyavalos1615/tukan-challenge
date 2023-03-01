export interface BaseButtonTypes {
  variant: ButtonVariant;
}

export interface ButtonProps extends BaseButtonTypes {
  onClick?: (event: any) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}
