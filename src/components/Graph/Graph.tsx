import React from "react";
import { CChart } from "@coreui/react-chartjs";

import Icon from "../Icon/Icon";
import { GraphProps } from "./GraphTypes";
import editIcon from "../../assets/icon/edit.svg";
import deleteIcon from "../../assets/icon/delete.svg";
import { GraphActions, GraphContainer, GraphHeader, GraphTitle } from "./Style";

const Graph = ({ serie, handleEdit, handleDelete }: GraphProps) => {
  const { titulo, datos } = serie;
  const labels = datos?.map((dato) => dato.fecha);
  const data = datos?.map(({ dato }) => {
    return Number(dato.replace(",", ""));
  });

  return (
    <GraphContainer>
      <GraphActions>
        <Icon
          icon={editIcon}
          onClick={() => handleEdit(serie)}
          alt="edit-icon"
        />
        <Icon
          icon={deleteIcon}
          onClick={() => handleDelete(serie.id)}
          alt="delete-icon"
        />
      </GraphActions>
      <GraphHeader>
        <GraphTitle>{`${titulo}${
          !datos ? "\n (Data doesn't exist)" : ""
        }`}</GraphTitle>
      </GraphHeader>
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
