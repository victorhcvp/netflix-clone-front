import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Browse from '../pages/Browse';
import ShadowGlobal from '../components/ShadowGlobal';

const Routes: React.FC = () => {
  return (
    <>
      <ShadowGlobal />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/browse/:profileImage" component={Browse} />
      </Switch>
    </>
  );
};

export default Routes;
