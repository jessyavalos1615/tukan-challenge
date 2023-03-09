import { lazy, Suspense, useEffect, useState } from "react";

import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import AddVisualization from "./components/AddVisualization/AddVisualization";

import { SeriesDataTypes } from "./SeriesDataTypes";
import { setStorageValue } from "./utils/setStorageValue";
import { getStorageValue } from "./utils/getStorageValue";
import { ButtonVariant } from "./components/Button/ButtonTypes";
import { SeriesStorageTypes } from "./components/AddVisualization/AddVisualizationTypes";

import axiosInstance from "./Axios/Axios";
import plusIcon from "./assets/icon/plus-alt.svg";
import Loader from "./components/Loader/Loader";

const GraphContainer = lazy(
  () => import("./components/GraphContainer/GraphContainer")
);

function App() {
  const [serieUpdate, setSerieUpdate] = useState<any>(null);
  const [series, setSeries] = useState<SeriesDataTypes[]>([]);
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [seriesStorage, setSeriesStorage] = useState<SeriesStorageTypes[]>([]);

  useEffect(() => {
    setSeriesStorage(getStorageValue("seriesStorage", []));
  }, []);

  useEffect(() => {
    (async () => {
      let newArray = await Promise.all(
        seriesStorage.map(
          async ({ id, serie, dateRange: { start, end } }, i) => {
            const { data }: any = await axiosInstance.get(
              `/${serie}/${start}/${end}`,
              {
                headers: {
                  Authorization:
                    "01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788",
                  "Bmx-Token":
                    "edcaacac167fc5a766869b4778ce85e408eecf6908517692d8846bbce025a00c",
                },
              }
            );

            return { ...data.bmx.series[0], range: { start, end }, id };
          }
        )
      );
      setSeries(newArray);
    })();
  }, [seriesStorage]);

  const handleEdit = (serie: SeriesDataTypes) => {
    setSerieUpdate({
      id: serie.id,
      value: serie.idSerie,
      label: serie.titulo,
      range: serie.range,
    });
    setShouldShow(true);
  };

  const handleDelete = (id: string) => {
    setSeriesStorage((prevState) => {
      const newState = prevState.filter((state) => state.id !== id);
      setStorageValue("seriesStorage", newState);
      return newState;
    });
  };

  const handleOnSubmit = (serie: SeriesStorageTypes) => {
    setSeriesStorage((prevState) => {
      setStorageValue("seriesStorage", [...prevState, serie]);
      return [...prevState, serie];
    });
  };

  const handleUpdate = (serie: SeriesStorageTypes) => {
    setSeriesStorage((prevState) => {
      const newState = prevState.map((state) => {
        if (state.id === serie.id) {
          return {
            ...state,
            serie: serie.serie,
            dateRange: serie.dateRange,
          };
        }
        return state;
      });
      setStorageValue("seriesStorage", newState);
      return newState;
    });
  };

  const handleClose = () => {
    setShouldShow(false);
    setSerieUpdate(null);
  };

  return (
    <>
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
        <Suspense fallback={<Loader />}>
          <GraphContainer
            series={series}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </Suspense>
      </main>

      <AddVisualization
        value={serieUpdate}
        onClose={handleClose}
        shouldShow={shouldShow}
        onSubmit={handleOnSubmit}
        onUpdate={handleUpdate}
        isUpdate={serieUpdate !== null}
      />
    </>
  );
}

export default App;
