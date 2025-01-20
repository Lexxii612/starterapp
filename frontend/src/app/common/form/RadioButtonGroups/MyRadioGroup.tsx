import { FieldArray, useField } from "formik";
import React from "react";
import { Form, Label, Radio } from "semantic-ui-react";
import { Options } from "../../options/option";

interface Props {
  name: string;
  options: Options[];
  label?: string;
  className?: string;
  inline: boolean;
  onChange?: (value: string) => void;
}

export default function MyRadioGroup({
  name,
  options,
  label,
  className,
  inline,
  onChange,
}: Readonly<Props>) {
  const [field, meta] = useField(name);

  return (
    <>
      {label && <label className={className}>{label}</label>}
      <FieldArray
        name={name}
        key={name}
        //id={name}
        render={() => (
          <>
            {options.map((data) => (
              <Form.Field key={`${name}[${data.value}]`}>
                <Radio
                  {...field}
                  id={`${name}[${data.value}]`}
                  key={`${name}[${data.value}]`}
                  value={data.value}
                  name={name}
                  onChange={(e, d) => {
                    field.onChange(e);
                    if (onChange) onChange(d.value ? d.value.toString() : "");
                  }}
                  onBlur={field.onBlur}
                  label={data.text}
                  checked={
                    field.value === undefined
                      ? false
                      : field.value.toString() === data.value.toString()
                  }
                />
              </Form.Field>
            ))}
          </>
        )}
      />
      {meta.touched && meta.error && (
        <Label basic color="red">
          {meta.error}
        </Label>
      )}
    </>
  );
}
