export interface SearchListProps {
  data: any[];
  value?: any;
  label: string;
  onChange: (e: any) => void;
}

export interface SelectOptions {
  label: string;
  value: string;
}
