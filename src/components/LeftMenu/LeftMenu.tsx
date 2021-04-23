import React, { FC } from 'react';
import styled from 'styled-components';

import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {ColumnWrapper} from '../../styledHelpers/ColumnWrapper';



const Wrapper = styled(ColumnWrapper)`
  width: 200px;
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
	padding: 10px;

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




const LeftMenu: FC = () => {
  return (
    <Wrapper>
      	<InnerWrapper>
				<UserProfileWrapper>
					<UserImg/>
					<UserName>
						Humberta Swift
					</UserName>
					<UserDescription>
						Job title - Company
					</UserDescription>
				</UserProfileWrapper>
				<UserOptionsWrapper>
					<UserOptionWrapper>
						<CustomImg src="./media/network.png"/>
						<UserOptionDescription>
							Your network
						</UserOptionDescription>
						<ImgBorder>
							<CustomImg src="./media/user-plus.png"/>
						</ImgBorder>
					</UserOptionWrapper>
					<UserOptionWrapper>
						<CustomImg src="./media/publications.png"/>
						<UserOptionDescription>
							Your network
						</UserOptionDescription>
						<ImgBorder>
							<CustomImg src="./media/plus.png"/>
						</ImgBorder>
					</UserOptionWrapper>
				</UserOptionsWrapper>
      	</InnerWrapper>
			<OptionsWrapper>

				<OptionWrapper>
					<OptionImg src="./media/publications.png"/>
					<OptionDescription>
						Publications
					</OptionDescription>
				</OptionWrapper>

				<OptionWrapper>
					<OptionImg src="./media/ecosystem.png"/>
					<OptionDescription>
						Ecosystems
					</OptionDescription>
				</OptionWrapper>
				
				<OptionWrapper>
					<OptionImg src="./media/entities2.png"/>
					<OptionDescription>
						Entities
					</OptionDescription>
				</OptionWrapper>
      	</OptionsWrapper>
    </Wrapper>
  );
}

export default LeftMenu;
