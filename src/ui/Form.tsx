import React from 'react';
import styled from 'styled-components';
import { useTypedDispatch, useTypedSelector } from '../bll/store';
import { submitFormTC } from '../bll/formReducer';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const FormBlock = styled.form`
  width: 550px;
  display: flex;
  flex-direction: column;
  color: #2d2d2d;
  margin-left: 25%;
`;
const Title = styled.div`
  font-weight: 400;
  font-size: 40px;
  line-height: 180%;
  text-align: left;
  color: rgba(62, 62, 62, 1);
  /* or 18px */
`;
const Input = styled.input<{ error?: boolean }>`
  max-width: 550px;
  max-height: 90px;
  margin-top: 10px;
  border: ${(props) => (props.error ? '1px solid deeppink' : '1px solid rgba(220, 220, 220, 1)')};
  border-radius: 10px;
  font-size: 18px;
  padding: 31px 46px;
`;
const Textarea = styled.textarea<{ error?: boolean }>`
  max-width: 550px;
  max-height: 190px;
  margin-top: 10px;
  border: ${(props) => (props.error ? '1px solid deeppink' : '1px solid rgba(220, 220, 220, 1)')};
  border-radius: 10px;
  resize: none;
  padding: 31px 46px 120px;
  font-size: 18px;
`;
const Button = styled.button`
  /* Rectangle 21 */
  width: 218px;
  height: 73px;
  background: #fad34f;
  border-radius: 500px;
  border: none;
  font-size: 18px;
  color: white;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 25px;
`;
const ErrorBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: deeppink;
  font-weight: bold;
  margin-left: 10px;
`;

export type FormType = {
  name: string;
  email: string;
  message: string;
};

const minInputLength = {
  value: 2,
  message: 'Minimum length is 2 symbols.',
};

const re = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const emailPattern = {
  value: re,
  message: 'Email is not correct',
};

export const Form = () => {
  const server = useTypedSelector((state) => state.form);

  const dispatch = useTypedDispatch();

  const requiredMessage = (name: string): string => `${name} is required.`;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = (data: FormType) => {
    dispatch(submitFormTC(data));
    reset();
  };
  return (
    <FormBlock onSubmit={handleSubmit(onSubmit)}>
      <Title>Reach out to us!</Title>
      <Input
        error={!!errors.name}
        {...register('name', { required: requiredMessage('Name'), minLength: minInputLength })}
        placeholder={'Your name*'}
      />
      <Input
        error={!!errors.email}
        {...register('email', { required: requiredMessage('Email'), pattern: emailPattern })}
        placeholder={'Your e-mail*'}
      />
      <Textarea
        error={!!errors.message}
        {...register('message', { required: requiredMessage('Message') })}
        placeholder={'Your message*'}
      />
      <ButtonBlock>
        <Button>Send message</Button>
        <ErrorBlock>
          <ErrorMessage name="name" errors={errors} render={({ message }) => <span>{message}</span>} />
          <ErrorMessage name="email" errors={errors} render={({ message }) => <span>{message}</span>} />
          <ErrorMessage name="message" errors={errors} render={({ message }) => <span>{message}</span>} />
          {server.error?.map((e) => (
            <span>{e}</span>
          ))}
          <span style={{ color: 'forestgreen' }}>{server.success}</span>
        </ErrorBlock>
      </ButtonBlock>
    </FormBlock>
  );
};
