import { FC } from "react";
import { Modal } from "antd";

import { Beer } from "@/resources/beer";

type AdditionalInfoModalProps = {
  record: Beer;
  isVisible: boolean;
  onClose: () => void;
};

const AdditionalInfoModal: FC<AdditionalInfoModalProps> = ({
  record,
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      title={`${record.title} - ${record.alchool}`}
      open={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <p>{record.description}</p>
    </Modal>
  );
};

export default AdditionalInfoModal;
