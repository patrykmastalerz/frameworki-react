import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';


import TopBar from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Entities from '../Entity/Entities';
import WorkspacePage from '../Workspace/WorkspacePage';
import NotFound from './NotFound';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/usersActions';
import { getComments } from '../../actions/commentActions';
import ResumeWork from '../Home/ResumeWork';
import { getPhotos } from '../../actions/photoActions';
import { getPosts } from '../../actions/postActions';
import { IState } from '../../reducers';
import { IUserReducer } from '../../reducers/userReducers';


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
    path: "/profile/",
    component: Profile
  },
  {
    path: "/entities",
    component: Entities
  },
  {
    path: "/workspace",
    component: WorkspacePage
  },
  {
    path: "/*",
    component: NotFound
  }
];

type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>

const MainPage: FC = () => {

  //czy to musi byc?
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetComments>(getComments());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
  }, [])



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
