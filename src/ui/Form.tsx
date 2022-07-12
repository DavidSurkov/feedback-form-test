import React, { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useTypedDispatch, useTypedSelector } from '../bll/store';
import { setServerMessage, submitFormTC } from '../bll/formReducer';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { devices } from './mediaQuery/mediaQuery';

const FormBlock = styled.form`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  color: #2d2d2d;
  @media ${devices.tablet} {
    margin-left: 10%;
    width: 550px;
  }
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
  margin-top: 10px;
  border: ${(props) => (props.error ? '1px solid deeppink' : '1px solid rgba(220, 220, 220, 1)')};
  border-radius: 10px;
  font-size: 18px;
  padding: 31px 46px;
`;
const Textarea = styled.textarea<{ error?: boolean }>`
  margin-top: 10px;
  border: ${(props) => (props.error ? '1px solid deeppink' : '1px solid rgba(220, 220, 220, 1)')};
  border-radius: 10px;
  font-size: 18px;
  resize: none;
  padding: 31px 46px 60px;
  @media ${devices.mobileL} {
    padding: 31px 46px 120px;
  }
`;

const circleAnimation = keyframes`
  0% { width: 218px; height: 73px; opacity: 1; }
  100% { width: 248px; height: 103px; opacity: 0; }
`;
const pseudoAfter = css`
  content: '';
  width: 218px;
  height: 73px;
  border-radius: 500px;
  border: 6px solid #fad34f;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: ${circleAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;
const Button = styled.button<{ isLoading?: boolean }>`
  /* Rectangle 21 */
  cursor: pointer;
  width: 218px;
  height: 73px;
  background: #fad34f;
  border-radius: 500px;
  border: none;
  font-size: 18px;
  color: white;
  position: relative;
  &::after {
    ${({ isLoading }) => isLoading && pseudoAfter}
  }
`;
const ButtonBlock = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: flex-start;
  @media ${devices.mobileL} {
    margin-top: 25px;
  }
`;
const ErrorBlock = styled.div`
  text-transform: uppercase;
  background-color: #fad34f;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-left: 10px;
`;
const ErrorSpan = styled.span`
  color: deeppink;
  height: 20px;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
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
  const serverMessage = useTypedSelector((state) => state.form.serverMessage);
  const isLoading = useTypedSelector((state) => state.form.isLoading);
  const dispatch = useTypedDispatch();
  useEffect(() => {
    if (serverMessage.length) {
      setTimeout(dispatch, 6000, setServerMessage([]));
    }
  }, [serverMessage]);

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
      <Block>
        <Input
          error={!!errors.name}
          {...register('name', { required: requiredMessage('Name'), minLength: minInputLength })}
          placeholder={'Your name*'}
        />
        <div style={{ height: '15px' }}>
          <ErrorMessage name="name" errors={errors} render={({ message }) => <ErrorSpan>{message}</ErrorSpan>} />
        </div>
      </Block>
      <Block>
        <Input
          error={!!errors.email}
          {...register('email', { required: requiredMessage('Email'), pattern: emailPattern })}
          placeholder={'Your e-mail*'}
        />
        <div style={{ height: '15px' }}>
          <ErrorMessage name="email" errors={errors} render={({ message }) => <ErrorSpan>{message}</ErrorSpan>} />
        </div>
      </Block>
      <Block>
        <Textarea
          error={!!errors.message}
          {...register('message', { required: requiredMessage('Message') })}
          placeholder={'Your message*'}
        />
        <div style={{ height: '15px' }}>
          <ErrorMessage name="message" errors={errors} render={({ message }) => <ErrorSpan>{message}</ErrorSpan>} />
        </div>
      </Block>
      <ButtonBlock>
        <Button isLoading={isLoading}>Send message</Button>
        <ErrorBlock>
          {serverMessage.map((e) => (
            <span key={e + 1}>{e}</span>
          ))}
        </ErrorBlock>
      </ButtonBlock>
    </FormBlock>
  );
};
