export interface BaseIconTypes {
    size?: string;
}
export interface IconProps extends BaseIconTypes {
    icon: string;
    alt?: string;
    onClick?: () => void;
}
