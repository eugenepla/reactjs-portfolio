import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const IMG = styled.img`
  height: 150px;
  padding-top: 20px;
`

export default function Avatar() {
    return (
        <Container>
        <IMG
              src="https://i.ibb.co/yYggBQb/avatar.jpg"
              alt="avatar"
              />
        </Container>
    );
}
