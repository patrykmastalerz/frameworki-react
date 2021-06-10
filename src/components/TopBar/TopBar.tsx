import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import ExpandedMenu from './ExpandedMenu';
import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { Link } from 'react-router-dom';

const Wrapper2 = styled(Wrapper)`
  padding: 4px;
  box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
`
const InnerWrapper = styled.div`
  /* width: 1200px; */
  width: 100%;
  padding: 5px 20px;
  background: ${Colors.white};
  display: flex;
  justify-content:space-between;
  align-items: center;
`
const CustomImg = styled.img`
	margin: 10px;
`;

const LogoImg = styled.img`
	width: 35px;
`;

const ImgBackground = styled.div<{showBg: boolean}>`
	${props => props.showBg && css`
		background: ${Colors.iconBackground};
		border-radius: 50%;
		margin-left: 5px;
	`}
`

const InputWrapper = styled.div`
	width: 500px;
	display: flex;
	justify-content:space-between;
	border: 1px solid ${Colors.grey};
	border-radius: 3px;
`;

const CustomInput = styled.input`
	width: 95%;
	border: 0px;
	text-align: center;

	&::placeholder {
		color: ${Colors.grey};
		font-weight: bold;
	}
`;

const RightIcons = styled.div`
	display: inline-flexbox;
	justify-content: center;
	align-items: center;
`

const MenuWrapper = styled.div`
	width: 200px;
	height: 30px;
	border: 1px solid ${Colors.grey};
	background-color: transparent;
	position: relative;
	margin-left: 30px;
`

const MenuSelectedOptionWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const MenuSelectedOption = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	color: ${Colors.greyLight};
`

const MenuIcon = styled.img`
	margin: 0px 10px 0px 5px;
`

const MenuArrowIcon = styled.img`
	margin-right: 10px;
	width: 10px;
	height: 6px;
`

const LeftMenu = styled.div`
	display: flex;
	align-items: center;
`
const CustomLink = styled(Link)`
 color: black;
 text-decoration: none;
 /* display: block; */
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;

`


const TopBar: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown /* closeDropdown */] = useDropdown();

	const menuHandler = () => {
		toggleDropdown();
	}
 
  return (
    <Wrapper2>
     	<InnerWrapper>
			<LeftMenu>
				<Link to="/">
					<LogoImg  src="./media/logo.png"/>
				
				</Link>
 
				<MenuWrapper ref={wrapperRef}  >
					<MenuSelectedOptionWrapper onClick={menuHandler}>
						<MenuSelectedOption>
							<MenuIcon src="./media/house.png" />
							Home
						</MenuSelectedOption>
		
						<MenuArrowIcon src="./media/arrow-down.png" />
					</MenuSelectedOptionWrapper>
					{dropdownOpen &&
					<ExpandedMenu/>
					}

					
				</MenuWrapper>
			</LeftMenu>

			<InputWrapper>
				<CustomInput placeholder="Search Legalcluster" type="text"/>
				<CustomImg src="./media/search.png" />
			</InputWrapper>
			<RightIcons>
				<CustomImg  src="./media/house.png"/>
				<ImgBackground showBg>
					<CustomImg  src="./media/comments.png"/>
				</ImgBackground>
				<ImgBackground showBg={false}>
					<CustomImg  src="./media/bell.png"/>
				</ImgBackground>
			</RightIcons>
     	</InnerWrapper>
    </Wrapper2>
  );
}

export default TopBar;