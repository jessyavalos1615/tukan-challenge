export interface AddVisualizationProps {
  shouldShow: boolean;
  onClose: () => void;
}

export interface SeriesStorageTypes {
  id: string;
}

export interface SeriesTypes {
  variable: string;
  display_name: string;
  display_name_en: string;
  unit_id: UnitID;
}

export enum UnitID {
  Mxn = "MXN",
}
