import React from "react";
import { useField } from "formik";

export const RadioGroup = React.memo(
  ({ children, renderTitle, ...props }: any) => {
    const [field, meta] = useField({ ...props, type: "radio" });

    return (
      <>
        <div style={{ display: "flex" }}>
          {renderTitle(
            meta.touched && meta.error ? (
              <span
                style={{ position: "static" }}
                className="validation-msg error"
              >
                {meta.error}
              </span>
            ) : null
          )}
        </div>

        {children}
      </>
    );
  }
);

export const Radiobox = React.memo(({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <>
      <label className="radio">
        <input type="radio" {...field} {...props} />
        {children}
      </label>
      <style jsx>{`
        label.radio {
          padding-right: 40px;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 17px;
        }
        @media (min-width: 768px) {
          label.radio {
            padding-right: 108px;
          }
        }
      `}</style>
    </>
  );
});
