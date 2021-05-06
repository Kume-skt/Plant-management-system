import React from 'react';
import { Link } from 'react-router-dom';
// import { css } from "emotion";
import '../page/css/base.css';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
export default function Links() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#42DB8C',
        alignItems: 'center',
      }}
    >
      <Linklist to='/'>
        <Typography variant='h5'>Home</Typography>
      </Linklist>
      <Linklist to='/Plant_observation'>
        <Typography variant='h5'>植物観察</Typography>
      </Linklist>
      <Linklist to='/Plant_graph'>
        <Typography variant='h5'>植物情報</Typography>
      </Linklist>
    </div>
  );
}
const Linklist = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin: 0 15px;
`;
