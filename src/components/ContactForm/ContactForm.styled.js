import styled from 'styled-components';
import { ImUser, ImPhone } from 'react-icons/im';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
  padding: 18px 12px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  border: 1px solid #000000;
  border-radius: 8px;
  box-shadow: 1px 1px 10px black;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  width: 250px;
  padding: 4px 8px 4px 28px;
  border: 2px solid #000000;
  border-radius: 8px;
  margin-top: 4px;
`;

export const IconUser = styled(ImUser)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  fill: #757575;
`;

export const IconPhone = styled(ImPhone)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  fill: #757575;
`;

export const Button = styled.button`
  width: 250px;
  color: #ffffff;
  background-color: #ea8a2a;
  border: transparent;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const FormText = styled.p`
  color: red;
`;
