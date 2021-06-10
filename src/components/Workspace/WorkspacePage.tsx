import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import ResumeWork from '../Home/ResumeWork';


const WorkspacePage: FC = (props) => {

const Wrapper = styled.div`
box-sizing: border-box;
    max-width: 1200px;
    margin: 0px 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
`;

const HeaderWrapper = styled.div`
    width: 95%;
    height: 300px;
    background-color: yellow;
    align-items: center;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
`;

const HeaderIMG = styled.div`
    min-width: 100%;
    background-color: black;
    min-height: 60%;

`;

const HeaderDetailsWrapper = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    background-color: white;
    align-items: center;
`;

const HeaderDetailsIcon = styled.img`
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    margin: 10px;
`;

const HeaderDetailsDescriptionWrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
    display: flex;
    padding: 20px;
    flex-direction: column;
`;

const HeaderDetailsTitle = styled.span`
    font-size: ${fontSize[22]};
    margin-bottom: 10px;
    font-weight: bold;
`;

const StartOnWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    background-color: ${Colors.white};
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px;
    box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
`;

const StartOnTitleWrapper = styled.div`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    color: ${Colors.greyLight};
    

`;

const StartOnItemsWrapper = styled.div`
/* box-sizing: border-box; */
    width: 100%;
    height: 100%;
    /* background-color: orange; */
    align-items: center;
    justify-content: space-between;
    display: flex;
    /* color: ${Colors.greyLight}; */
`;

const StartOnItem = styled.div`
box-sizing: border-box; 
    width: 300px;
    height: 100%;
    background-color: white;
    padding: 10px;
    border: 1px solid ${Colors.grey};
    display: flex;
    flex-direction: column;
 
    /* color: ${Colors.greyLight}; */
`;

const StartOnItemIcon = styled.img`
    width: 50px;
    height: 50px;
`;

const StartOnItemTitle = styled.span`
    font-weight: bold;
    font-size: ${fontSize[22]};
    margin: 10px 0;
 
    /* color: ${Colors.greyLight}; */
`;

const StartOnItemDescription = styled.span`

 
    /* color: ${Colors.greyLight}; */
`;


///

const UpdatesWrapper = styled.div`
  /* background-color: grey; */
  width: 100%;

`;

const TopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
/* background-color: yellow; */
`

const FirstBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    width: 100%;
    /* background-color: green; */
`

const TopBarItems = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    /* background-color: pink; */
    width: 100%;
    padding: 5px;
`

const TopBarItemIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 5px;
`;

const TopBarItem = styled.div<{color: string}>`
    display: flex;
    align-items: center;
    padding: 5px 13px;
    min-height: 15px;
    background-color: ${props => props.color};
    border: 1px solid ${Colors.grey};
    font-size: ${fontSize[12]};
    margin-right: 10px;
`

const Header = styled.h1`
    padding: 15px;
    font-weight: bold;
    font-size: ${fontSize[18]};
    color: ${Colors.greyLight};
    
`

const InputWrapper = styled.div`
	width: 200px;
    height: 40px;
	display: flex;
	justify-content:space-between;
	border: 1px solid ${Colors.grey};
    background-color: white;
`;

const RightBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const FilterInput = styled.input`
	width: 95%;
	border: 0px;
	text-align: center;

	&::placeholder {
		color: ${Colors.grey};
		font-weight: bold;
	}
`;

const CustomImg = styled.img`
	margin: 10px;
`;

const FollowedWrapper = styled.button`
    width: 120px;
    height: 40px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0px;
    margin: 5px;
`

const FollowIcon = styled.img`
`

const MenuArrowIcon = styled.img`
	width: 10px;
	height: 6px;
`

const FollowText = styled.span`
    color: blue;
    font-weight: bold;
`

const ResumeWrapper = styled.div`
    padding: 10px 20px;
    min-height: 100px;
    background-color: ${Colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
    margin-bottom: 10px;
`
const ResumeTitle = styled.span`
    font-size: ${fontSize[20]};
    font-weight: bold;
    color: blue;
`

const ResumeDescription = styled.span`
    font-size: ${fontSize[18]};
    color: ${Colors.greyLight};
`

const ResumeDetails = styled.div`
    display: flex;
    align-items: center;
    font-size: ${fontSize[14]};
`

const DetailsIcon = styled.img`
    width: 15px;
`

const SubWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 5px;
`
const SubText = styled.span`
    color: ${Colors.greyLight};
`

const UpdateDate = styled.span`
    color: ${Colors.grey}; 
`





 
  
    return (
      <>
        <Wrapper>
            <HeaderWrapper>
                <HeaderIMG/>
                <HeaderDetailsWrapper>
                    <HeaderDetailsIcon src="./media/entities.svg"/>
                    <HeaderDetailsDescriptionWrapper>
                        <HeaderDetailsTitle>Title</HeaderDetailsTitle>
                        <span>
                            Workspace purpose and a bit of context. This much needed description is here to remaind people where they are, if they are new or have poor memory. Some more text about nothing.
                        </span>
                    </HeaderDetailsDescriptionWrapper>
                </HeaderDetailsWrapper>
            </HeaderWrapper>
            
            <StartOnWrapper>
                <StartOnTitleWrapper>
                    <span>Start working on corporate matters</span>
                    <span>Hide</span>
                </StartOnTitleWrapper>
                <StartOnItemsWrapper>
                    <StartOnItem>
                        <StartOnItemIcon src="./media/entities.svg"/>
                        <StartOnItemTitle>
                            Explore your entities
                        </StartOnItemTitle>
                        <StartOnItemDescription>
                            Take a few minutes to look at the most important elelemnts and specificites of your entitites
                        </StartOnItemDescription>
                    </StartOnItem>

                    <StartOnItem>
                        <StartOnItemIcon src="./media/network.svg"/>
                            <StartOnItemTitle>
                            Structure the ownership
                        </StartOnItemTitle>
                        <StartOnItemDescription>
                            Get a clear view of the ownership by looking at the letations between individuals and entities
                        </StartOnItemDescription>
                    </StartOnItem>

                    <StartOnItem>
                        <StartOnItemIcon src="./media/people.svg"/>
                            <StartOnItemTitle>
                            Define the calendar
                        </StartOnItemTitle>
                        <StartOnItemDescription>
                            Prepare future events by creating detailed plans around the life of your entity
                        </StartOnItemDescription>
                    </StartOnItem>
                </StartOnItemsWrapper>

            </StartOnWrapper>
        <UpdatesWrapper>
         
                <TopBar>
                    <FirstBar>
                        <Header>Latest updates</Header>
                        <RightBar>
                            <InputWrapper>
                                <FilterInput placeholder="Search Legalcluster" type="text"/>
                                <CustomImg src="./media/search.png" />
                            </InputWrapper>
                            <FollowedWrapper>
                                <FollowIcon src="./media/entities.png" />
                                <FollowText>Followed</FollowText>
                                <MenuArrowIcon src="./media/arrow-down.png" />
                            </FollowedWrapper>
                        </RightBar>
                    </FirstBar>
                    <TopBarItems>
                        <TopBarItem color="white">
                            All
                        </TopBarItem>

                        <TopBarItem color="green">
                            <TopBarItemIcon src="./media/entities.png" />
                            SAS
                        </TopBarItem>

                        <TopBarItem color="whitesmoke">
                            <TopBarItemIcon src="./media/entities.png" />
                            SARP
                        </TopBarItem>

                        <TopBarItem color="darkgrey">
                            <TopBarItemIcon src="./media/comments.png" />
                            Secondary business
                        </TopBarItem>

                        <TopBarItem color="grey">
                            <TopBarItemIcon src="./media/house2.png" />
                            Communities
                        </TopBarItem>

                        <TopBarItem color="white">
                            <TopBarItemIcon src="./media/network.png" />
                            POA
                        </TopBarItem>

                        <TopBarItem color="white">
                            <TopBarItemIcon src="./media/network.png" />
                            Survey
                        </TopBarItem>

                        <TopBarItem color="white">
                            ...
                        </TopBarItem>

                    </TopBarItems>
                   
                </TopBar>

                <ResumeWrapper>
                    <ResumeTitle>
                        Example title
                    </ResumeTitle>
                    <ResumeDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae blanditiis nisi explicabo praesentium quis. Expedita, magni nostrum a, quaerat ad explicabo quidem aliquid pariatur veniam, officiis necessitatibus est sunt.
                    </ResumeDescription>
                    <ResumeDetails>
                        <SubWrapper>
                            <DetailsIcon src="./media/entities.png"/>
                            <SubText>Subsid. corp.</SubText>
                        </SubWrapper>

                        <SubWrapper>
                            <DetailsIcon src="./media/entities.png"/>
                            <SubText>Client contract</SubText>
                        </SubWrapper>

                        <UpdateDate>
                            Updates 3 days ago by John Doe
                        </UpdateDate>
                    </ResumeDetails>
                </ResumeWrapper>


            </UpdatesWrapper>
        </Wrapper>
      </>
    );
  }
  
  export default WorkspacePage;
  