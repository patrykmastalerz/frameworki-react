import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';




const Wrapper = styled.section`
  background-color: ${Colors.white};
  width: 200px;
  position: absolute;
  top: 100%;
  left: -1px;
  border: 1px solid ${Colors.grey};

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 0px 5px;
    height: 35px;
    display: flex;
    align-items: center;
    font-size: ${fontSize[14]};
    font-weight: bold;
    /* background-color: red; */
  }

`;

const Icon = styled.img`
  margin: 0px 10px 0px 5px;
  width: 20px;
`;

const FilterInput = styled.input`
  width: 150px;
  padding: 5px;
  display: block;
  margin: 3px auto;
  border: 1px solid ${Colors.grey};

  &::placeholder {
		color: ${Colors.grey};
		font-weight: bold;
	}
`;

const Header = styled.span`
  display: block;
  padding: 5px;
  font-size: ${fontSize[12]};
  color: ${Colors.greyLight};
  font-weight: bold;
`;

const UserAvatar = styled.div`
  border-radius: 50px;
  margin: 0px 10px 0px 5px;
  background-color: blue;
  width: 30px;
  height: 30px;
`;

const Logout = styled.button`
  background-color: transparent;
  width: 100%;
  height: 30px;
  color: ${Colors.greyLight};
  border: 0px;
  border-top: 1px solid ${Colors.grey};
`;

const AccountWrapper = styled.div`
  border-top: 1px solid ${Colors.grey};
`;


const ExpandedMenu: FC = () => {
  return (
    <Wrapper>
        <FilterInput placeholder="Filter..."/>
        <Header>Platform</Header>
        <ul>
            <li>
                <Icon src="./media/house.png" />
                <span>Home</span>
            </li>
            <li>
              <Icon src="./media/publications.png" />
              Publications
            </li>
            <li>
              <Icon src="./media/people.png" />
              People
            </li>
            <li>
              <Icon src="./media/entities.png" />
              Entities
            </li>
            <li>
              <Icon src="./media/administration.png" />
              Administration
            </li>
        </ul>
        <Header>Workspaces</Header>
        <ul>
            <li>
            <Icon src="./media/entities.png" />
              Client contract
            </li>
            <li>
              <Icon src="./media/entities.png" />
              Supplier contract
            </li>
            <li>
              <Icon src="./media/entities2.png" />
              Corporate
            </li>
            <li>
              <Icon src="./media/entities2.png" />
              Group norms
            </li>
            <li>
              <Icon src="./media/entities2.png" />
              Real estate contracts
            </li>
        </ul>
        <AccountWrapper>
          <Header>Account</Header>
          <ul>
              <li>
                <UserAvatar  />
                Jakies imie
              </li>
              <li>
                <Icon src="./media/privacy.png" />
                Privacy
              </li>
              <li>
                <Icon src="./media/settings.png" />
                Settings
              </li>
          </ul>
        </AccountWrapper>
        <Logout>
          <Icon src="./media/logout.png" /> 
          Logout 
        </Logout>
    </Wrapper>
  );
}

export default ExpandedMenu;
