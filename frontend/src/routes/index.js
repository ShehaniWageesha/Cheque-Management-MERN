/** @format */
import React from 'react';
import { Route } from 'react-router-dom';
import ApplyCheque from '../pages/ApplyCheque';
import ChequeAdmin from '../pages/ChequeAdmin';
import ChequesList from '../pages/ChequeList';
import EditCheques from '../pages/EditCheque';
import Index from '../pages/Index';
import StopCheques from '../pages/StopCheque';
import { RoutePaths } from './route-paths';

const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/" exact component={ChequesList} />
      <Route path={`${paths.edit}:id`} component={EditCheques} />
      <Route path={paths.create} component={ApplyCheque} />
      <Route path={paths.chequeadmin} component={ChequeAdmin}/>
      <Route path={paths.index} component={Index}/>
      <Route path={paths.stop} component={StopCheques}/>
    </>
  );
};

export default Routes;
