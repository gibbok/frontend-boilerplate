import * as React from 'react';
import styled from 'styled-components';

export function Hello(): JSX.Element {
  return <HelloStyled>Hello world! 😎</HelloStyled>;
}

const HelloStyled = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4rem;
`;
