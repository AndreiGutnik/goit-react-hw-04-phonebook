import styled from 'styled-components';

export const ContacItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Text = styled.p`
  font-weight: 700;

  & span {
    font-weight: 400;
  }
`;

export const Button = styled.button`
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #ea8a2a;
    border-color: #bf6b16;
  }
`;
