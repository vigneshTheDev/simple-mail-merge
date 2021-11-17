import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { MailMerge } from '../../pages/MailMerge/MailMerge';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={'/mailMerge'} component={MailMerge}></Route>
      <Redirect to={'/mailMerge'} />
    </Switch>
  );
};
