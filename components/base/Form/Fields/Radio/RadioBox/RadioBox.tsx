import React, { FunctionComponent } from "react";
import { useField } from "formik";

interface RadioBoxProps {
  name: string;
  [key: string]: any;
  // need to describe props
}

export const RadioBox: FunctionComponent<RadioBoxProps> = ({
  children,
  ...props
}) => {
  const [field] = useField({ ...props, type: "radio" });
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
};
