import { SeriesDataTypes } from "../../SeriesDataTypes";

export interface GraphProps {
  serie: SeriesDataTypes;
  handleEdit: (serie: SeriesDataTypes) => void;
  handleDelete: (id: string) => void;
}
