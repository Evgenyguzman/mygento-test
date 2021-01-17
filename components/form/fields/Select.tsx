import { useField } from "formik";
import React, { useState } from "react";
import { FieldWrapper } from "./FieldWrapper";

export const Select = React.memo(({ options = [], ...props }: any) => {
  const [field, meta] = useField(props);

  const [isOpened, setIsOpened] = useState(false);

  return (
    <FieldWrapper meta={meta} style={{ marginBottom: 29 }}>
      <div className={`custom-select sources ${isOpened ? "opened" : ""}`}>
        <span
          className="custom-select-trigger"
          onClick={() => {
            setIsOpened(!isOpened);
          }}
          style={{ color: field.value ? "#222" : "#A2A2A2" }}
        >
          {field.value ? field.value : "Select country"}
        </span>
        {isOpened && (
          <div className="custom-options">
            {options.map((option: any) => (
              <span
                key={option.value}
                className={`custom-option ${
                  field.value === option.name ? "selection" : ""
                }`}
                data-value={option.value}
                onClick={() => {
                  if (field.value !== option.name) {
                    field.onChange({
                      target: { name: props.name, value: option.name },
                    });
                  }
                  setIsOpened(false);
                }}
              >
                {option.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </FieldWrapper>
  );
});
