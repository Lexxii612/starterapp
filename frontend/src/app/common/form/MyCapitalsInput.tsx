import { useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";
import MyHelpButton from "./MyHelpButton";

interface Props {
  placeholder: string;
  name: string;
  type?: string;
  label?: string;
  className?: string;
  showHelp?: boolean;
  helpName?: string;
  disabled?: boolean;
  myValidate?: (value: string) => void;
  helpSeeMore?: boolean;
  maxLength: number
}

export default function MyCapitalsInput(props: Readonly<Props>) {
  const [field, meta] = useField(props.name);
  let labelClassName: string = "myLabel";
  let inputClassName: string ="input";
  if (props.className) labelClassName = `${labelClassName} ${props.className}`;
  if (props.className) inputClassName = `${inputClassName} ${props.className}`;

  return (
    <Form.Field
      error={meta.touched && !!meta.error}
      className="ui"
      name={props.name}
    >
      {props.label && props.label.length > 0 && (
        <label
          className={labelClassName}
          htmlFor={props.name}
        >
          {`${props.label} `}
          {props.showHelp && (
              <MyHelpButton
                name={`${props.name}.help`}
                help={props.helpName? props.helpName: ""}
                seeMore={props.helpSeeMore}
                color={"blue"}
              />
          )}
        </label>
      )}
      <input
        {...field}
        {...props}
        onInput={(e) => {
          const value = e.currentTarget.value;
          if (value) {
            e.currentTarget.value = value.toUpperCase();
          }
          if (props.myValidate) props.myValidate(field.value);
        }}
        className={inputClassName}
        value={ (field.value != null ? field.value.toString() : undefined ) || undefined }
        id={props.name}
      />
      {meta.touched && meta.error && (
        <Label basic color="red">
          {meta.error}
        </Label>
      )}
    </Form.Field>
  );
}
