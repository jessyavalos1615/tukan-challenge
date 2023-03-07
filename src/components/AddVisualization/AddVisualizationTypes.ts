export interface AddVisualizationProps {
  shouldShow: boolean;
  onClose: () => void;
  onSubmit: (serie: SeriesStorageTypes) => void;
}

export interface SeriesStorageTypes {
  id: string;
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
