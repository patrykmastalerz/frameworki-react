import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import { 
  Link
} from "react-router-dom"
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUserReducer } from '../../reducers/userReducers';



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
  };

  li {
    height: 35px;
    /* display: flex; */
    /* align-items: center; */
    font-size: ${fontSize[14]};
    font-weight: bold;
    /* background-color: yellow; */
  };

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

const CustomLink = styled(Link)`
 color: black;
 text-decoration: none;
 /* display: block; */
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;

`


const ExpandedMenu: FC = () => {
  const { usersList } = useSelector<IState, IUserReducer>(state => ({
    ...state.users
  }));


  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  return (
    <Wrapper>
        {console.log(usersList)}
        <FilterInput placeholder="Filter..." value={inputText} onChange={inputHandler}/>
        <Header>Platform</Header>
        <ul>
            {
              'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
              <li>
                <CustomLink to="/">
                  <Icon src="./media/house.png" />
                    Home
                </CustomLink>
              </li>
            }

            {
              'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
              <li>
                <CustomLink to="/NotFound">
                  <Icon src="./media/publications.png" />
                  Publications
                </CustomLink>
              </li>
            }

            {
              'People'.toLowerCase().includes(inputText.toLowerCase()) &&
              <li>
              <CustomLink to="/NotFound">
                  <Icon src="./media/people.png" />
                  People
                </CustomLink>
              </li>
            }

            {
              'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
              <li>
                <CustomLink to="/entities">
                  <Icon src="./media/entities.png" />
                  Entities
                </CustomLink>
              </li>
            }     

            {
              'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
            <li>
              <CustomLink to="/NotFound">
                <Icon src="./media/administration.png" />
                Administration
              </CustomLink>
            </li>
            }
        </ul>
        <Header>Workspaces</Header>
        <ul>

            {
              'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
              <li>
                <CustomLink to="/NotFound">
                  <Icon src="./media/entities.png" />
                  Client contract
                </CustomLink>
              </li>
            }

            {
              'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&      
            <li>
              <CustomLink to="/NotFound">
                <Icon src="./media/entities.png" />
                Supplier contract
              </CustomLink>
            </li>
            }

            {
              'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
              <li>
                <CustomLink to="/NotFound">
                  <Icon src="./media/entities2.png" />
                  Corporate
                </CustomLink>
              </li>
            }

            {
              'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
              <li>
                <CustomLink to="/NotFound">
                  <Icon src="./media/entities2.png" />
                  Group norms
                </CustomLink>
              </li>
            }

            {
              'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
              <li>
                <CustomLink to="/NotFound">
                  <Icon src="./media/entities2.png" />
                  Real estate contracts
                </CustomLink>
              </li>
            }
        </ul>
        <AccountWrapper>
          <Header>Account</Header>
          <ul>
              <li>
                <CustomLink to="/NotFound">
                  <UserAvatar  />
                  {/* {usersList[0].name} */}
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/NotFound">
                  <Icon src="./media/privacy.png" />
                  Privacy
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/NotFound">
                  <Icon src="./media/settings.png" />
                  Settings
                </CustomLink>
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
