import React, { FC, useState } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import Workspace from './Workspace';
import ResumeWork from './ResumeWork';
import ReactPaginate from 'react-paginate';

import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IUserReducer } from '../../reducers/userReducers';
import { IPostReducer } from '../../reducers/postReducers';
import { ICommentReducer } from '../../reducers/commentReducers';
import { ISingleComment } from '../../entities/ISingleComment';


const Wrapper = styled.section`
  /* background-color: ${Colors.white}; */
  /* background-color: red; */
  max-width: 1000px;
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

const PublicationsImg = styled.img`
  height: 300px;
  min-width: 300px;
  /* background-color: black; */
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

const PublicationImg = styled.img`
  height: 60px;
  width: 60px;
  /* background-color: black; */
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

interface IPosts {
  postBody: string, 
  userName: string,
  photoUrl: string
}


const Home: FC = () => {

  // const [currentPage, setCurrentPage] = useState<number>(0);

  // const comments = commentList?.slice(currentPage, currentPage + 10);
  
  // const handlePageClick = (data: any) => {
  //     const selected = data.selected;
  //     setCurrentPage(selected);
  // }

  const { photoList } = useSelector<IState, IPhotoReducer>(state => ({
    ...state.photos
  }));

  const { postList } = useSelector<IState, IPostReducer>(state => ({
    ...state.posts
  }));
  
  const { usersList } = useSelector<IState, IUserReducer>(state => ({
    ...state.users
  }));
  
  // const { commentList } = useSelector<IState, ICommentReducer>(state => ({
  //   ...state.comments
  // }));

  const posts = postList?.map( p => {
    const user = usersList?.find(u => u.id === p.userId);
    const photo = photoList?.find(u => u.id === p.id);

    // usersList?.find( u => {
    //   console.log("user id" + u.id);
    //   console.log(p);
    // });

    // console.log(user?.id)
    return {
      postBody: p.body, 
      userName: user?.name,
      photoUrl: photo?.url
    } as IPosts
  }).splice(0,4);


  return (
    <Wrapper>
      {console.log(posts)}
        <PublicationsWrapper>
          {/* czemu tu zwraca undefined */}
          <PublicationsImg src={posts[0]?.photoUrl}/>
          <LatestPublicationsWrapper>
            <Header>Latest publications</Header>

            {posts.slice(1,4).map( (item, index) => (
              <Publication key={index}>
                <PublicationImg src={item.photoUrl}/>
                  <PublicationDescriptionWrapper>
                    <PublicationsDescription>
                      {item.postBody}
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem voluptates accusantium. Debitis in nobis assumenda asperiores ipsa veritatis neque eum quis, id fugiat consectetur sit voluptatibus exercitationem excepturi eos. */}
                    </PublicationsDescription>

                    <PublicationsDetailsWrapper>
                      <UpdateDate>
                      7 jan 2020 
                      </UpdateDate>
                      <ProfileAvatarImg/>
                      <UserName>
                        {item.userName}
                        {/* John Doe */}

                      </UserName>
                    </PublicationsDetailsWrapper>
                  </PublicationDescriptionWrapper>
              </Publication>

            ))}
 
            <CustomLink to="/NotFound">See more publications</CustomLink>
          </LatestPublicationsWrapper>
        </PublicationsWrapper>

        <WorkspacesWrapper>
          <Workspace/>
        </WorkspacesWrapper>

        <ResumeworkWrapper>
          {/* jak przekazac commets? */}
            <ResumeWork />
        </ResumeworkWrapper>

        {/* {console.log(commentList)} */}
        
        
    </Wrapper>
  );
}

export default Home;
