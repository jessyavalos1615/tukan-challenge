import { useEffect, useState } from "react";

import Modal from "../../layouts/Modal/Modal";
import DateRange from "../DateRange/DateRange";
import SearchList from "../SearchList/SearchList";

import { SelectOptions } from "../SearchList/SearchListTypes";
import {
  AddVisualizationProps,
  VisualizationOptionsTypes,
} from "./AddVisualizationTypes";
import { useFetchSeriesCatalog } from "../../hooks/useFetchSeriesCatalog";
import { getFormatDate } from "../../utils/getFormatDate";

const AddVisualization = ({
  shouldShow,
  onSubmit,
  onClose,
}: AddVisualizationProps) => {
  const [series] = useFetchSeriesCatalog();
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
  const [visualizationOptions, setVisualizationOptions] =
    useState<VisualizationOptionsTypes>({
      serieSelected: null,
      dateRange: {
        start: "",
        end: "",
      },
    });

  useEffect(() => {
    const { dateRange, serieSelected } = visualizationOptions;
    const isComplete =
      serieSelected !== null && dateRange.start !== "" && dateRange.end !== "";

    setDisableSubmit(!isComplete);
  }, [visualizationOptions]);

  const handleOnChangeSelect = (select: SelectOptions) => {
    setVisualizationOptions((prevState) => ({
      ...prevState,
      serieSelected: select,
    }));
  };

  const handleOnChangeDate = (e: any) => {
    let dateRange = {
      start: "",
      end: "",
    };
    if (e) {
      dateRange.start = getFormatDate(e[0]);
      dateRange.end = getFormatDate(e[1]);
    }
    setVisualizationOptions((prevState) => ({ ...prevState, dateRange }));
  };

  const handleSubmit = () => {
    const { dateRange, serieSelected } = visualizationOptions;
    onSubmit({ id: serieSelected?.value!, dateRange });
    handleOnClose();
  };

  const handleOnClose = () => {
    onClose();
    setVisualizationOptions({
      serieSelected: null,
      dateRange: {
        start: "",
        end: "",
      },
    });
  };

  return (
    <Modal
      title="Add new visualization"
      shouldShow={shouldShow}
      onClose={handleOnClose}
      onSubmit={handleSubmit}
      disableSubmit={disableSubmit}
    >
      <SearchList
        data={series}
        value={visualizationOptions.serieSelected}
        onChange={handleOnChangeSelect}
        label="Choose Banxico's Serie"
      />
      <DateRange onChange={handleOnChangeDate} />
    </Modal>
  );
};

export default AddVisualization;
