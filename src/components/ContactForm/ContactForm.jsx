import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  FormStyle,
  Input,
  Button,
  InputWrap,
  IconPhone,
  IconUser,
  FormText,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <FormText>{message}</FormText>}
    />
  );
};

const validationScheme = object().shape({
  name: string().min(5).max(50).required(),
  number: string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
      'does not match the required format'
    )
    .required(),
});

export class ContactForm extends Component {
  labelNameId = nanoid();
  labelNumberId = nanoid();

  onSubmitForm = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={this.onSubmitForm}
      >
        {({ isSubmitting }) => (
          <FormStyle autoComplete="off">
            <div>
              <label htmlFor={this.labelNameId}>Name</label>
              <InputWrap>
                <Input
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  placeholder="Name"
                  id={this.labelNameId}
                />
                <IconUser />
              </InputWrap>
              <FormError name="name" />
            </div>

            <div>
              <label htmlFor={this.labelNumberId}>Number</label>
              <InputWrap>
                <Input
                  type="tel"
                  name="number"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  placeholder="Phone number"
                  id={this.labelNumberId}
                />
                <IconPhone />
              </InputWrap>
              <FormError name="number" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Add contact
            </Button>
          </FormStyle>
        )}
      </Formik>
    );
  }
}
