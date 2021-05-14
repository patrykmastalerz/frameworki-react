import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';


import TopBar from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import Home from '../Home/Home';
import Profile from './Profile';
import Entities from './Entities';
import NotFound from './NotFound';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


const Wrapper = styled.section`
  background-color: ${Colors.whiteLight};
`;

const Content = styled.div`
  max-width: 1200px;
  padding: 10px 20px;
  /* align-items: center; */
  display: flex;
`;

const routes = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    path: "/profile/:userId",
    component: Profile
  },
  {
    path: "/entities",
    component: Entities
  },
  {
    path: "/*",
    component: NotFound
  }
];

const MainPage: FC = () => {



  return (
    <Router>
      <Wrapper>
        <TopBar/>
        <Content>
          <LeftMenu />
          <Switch>

            {routes.map((route, index) => (
              <Route exact={route.exact} path={route.path} key={index}>
                <route.component />
              </Route>
            ))}

          </Switch>
        </Content>
      </Wrapper>
    </Router>
  );
}

export default MainPage;
