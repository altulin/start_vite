// import { useAppSelector } from "@/hooks/hook";
// import ModalAuth1 from "./auth/ModalAuth1";
// import ModalError from "./error/ModalError";

import { FC } from "react";
import { EKeys } from "../api/types";
import { ModalInfo } from "./info";
import { useAppSelector } from "@/features/store";
import { TModalState } from "../api/initialState";
import useGetCurrentModal from "../model/getCurrentModal";

interface IModalElements {
  modalState: TModalState | null;
}

const ModalElements: FC<IModalElements> = ({ modalState }) => {
  const modal = useGetCurrentModal(modalState);

  switch (modal) {
    case EKeys.INFO:
      return <ModalInfo />;

    default:
      return null;
  }
};

const ModalManager = () => {
  const { modalState } = useAppSelector((state) => state.modal);
  return modalState ? <ModalElements modalState={modalState} /> : null;
};

export default ModalManager;
