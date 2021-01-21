import React, { FunctionComponent } from "react";
import { useField } from "formik";

interface RadioGroupProps {
  name: string;
  [key: string]: any;
  // need to describe props
}

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  children,
  renderTitle,
  ...props
}) => {
  const [, meta] = useField({ ...props, type: "radio" });

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
};
