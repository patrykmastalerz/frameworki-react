import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';




const Wrapper = styled.section`
  background-color: ${Colors.white};
  width: 200px;

`;

const Profile: FC = () => {
  return (
    <Wrapper>
        profile
    </Wrapper>
  );
}

export default Profile;
