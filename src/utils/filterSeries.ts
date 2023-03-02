import { SeriesTypes } from "../components/AddVisualization/AddVisualizationTypes";

export const seriesCatalog = (serie: SeriesTypes) => ({
  label: serie.display_name,
  value: serie.variable,
});
