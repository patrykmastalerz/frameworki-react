import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';




const Wrapper = styled.section`
  background-color: ${Colors.white};
  width: 200px;

`;

const NotFound: FC = () => {
  return (
    <Wrapper>
        Notfound
    </Wrapper>
  );
}

export default NotFound;
