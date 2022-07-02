import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import styled from "styled-components";
import {useTypedDispatch, useTypedSelector} from "../bll/store";
import {submitFormTC} from "../bll/formReducer";

const FormBlock = styled.form`
  width: 550px;
  display: flex;
  flex-direction: column;
  color: #2D2D2D;
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
const Input = styled.input`
  max-width: 550px;
  max-height: 90px;
  margin-top: 10px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 10px;
  padding: 0 10px;
  font-size: 18px;
`;
const Textarea = styled.textarea`
  max-width: 550px;
  max-height: 190px;
  margin-top: 10px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 10px;
  resize: none;
  padding: 10px;
  font-size: 18px;
`;
const Button = styled.button`
  /* Rectangle 21 */
  width: 218px;
  height: 73px;
  background: #FAD34F;
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
}
export const Form = () => {
  const server = useTypedSelector(state => state.form);
  const dispatch = useTypedDispatch();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
  }
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) setNameError('Name is required')
    else setNameError('')
    if (!email.trim()) setEmailError('Email is required')
    else setEmailError('')
    if (!message.trim()) setMessageError('Message is required')
    else setMessageError('')
    if (name.trim() && email.trim() && message.trim()) dispatch(submitFormTC({name, email, message}))
    /*name.trim() && console.log(name.trim());
    setName(name.trim());*/
  };

  return (
    <FormBlock onSubmit={onSubmit}>
      <Title>Reach out to us!</Title>
      <Input onChange={onChangeText} value={name} placeholder={'Your name*'}/>
      <Input onChange={onChangeEmail} value={email} placeholder={'Your e-mail*'}/>
      <Textarea onChange={onChangeMessage} value={message} placeholder={'Your message*'}/>
      <ButtonBlock>
        <Button>Send message</Button>
        <ErrorBlock>
          <span>{nameError}</span>
          <span>{emailError}</span>
          <span>{messageError}</span>
          <span>{server.error}</span>
          <span style={{color: 'forestgreen'}}>{server.success}</span>
        </ErrorBlock>
      </ButtonBlock>
    </FormBlock>
  );
};

