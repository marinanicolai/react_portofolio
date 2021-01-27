import React from 'react';
import { Container } from '../../common';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from '../Contact/ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h3>Contact me</h3>
      <ContactForm />
    </Details>
  </Wrapper>
);
