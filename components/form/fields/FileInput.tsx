import React from "react";
import { useField } from "formik";

export const FileInput = React.memo(({ icon, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div style={{ position: "relative" }}>
      <br />
      <input
        type="file"
        name={props.name}
        id={props.id}
        className="inputfile"
        onChange={field.onChange}
      />
      <label className={!field.value ? "empty" : "filled"} htmlFor="file">
        {field.value ? (
          <img className="icon" src={"./attachment.svg"} alt="logo" />
        ) : (
          <div className="icon icon-plus">
            <img src={"./line.svg"} alt="logo" />
            <img src={"./line2.svg"} alt="logo" />
          </div>
        )}
        <span>{!field.value ? "Загрузить резюме" : field.value}</span>
        {field.value && (
          <img
            className="close"
            src="./close-black.svg"
            alt="close"
            onClick={(e) => {
              e.preventDefault();
              field.onChange({ target: { id: "file", value: null } });
            }}
          />
        )}
      </label>
      <style jsx>{`
        .inputfile {
          width: 0.1px;
          height: 0.1px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          z-index: -1;
        }
        .inputfile + label {
          width: 100%;
          position: relative;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 22px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .inputfile + label.empty {
          padding: 10px 0;
          text-align: center;
          color: #595959;
          background: #f5f5f5;
          border: 1px dashed #d9d9d9;
          border-radius: 2px;
        }

        .inputfile + label.filled:hover {
          background: #e6f7ff;
        }

        .inputfile + label.empty span {
          width: 100%;
        }
        .inputfile + label.filled span {
          color: #1890ff;
        }

        .inputfile + label.filled .icon {
          padding: 0 11px 0 7px;
        }
        .inputfile + label .icon-plus {
          margin-left: 55px;
          position: absolute;
          width: 17px;
          height: 18px;
        }
        @media (min-width: 768px) {
          .inputfile + label .icon-plus {
            margin-left: 12px;
          }
        }
        .inputfile + label .icon-plus img {
          position: absolute;
        }
        .inputfile + label .icon-plus img:nth-child(1) {
          left: 0;
          top: calc(50% - 1px);
        }
        .inputfile + label .icon-plus img:nth-child(2) {
          position: absolute;
          left: calc(50% - 1.5px);
        }
        .inputfile + label.filled .close {
          display: none;
          position: absolute;
          right: 0;
          padding: 6px 7px;
        }
        .inputfile + label.filled:hover .close {
          display: block;
        }
      `}</style>
    </div>
  );
});
