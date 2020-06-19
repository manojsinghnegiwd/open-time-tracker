import React from 'react';
import styled from "styled-components"
import AddTask from './dashboard/AddTask';

const Container = styled.div`
  padding: 10px;
`

export default function Home() {
  return (
    <Container>
      <AddTask />
    </Container>
  );
}
