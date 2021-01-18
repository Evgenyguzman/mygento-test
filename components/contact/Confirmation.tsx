import { useFormikContext } from "formik";
import React from "react";
import { ModalWithState } from "../base/Modal";
import { Button } from "../form/Button";

export const Confirmation = React.memo(({ onConfirm = (f) => f }: any) => {
  const formik = useFormikContext();
  return (
    <ModalWithState
      isCloseVisible={false}
      ActionComponent={({ onClick }) => {
        return (
          <Button type="submit" onClick={onClick}>
            Отправить
          </Button>
        );
      }}
      renderTitle={() => (
        <h3
          style={{ textAlign: "center" }}
        >{`Спасибо, ${formik.values["firstName"]}`}</h3>
      )}
      renderContent={() => (
        <p style={{ textAlign: "center" }}>Мы скоро свяжемся с Вами</p>
      )}
      renderButton={(onClose) => (
        <Button
          type="reset"
          disabled={false}
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          Понятно
        </Button>
      )}
    />
  );
});
