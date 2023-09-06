import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const FilterStyle = styled.label`
  text-align: left;
  margin-bottom: 4px;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 4px 8px 4px 28px;
  border: 2px solid #000000;
  border-radius: 8px;
`;

export const IconSearch = styled(ImSearch)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  fill: #757575;
`;
