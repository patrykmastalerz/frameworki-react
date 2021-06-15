import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { getComments } from "../../actions/commentActions";
import { getPhotos } from "../../actions/photoActions";
import { getPosts } from "../../actions/postActions";
import { getUsers } from "../../actions/usersActions";
import { Colors } from "../../styledHelpers/Colors";
import Entities from "../Entity/Entities";
import Home from "../Home/Home";
import LeftMenu from "../LeftMenu/LeftMenu";
import Profile from "../Profile/Profile";
import TopBar from "../TopBar/TopBar";
import WorkspacePage from "../Workspace/WorkspacePage";
import NotFound from "./NotFound";



const Wrapper = styled.section`
  background-color: ${Colors.whiteLight};
`;

const Content = styled.div`
  max-width: 1200px;
  padding: 10px 20px;
  display: flex;
`;

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/profile/",
    component: Profile,
  },
  {
    path: "/entities",
    component: Entities,
  },
  {
    path: "/workspace",
    component: WorkspacePage,
  },
  {
    path: "/*",
    component: NotFound,
  },
];

type GetUsers = ReturnType<typeof getUsers>;
type GetComments = ReturnType<typeof getComments>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;

const MainPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetComments>(getComments());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
  }, []);

  return (
    <Router>
      <Wrapper>
        <TopBar />
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
};

export default MainPage;
