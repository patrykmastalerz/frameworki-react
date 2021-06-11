import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import { 
	Link
  } from "react-router-dom"



const Wrapper = styled.section`
  background-color: transparent;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
    display: flex;
    overflow-x: scroll;
    /* max-width: 1000px; */
    height: 100%;
`

const Header = styled.h1`
    padding: 15px;
    font-weight: bold;
    font-size: ${fontSize[18]};
    color: ${Colors.greyLight};
    
`

const WorkspaceWrapper = styled.div`
    min-width: 320px;
    background-color: ${Colors.white};;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
    margin-right: 10px;
`
const WorkspaceImg = styled.div`
    min-width: 100%;
    background-color: black;
    min-height: 40%;
`

const WorkspaceHeaderWrapper = styled.div`
    /* background-color: blue; */
    display: flex;
    min-height: 30%;
    /* padding-left: 80px; */
    position: relative;
`

const WorkspaceHeaderImg = styled.img`
    height: 80px;
    width: 80px;
    background-color: white;
    position: relative;
    bottom: 30px;
    margin-right: 10px;
    left: 10px;
    padding: 5px;
    box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
`

const WorkspaceDetailsWrapper = styled.div`
    height: 100%;
    padding: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const WorkspaceIcon = styled.img`
    /* height: 80px; */
    padding: 5px;
    background-color: white;
    margin: 0 5px;
`
const DetailWrapper = styled.div`
    display: flex;
    align-items: center;
    color: ${Colors.greyLight};
`

const UpdateData = styled.span`
    font-size: ${fontSize[12]};
    color: ${Colors.greyLight};
`

const CustomLink = styled(Link)`
 color: black;
 text-decoration: none;
  display: block;
`


const Workspace: FC = () => {
    const workspaces = [
        {
            title: "Client contract",
            users: "150",
            img: "./media/entities.svg"
            
        },
        {
            title: "Supplier contract",
            users: "50",
            img: "./media/network.svg"
        },
        {
            title: "Corporate",
            users: "20",
            img: "./media/comments.svg"
        },
        {
            title: "Group norms",
            users: "410",
            img: "./media/privacy.svg"
        },
        {
            title: "Real estate contracts",
            users: "10",
            img: "./media/entities2.svg"
        }
      ];



  return (
    <Wrapper>
        <Header>Workspaces</Header>
        <InnerWrapper>

            {workspaces.map((workspace, index) => (
                <CustomLink to={
                        {   pathname: '/workspace',
                            state: {
                                title: workspace.title,
                                img: workspace.img
                            } 
                        }
                    }>
                    <WorkspaceWrapper key={index}>
                        <WorkspaceImg/>
                        <WorkspaceHeaderWrapper>
                            <WorkspaceHeaderImg src={workspace.img}/>
                            <span>{workspace.title}</span>
                        </WorkspaceHeaderWrapper>
                        <WorkspaceDetailsWrapper>
                            <DetailWrapper>
                                <WorkspaceIcon src="./media/network.png"/>
                                <span>
                                    Contract
                                </span>
                                <WorkspaceIcon src="./media/network.png"/>
                                <span>
                                    {workspace.users} users
                                </span>
                            </DetailWrapper>
                            <UpdateData>
                                Last updated 2 days ago
                            </UpdateData>
                        </WorkspaceDetailsWrapper>
                    </WorkspaceWrapper>
                </CustomLink>     
            ))}
            
           
        </InnerWrapper>
    </Wrapper>
  );
}

export default Workspace;

{/* <WorkspaceWrapper>
<WorkspaceImg/>
<WorkspaceHeaderWrapper>
    <WorkspaceHeaderImg/>
    <span>Client Contract</span>
</WorkspaceHeaderWrapper>
<WorkspaceDetailsWrapper>
    <DetailWrapper>
        <WorkspaceIcon src="./media/network.png"/>
        <span>
            Contract
        </span>
        <WorkspaceIcon src="./media/network.png"/>
        <span>
            150 users
        </span>
    </DetailWrapper>
    <UpdateData>
        Last updated 2 days ago
    </UpdateData>
</WorkspaceDetailsWrapper>
</WorkspaceWrapper>

<WorkspaceWrapper>
<WorkspaceImg/>
<WorkspaceHeaderWrapper>
    <WorkspaceHeaderImg/>
    <span>Client Contract</span>
</WorkspaceHeaderWrapper>
<WorkspaceDetailsWrapper>
    <DetailWrapper>
        <WorkspaceIcon src="./media/network.png"/>
        <span>
            Contract
        </span>
        <WorkspaceIcon src="./media/network.png"/>
        <span>
            150 users
        </span>
    </DetailWrapper>
    <UpdateData>
        Last updated 2 days ago
    </UpdateData>
</WorkspaceDetailsWrapper>
</WorkspaceWrapper>

<WorkspaceWrapper>
<WorkspaceImg/>
<WorkspaceHeaderWrapper>
    <WorkspaceHeaderImg/>
    <span>Client Contract</span>
</WorkspaceHeaderWrapper>
<WorkspaceDetailsWrapper>
    <DetailWrapper>
        <WorkspaceIcon src="./media/network.png"/>
        <span>
            Contract
        </span>
        <WorkspaceIcon src="./media/network.png"/>
        <span>
            150 users
        </span>
    </DetailWrapper>
    <UpdateData>
        Last updated 2 days ago
    </UpdateData>
</WorkspaceDetailsWrapper>
</WorkspaceWrapper>

<WorkspaceWrapper>
<WorkspaceImg/>
<WorkspaceHeaderWrapper>
    <WorkspaceHeaderImg/>
    <span>Client Contract</span>
</WorkspaceHeaderWrapper>
<WorkspaceDetailsWrapper>
    <DetailWrapper>
        <WorkspaceIcon src="./media/network.png"/>
        <span>
            Contract
        </span>
        <WorkspaceIcon src="./media/network.png"/>
        <span>
            150 users
        </span>
    </DetailWrapper>
    <UpdateData>
        Last updated 2 days ago
    </UpdateData>
</WorkspaceDetailsWrapper>
</WorkspaceWrapper> */}