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

export default function Avatar(props) {
    return (
        <Container>
        <IMG
            src={props.avatar}
            alt="avatar"
            />
        </Container>
    );
}
