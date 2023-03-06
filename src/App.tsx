import { useEffect, useState } from "react";

import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { ButtonVariant } from "./components/Button/ButtonTypes";
import AddVisualization from "./components/AddVisualization/AddVisualization";
import { SeriesStorageTypes } from "./components/AddVisualization/AddVisualizationTypes";

import axiosInstance from "./Axios/Axios";
import plusIcon from "./assets/icon/plus-alt.svg";
import { setStorageValue } from "./utils/setStorageValue";
import { getStorageValue } from "./utils/getStorageValue";
import Graph from "./components/Graph/Graph";
import Grid from "./layouts/Grid/Grid";
import { SeriesDataTypes } from "./SeriesDataTypes";

function App() {
  const [series, setSeries] = useState<SeriesDataTypes[]>([]);
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [seriesStorage, setSeriesStorage] = useState<SeriesStorageTypes[]>([]);

  useEffect(() => {
    setSeriesStorage(getStorageValue("seriesStorage", []));
  }, []);

  useEffect(() => {
    (async () => {
      let newArray = await Promise.all(
        seriesStorage.map(async ({ id, dateRange: { start, end } }, i) => {
          const { data } = await axiosInstance.get(`/${id}/${start}/${end}`, {
            headers: {
              Authorization:
                "01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788",
              "Bmx-Token":
                "edcaacac167fc5a766869b4778ce85e408eecf6908517692d8846bbce025a00c",
            },
          });

          return data.bmx.series[0];
        })
      );
      setSeries(newArray);
    })();
  }, [seriesStorage]);

  const handleOnSubmit = (serie: SeriesStorageTypes) => {
    setSeriesStorage((prevState) => {
      setStorageValue("seriesStorage", [...prevState, serie]);
      return [...prevState, serie];
    });
  };

  return (
    <div>
      <Header />
      <main>
        <section>
          <Button
            data-testid="app-button"
            variant={ButtonVariant.primary}
            onClick={() => setShouldShow(true)}
            style={{ marginBottom: "15px", marginLeft: "auto" }}
          >
            <Icon data-testid="app-icon" icon={plusIcon} alt="plus-icon" />
          </Button>
          <hr />
        </section>
        <Grid>
          {series.map((data: SeriesDataTypes, index: number) => (
            <Graph key={index} serie={data} />
          ))}
        </Grid>
      </main>

      <AddVisualization
        shouldShow={shouldShow}
        onSubmit={handleOnSubmit}
        onClose={() => setShouldShow(false)}
      />
    </div>
  );
}

export default App;
