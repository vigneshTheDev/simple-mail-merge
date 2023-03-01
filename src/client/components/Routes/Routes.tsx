import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { CreateMailingList } from '../../pages/CreateMailingList/CreateMailingList';
import { MailMerge } from '../../pages/MailMerge/MailMerge';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={'/mailMerge'} component={MailMerge}></Route>
      <Route path={'/createMailingList'} component={CreateMailingList}></Route>
      <Redirect to={'/mailMerge'} />
    </Switch>
  );
};
