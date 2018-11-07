import React from 'react';
import styled from 'styled-components';

import TableOfStats from "./containers/TableOfStats";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 50%;
  height: 50%;
  margin-top:10%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
  overflow: scroll;
  padding-left:10%;
  padding-right:10%;
  padding-top:10%;
`;

const App = () => <AppContainer><TableOfStats/></AppContainer>;

export default App;
