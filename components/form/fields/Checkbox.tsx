import React from "react";
import { useField } from "formik";
import { FieldWrapper } from "./FieldWrapper";

export const Checkbox = React.memo(
  ({ children, renderChildren, ...props }: any) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <FieldWrapper
        meta={meta}
        style={{ marginTop: "48px", marginBottom: "40px" }}
      >
        <input type="checkbox" {...field} {...props} />
        <label className="checkbox">
          {renderChildren ? renderChildren(field) : children}
        </label>
        <style jsx>{`
          label {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 22px;
            color: #595959;
          }
        `}</style>
      </FieldWrapper>
    );
  }
);
