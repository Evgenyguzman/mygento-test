import { useFormikContext } from "formik";
import React from "react";

export const Button = React.memo(({ children, disabled, ...props }: any) => {
  const formik = useFormikContext();
  const isDisabled =
    disabled !== undefined
      ? disabled
      : !formik || !formik.dirty || !formik.isValid;
  return (
    <>
      <button
        {...props}
        onClick={!isDisabled ? props.onClick : (f) => f}
        className={isDisabled ? "disabled" : ""}
      >
        {children ? children : "Button"}
      </button>
      <style jsx>{`
        button {
          width: 100%;
          background: #0094ff 0% 0% no-repeat padding-box;
          color: #ffffff;
          padding: 8px 0;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
        }
        button:hover {
          background: #40a9ff;
        }
        button:focus {
          background: #096dd9;
        }
        button.disabled {
          border: 1px solid #d9d9d9;
          background: #e8e8e8;
          color: #bcbcbc;
        }
        @media (min-width: 768px) {
          button {
            width: 360px;
          }
        }
      `}</style>
    </>
  );
});
