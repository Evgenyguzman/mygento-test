import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useCallback } from "react";
import { Checkbox } from "../../base/Form/Fields/Checkbox/Checkbox";
import { RadioBox } from "../../base/Form/Fields/Radio/RadioBox/RadioBox";
import { RadioGroup } from "../../base/Form/Fields/Radio/RadioGroup/RadioGroup";
import { TextInput } from "../../base/Form/Fields/TextInput/TextInput";

import { PrivacyPolicy } from "./PrivacyPolicy";
import { Confirmation } from "./Confirmation";
import { FileInput } from "../../base/Form/Fields/FileInput/FileInput";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  file: undefined,
  gender: undefined,
  github: "",
  agree: false,
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]*$/, "В имени могут быть только буквы")
    .required("Поле обязательно к заполнению"),
  lastName: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]*$/, "В фамилии могут быть только буквы")
    .required("Поле обязательно к заполнению"),
  email: Yup.string()
    .email("Пожалуйста укажите электронную почту")
    .required("Поле обязательно к заполнению"),
  gender: Yup.mixed()
    .oneOf(["MALE", "FEMALE"], "укажите пол")
    .required("укажите пол"),
  github: Yup.string().url("Проверьте правильность ссылки"),
  agree: Yup.boolean()
    .isTrue("Согласитесь с политикой кофиденциальности")
    .required("Согласитесь с политикой кофиденциальности"),
});

export const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        <Form>
          <h1>Анкета соискателя</h1>
          <div>
            <h2>Личные данные</h2>
            <div className="inputs">
              <TextInput
                className="item"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Имя"
                required={true}
              />
              <TextInput
                className="item"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Фамилия"
                required={true}
              />
              <TextInput
                className="item"
                type="email"
                id="email"
                name="email"
                placeholder="Электронная почта"
                required={true}
              />
              <FileInput className="item" name="file" id="file" />
            </div>
          </div>
          <div>
            <RadioGroup
              type="radio"
              name="gender"
              renderTitle={(children) => <h2>Пол * {children}</h2>}
            >
              <RadioBox
                type="radio"
                name="gender"
                id="male"
                value="MALE"
                style={{
                  margin: "0 8px 0 0",
                }}
              >
                Мужской
              </RadioBox>
              <RadioBox
                type="radio"
                name="gender"
                id="female"
                value="FEMALE"
                style={{
                  margin: "0 8px 0 0",
                }}
              >
                Женский
              </RadioBox>
            </RadioGroup>
          </div>
          <div className="input">
            <h2>Github</h2>
            <TextInput
              type="text"
              id="github"
              name="github"
              placeholder="Вставьте ссылку на Github"
            />
          </div>
          <div>
            <Checkbox
              type="checkbox"
              name="agree"
              id="agree"
              style={{
                margin: "0 8px 0 0",
              }}
              renderChildren={(field) => (
                <>
                  * Я согласен с{" "}
                  <PrivacyPolicy
                    onConfirm={useCallback(() => {
                      field.onChange({
                        target: { name: "agree", value: true },
                      });
                    }, [])}
                  />
                </>
              )}
            />
          </div>
          <Confirmation />
        </Form>
      </Formik>
      <style jsx>{`
        @media (min-width: 768px) {
          .inputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .inputs :global(> div) {
            margin-right: 40px;
          }
          .input :global(input[type="text"]),
          .inputs :global(input[type="text"]) {
            width: 256px;
          }
        }
      `}</style>
    </>
  );
};
