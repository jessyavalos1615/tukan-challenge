export interface AddVisualizationProps {
  shouldShow: boolean;
  onClose: () => void;
  onSubmit: (serie: SeriesStorageTypes) => void;
  onUpdate: (serie: SeriesStorageTypes) => void;
  isUpdate?: boolean;
  value?: any;
}

export interface SeriesStorageTypes {
  id: string;
  serie: string;
  dateRange: DateRangeTypes;
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

export interface DateRangeTypes {
  start: string;
  end: string;
}

export interface VisualizationOptionsTypes {
  serieSelected: null | SeriesTypes;
  dateRange: DateRangeTypes;
}
