import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';




const Wrapper = styled.section`
  background-color: ${Colors.white};

`;

const Entities: FC = () => {
  return (
    <Wrapper>
        entity
    </Wrapper>
  );
}

export default Entities;
