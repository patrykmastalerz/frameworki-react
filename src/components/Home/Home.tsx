import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import Workspace from './Workspace';
import ResumeWork from './ResumeWork';

import { Link } from "react-router-dom"


const Wrapper = styled.section`
  /* background-color: ${Colors.white}; */
  /* background-color: red; */
  width: 100%;
  height: 100%;
  padding: 30px;
  
`;

const PublicationsWrapper = styled.div`
  height: 300px;
  width: 100%;
  background-color: yellow;
  display: flex;
  box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
`

const PublicationsImg = styled.div`
  height: 300px;
  min-width: 300px;
  background-color: black;
`

const LatestPublicationsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.h1`
    font-weight: bold;
    font-size: ${fontSize[18]};
    color: ${Colors.greyLight};
    
`
const Publication = styled.div`
  height: 60px;
  width: 100%;
  /* background-color: pink; */
  display: flex;
`

const PublicationImg = styled.div`
  height: 60px;
  width: 60px;
  background-color: black;
`
const PublicationDescriptionWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  /* background-color: grey; */
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  padding: 5px;
`

const PublicationsDescription = styled.span`
  /* background-color: blue; */
  width: 100%;
  font-size: ${fontSize[14]};
`

const PublicationsDetailsWrapper = styled.div`
  /* background-color: green; */
  padding: 5px;
  font-size: ${fontSize[10]};
  display: flex;
  align-items: center;
`  

const ProfileAvatarImg = styled.div`
  width: 15px;
  height: 15px;
  margin: 0px 5px;
  border-radius: 50%;
  background-color: black;
`

const UpdateDate = styled.span`
  color: ${Colors.grey};
`

const UserName = styled.span`
color: ${Colors.greyLight};
`

const WorkspacesWrapper = styled.div`
  /* background-color: yellow; */
`

const CustomLink = styled(Link)`
 color: blue;
 text-decoration: none;

`

const ResumeworkWrapper = styled.div`
`


const Home: FC = () => {
  return (
    <Wrapper>
        <PublicationsWrapper>
          <PublicationsImg/>
          <LatestPublicationsWrapper>
            <Header>Latest publications</Header>
            <Publication>
              <PublicationImg/>
                <PublicationDescriptionWrapper>
                  <PublicationsDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem voluptates accusantium. Debitis in nobis assumenda asperiores ipsa veritatis neque eum quis, id fugiat consectetur sit voluptatibus exercitationem excepturi eos.
                  </PublicationsDescription>

                  <PublicationsDetailsWrapper>
                    <UpdateDate>
                    7 jan 2020 
                    </UpdateDate>
                    <ProfileAvatarImg/>
                    <UserName>
                      John Doe

                    </UserName>
                  </PublicationsDetailsWrapper>
                </PublicationDescriptionWrapper>
            </Publication>

            <Publication>
              <PublicationImg/>
                <PublicationDescriptionWrapper>
                  <PublicationsDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem voluptates accusantium. Debitis in nobis assumenda asperiores ipsa veritatis neque eum quis, id fugiat consectetur sit voluptatibus exercitationem excepturi eos.
                  </PublicationsDescription>

                  <PublicationsDetailsWrapper>
                    <UpdateDate>
                    7 jan 2020 
                    </UpdateDate>
                    <ProfileAvatarImg/>
                    <UserName>
                      John Doe

                    </UserName>
                  </PublicationsDetailsWrapper>
                </PublicationDescriptionWrapper>
            </Publication>

            <Publication>
              <PublicationImg/>
                <PublicationDescriptionWrapper>
                  <PublicationsDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem voluptates accusantium. Debitis in nobis assumenda asperiores ipsa veritatis neque eum quis, id fugiat consectetur sit voluptatibus exercitationem excepturi eos.
                  </PublicationsDescription>

                  <PublicationsDetailsWrapper>
                    <UpdateDate>
                    7 jan 2020 
                    </UpdateDate>
                    <ProfileAvatarImg/>
                    <UserName>
                      John Doe
                    </UserName>
                  </PublicationsDetailsWrapper>
                </PublicationDescriptionWrapper>
            </Publication>
            <CustomLink to="/NotFound">See more publications</CustomLink>
          </LatestPublicationsWrapper>
        </PublicationsWrapper>

        <WorkspacesWrapper>
          <Workspace/>
        </WorkspacesWrapper>

        <ResumeworkWrapper>
          <ResumeWork/>
        </ResumeworkWrapper>

    </Wrapper>
  );
}

export default Home;
