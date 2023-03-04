import { useState } from "react";
import { useFetchSeriesCatalog } from "../../hooks/useFetchSeriesCatalog";

import Modal from "../../layouts/Modal/Modal";
import SearchList from "../SearchList/SearchList";
import { SelectOptions } from "../SearchList/SearchListTypes";
import { AddVisualizationProps } from "./AddVisualizationTypes";

const AddVisualization = ({
  shouldShow,
  onSubmit,
  onClose,
}: AddVisualizationProps) => {
  const [serieSelected, setSerieSelected] = useState<null | SelectOptions>(
    null
  );
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
  const [series] = useFetchSeriesCatalog();

  const handleSubmit = () => {
    onSubmit({ id: serieSelected?.value! });
    handleOnClose();
  };

  const handleOnChange = (select: SelectOptions) => {
    setSerieSelected(select);
    setDisableSubmit(false);
  };

  const handleOnClose = () => {
    onClose();
    setSerieSelected(null);
    setDisableSubmit(true);
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
        value={serieSelected}
        onChange={handleOnChange}
        label="Choose Banxico's Serie"
      />
    </Modal>
  );
};

export default AddVisualization;
