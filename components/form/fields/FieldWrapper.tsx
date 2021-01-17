import React from "react";

export const FieldWrapper = React.memo(
  ({ children, meta, style = {} }: any) => {
    return (
      <div style={{ position: "relative", ...style }}>
        {children}
        {meta.touched && meta.error ? (
          <span className="validation-msg error">{meta.error}</span>
        ) : null}
      </div>
    );
  }
);
