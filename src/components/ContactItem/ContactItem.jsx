import React from 'react';
import { ContacItem, Text, Button } from './ContactItem.styled';

export function ContactItem({ contact: { id, name, number }, onDelete }) {
  return (
    <ContacItem>
      <Text>
        {name}: <span>{number}</span>
      </Text>
      <Button type="button" data-id={id} onClick={onDelete}>
        Delete
      </Button>
    </ContacItem>
  );
}
