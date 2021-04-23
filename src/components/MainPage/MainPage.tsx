import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';


import TopBar from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';

const Wrapper = styled.section`
  background-color: ${Colors.whiteLight};
`;

const Content = styled.div`
  max-width: 1200px;
  padding: 10px 20px;
  align-items: center;
  display: flex
`;

const MainPage: FC = () => {
  return (
    <Wrapper>
      <TopBar/>
      <Content>
        <LeftMenu />
        <div>content</div>
      </Content>
    </Wrapper>
  );
}

export default MainPage;
