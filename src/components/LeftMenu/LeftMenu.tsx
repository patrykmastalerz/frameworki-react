import React, { FC } from 'react';
import styled from 'styled-components';

import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {ColumnWrapper} from '../../styledHelpers/ColumnWrapper';
import { 
	Link
  } from "react-router-dom"


const Wrapper = styled(ColumnWrapper)`
  min-width: 250px;
`;

const InnerWrapper = styled(ColumnWrapper)`
  width: 100%;
  background: ${Colors.white};
  justify-content: center;
  box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
`;

const CustomImg = styled.img`
`

const UserImg = styled.div`
  width: 60px;
  height: 60px;
  background: blue;
	border-radius: 50%;

`;

const UserName = styled.p`
  color: blue;
  margin-top: 10px;
`;

const UserDescription = styled.p`
  color: ${Colors.greyLight};
  font-size: ${fontSize[12]};
  margin: 10px 0px;
`;

const UserOptionsWrapper = styled(ColumnWrapper)`

	width: 100%;
  	border-top: 1px solid ${Colors.grey};
  	font-size: ${fontSize[12]};
  	margin: 10px 0px;

`;

const UserOptionWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
    color: ${Colors.black};
	padding: 8px;

`;

const UserOptionDescription = styled.p`
   color: ${Colors.black};
	font-size: ${fontSize[16]};
`;

const ImgBorder = styled.div`
	padding: 4px 10px;
	border-radius: 5px;
	margin-left: 5px;
	border: 1px solid ${Colors.black};
`

const OptionWrapper = styled.div`
	display: flex;
	align-items: center;

	width: 80%;
    color: ${Colors.black};
	padding: 10px;
`
const OptionImg = styled.img`
	width: 25px;
	margin-right: 15px;
`
const OptionDescription = styled.p`
	color: ${Colors.greyLight};
`

const UserProfileWrapper = styled(ColumnWrapper)`
	padding: 10px;
`

const OptionsWrapper = styled(ColumnWrapper)`
	justify-content: center;
	width: 100%;
	background-color: transparent;
`;

const CustomLink = styled(Link)`
 color: black;
 text-decoration: none;
 width: 100%;
 height: 30px;
 display: flex;
 align-items: center;
  /* background-color: blue; */
`

const UserLink = styled(Link)`


  /* background-color: blue; */
`


const LeftMenu: FC = () => {
  return (
    <Wrapper>
      	<InnerWrapper>
				<UserProfileWrapper>
				<UserLink to="/profile">

					<UserImg/>
				</UserLink>

					<UserName>
						Humberta Swift
					</UserName>
					<UserDescription>
						Job title - Company
					</UserDescription>
				</UserProfileWrapper>
				<UserOptionsWrapper>
					<UserOptionWrapper>
						<CustomLink to="/NotFound">
							<CustomImg src="./media/network.png"/>
							<UserOptionDescription>
								Your network
							</UserOptionDescription>
							<ImgBorder>
								<CustomImg src="./media/user-plus.png"/>
							</ImgBorder>
						</CustomLink>
					</UserOptionWrapper>
					<UserOptionWrapper>
						<CustomLink to="/NotFound">
							<CustomImg src="./media/publications.png"/>
							<UserOptionDescription>
								Your network
							</UserOptionDescription>
							<ImgBorder>
								<CustomImg src="./media/plus.png"/>
							</ImgBorder>
						</CustomLink>
					</UserOptionWrapper>
				</UserOptionsWrapper>
      	</InnerWrapper>
			<OptionsWrapper>

				<OptionWrapper>
					<CustomLink to="/">
						<OptionImg src="./media/publications.png"/>
							<OptionDescription>
									Publications
							</OptionDescription>
					</CustomLink>
				</OptionWrapper>

				<OptionWrapper>
					<CustomLink to="/NotFound">
						<OptionImg src="./media/ecosystem.png"/>
						<OptionDescription>
								Ecosystems
						</OptionDescription>
					</CustomLink>	
				</OptionWrapper>
				
				<OptionWrapper>
					<CustomLink to="/entities">
						<OptionImg src="./media/entities2.png"/>
						<OptionDescription>
								Entities
						</OptionDescription>
					</CustomLink>
				</OptionWrapper>
      	</OptionsWrapper>
    </Wrapper>
  );
}

export default LeftMenu;
