import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';




const Wrapper = styled.section`
  background-color: ${Colors.white};
  width: 1200px;
  margin-left: 10px;
  text-align: center;
  font-weight: bold;
  font-size: ${fontSize[24]};

`;

const NotFound: FC = () => {
  return (
    <Wrapper>
        Strona nieobsługiwana!
    </Wrapper>
  );
}

export default NotFound;
