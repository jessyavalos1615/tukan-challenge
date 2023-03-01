export interface BaseButtonTypes {
  variant: ButtonVariant;
}

export interface ButtonProps extends BaseButtonTypes {
  onClick?: (event: any) => void;
  children?: React.ReactNode;
}

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}
