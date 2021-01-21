import React, { FunctionComponent } from "react";
import { useField } from "formik";
import { FieldWrapper } from "../FieldWrapper";

interface TextInputProps {
  name: string;
  [key: string]: any;
  // need to describe props
}

export const TextInput: FunctionComponent<TextInputProps> = ({
  icon,
  required = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <FieldWrapper meta={meta} style={{ marginBottom: 24 }}>
      <div style={{ position: "relative" }}>
        <label htmlFor={props.id}>{`${props.placeholder}${
          required ? " *" : ""
        }`}</label>
        <div>
          <input
            className="text-input"
            autoComplete="off"
            {...field}
            {...props}
          />
        </div>
      </div>
      <style jsx>{`
        input {
          width: 100%;
          padding: 8px 12px;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          background: #ffffff;
          border: 1px solid #d9d9d9;
          box-sizing: border-box;
          border-radius: 2px;
          color: #595959;
        }
        input:hover {
          border-color: #40a9ff;
        }
        input:focus {
          border: 1px solid #40a9ff;
          box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);
        }
        label {
          font-family: SF Pro Display;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 22px;
          color: #262626;
        }
      `}</style>
    </FieldWrapper>
  );
};
