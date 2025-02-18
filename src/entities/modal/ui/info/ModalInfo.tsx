import clsx from "clsx";
import { FC } from "react";
import Modal from "../Modal";
import style from "../Modal.module.scss";
import { Title } from "@/widgets/title";
import { useAppSelector } from "@/features/store";

const ModalInfo: FC = () => {
  const { modalState } = useAppSelector((state) => state.modal);

  const info = modalState?.info;

  if (!info || !("text" in info)) {
    return null;
  }

  const { text } = info;

  return (
    <Modal>
      <div className={clsx(style.modal__form)}>
        <div className={clsx(style["modal-form__wrap"])}>
          {text && <Title label={text} className={clsx(style.modal__title)} />}
        </div>
      </div>
    </Modal>
  );
};
export default ModalInfo;
