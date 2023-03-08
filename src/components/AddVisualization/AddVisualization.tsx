import { useEffect, useState } from "react";

import Modal from "../../layouts/Modal/Modal";
import DateRange from "../DateRange/DateRange";
import SearchList from "../SearchList/SearchList";
import { getFormatDate, setFormatDate } from "../../utils/getFormatDate";
import {
  AddVisualizationProps,
  SeriesTypes,
  UnitID,
  VisualizationOptionsTypes,
} from "./AddVisualizationTypes";

const AddVisualization = ({
  shouldShow,
  onSubmit,
  onUpdate,
  onClose,
  isUpdate,
  value,
}: AddVisualizationProps) => {
  const [dateRange, setDateRange] = useState<any>(null);
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
    (async () => {
      if (isUpdate) {
        setVisualizationOptions({
          serieSelected: {
            variable: value.value,
            display_name: value.label,
            display_name_en: "",
            unit_id: UnitID.Mxn,
          },
          dateRange: value.range,
        });

        console.log(setFormatDate(value.range.end))
        setDateRange([
          new Date(setFormatDate(value.range.start)),
          new Date(setFormatDate(value.range.end)),
        ]);
      }
    })();
  }, [isUpdate, value]);

  useEffect(() => {
    const { dateRange, serieSelected } = visualizationOptions;
    const isComplete =
      serieSelected !== null && dateRange.start !== "" && dateRange.end !== "";

    setDisableSubmit(!isComplete);
  }, [visualizationOptions]);

  const handleOnChangeSelect = (select: SeriesTypes) => {
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
    setDateRange(e);
    setVisualizationOptions((prevState) => ({ ...prevState, dateRange }));
  };

  const handleSubmit = () => {
    const { dateRange, serieSelected } = visualizationOptions;
    if (isUpdate) {
      onUpdate({
        id: value.id,
        serie: serieSelected?.variable!,
        dateRange,
      });
    } else {
      onSubmit({
        id: serieSelected?.variable! + dateRange.start + dateRange.end,
        serie: serieSelected?.variable!,
        dateRange,
      });
    }
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
    setDateRange(null);
  };

  return (
    <Modal
      title={`${isUpdate ? "Update" : "Add new"} visualization`}
      shouldShow={shouldShow}
      onClose={handleOnClose}
      onSubmit={handleSubmit}
      disableSubmit={disableSubmit}
    >
      <SearchList
        value={visualizationOptions.serieSelected}
        onChange={handleOnChangeSelect}
        label="Choose Banxico's Serie"
      />
      <DateRange value={dateRange} onChange={handleOnChangeDate} />
    </Modal>
  );
};

export default AddVisualization;
