import React, { FunctionComponent } from "react";

interface FieldWrapperProps {
  [key: string]: any;
  // need to describe props
}

export const FieldWrapper: FunctionComponent<FieldWrapperProps> = ({
  children,
  meta,
  style = {},
}) => {
  return (
    <div style={{ position: "relative", ...style }}>
      {children}
      {meta.touched && meta.error ? (
        <span className="validation-msg error">{meta.error}</span>
      ) : null}
    </div>
  );
};
