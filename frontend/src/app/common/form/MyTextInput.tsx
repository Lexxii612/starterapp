import { useField } from 'formik';
import React from 'react';
import { Form, Label } from 'semantic-ui-react';

interface Props {
    placeholder: string;
    name: string;
    type?: string;
    label?: string;
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name); 
    return (
        <Form.Field error={meta.touched && !!meta.error} className="ui" name={props.name}>
            <label className='myLabel' htmlFor={props.name}>{props.label}</label>
            <input className='input' {...field} {...props} value={field.value || undefined || null} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}