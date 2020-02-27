import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import Container from 'patterns/nested/Container';
import Composite from 'patterns/composite/Composite';

const Nav = () => {
  const [key, setKey] = useState('home');
  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="home" title="Composite">
        <Composite></Composite>
      </Tab>
      <Tab eventKey="profile" title="Container">
        <Container></Container>
      </Tab>
    </Tabs>
  );
}

export default Nav
