import { CChart } from "@coreui/react-chartjs";
import React from "react";
import { GraphProps } from "./GraphTypes";
import { GraphContainer, GraphTitle } from "./Style";

const Graph = ({ serie }: GraphProps) => {
  const { titulo, datos } = serie;
  const labels = datos.map((dato) => dato.fecha);
  const data = datos.map(({ dato }) => {
    return Number(dato.replace(",", ""));
  });
  return (
    <GraphContainer>
      <div style={{textAlign: 'justify'}}>

      <GraphTitle>{titulo}</GraphTitle>
      </div>
      <CChart
        type="line"
        data={{
          labels,
          datasets: [
            {
              label: "",
              backgroundColor: "#0a1a42",
              borderColor: "#2b5aa5",
              pointBackgroundColor: "#0a1a42",
              pointBorderColor: "#fff",
              data,
            },
          ],
        }}
      />
    </GraphContainer>
  );
};

export default Graph;
