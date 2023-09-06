import React from 'react';
import { nanoid } from 'nanoid';
import { FilterStyle, IconSearch, Input, InputWrap } from './Filter.styled';

export function Filter({ filter, onChangeFilter }) {
  const inputId = nanoid();
  return (
    <>
      <FilterStyle htmlFor={inputId}>Find contacts by name</FilterStyle>
      <InputWrap>
        <Input
          type="text"
          value={filter}
          placeholder="Name"
          onChange={onChangeFilter}
          id={inputId}
        />
        <IconSearch />
      </InputWrap>
    </>
  );
}
