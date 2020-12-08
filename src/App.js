import React from 'react';
import AppRoute from './component/route/RouteComponent';
import NavBar from './component/route/NavBar';

import Container from '@material-ui/core/Container';
function App() {
  return (
    <div>
      <NavBar/>
      <Container>
        <AppRoute/>
      </Container>
    </div>
  );
}


export default App;