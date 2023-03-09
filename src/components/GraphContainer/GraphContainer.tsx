import React from "react";

import Graph from "../Graph/Graph";
import Grid from "../../layouts/Grid/Grid";
import { SeriesDataTypes } from "../../SeriesDataTypes";

const GraphContainer = ({
  series,
  handleEdit,
  handleDelete,
}: {
  series: SeriesDataTypes[];
  handleEdit: (serie: SeriesDataTypes) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <Grid>
      {series.map((data: SeriesDataTypes, index: number) => (
        <Graph
          key={index}
          serie={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </Grid>
  );
};

export default GraphContainer;
