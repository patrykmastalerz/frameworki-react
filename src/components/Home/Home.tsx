import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getComments } from "../../actions/commentActions";
import { getPhotos } from "../../actions/photoActions";
import { getPosts } from "../../actions/postActions";
import { getUsers } from "../../actions/usersActions";
import { IState } from "../../reducers";
import { IPhotoReducer } from "../../reducers/photoReducers";
import { IPostReducer } from "../../reducers/postReducers";
import { IUserReducer } from "../../reducers/userReducers";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import ResumeWork from "./ResumeWork";
import Workspace from "./Workspace";

const Wrapper = styled.section`
  max-width: 1000px;
  height: 100%;
  padding: 30px;
`;

const PublicationsWrapper = styled.div`
  height: 300px;
  width: 100%;
  background-color: yellow;
  display: flex;
  box-shadow: 0px 5px 8px -1px rgba(0, 0, 0, 0.08);
`;

const PublicationsImg = styled.img`
  height: 300px;
  min-width: 300px;
`;

const LatestPublicationsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: ${fontSize[18]};
  color: ${Colors.greyLight};
`;
const Publication = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
`;

const PublicationImg = styled.img`
  height: 60px;
  width: 60px;
`;
const PublicationDescriptionWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`;

const PublicationsDescription = styled.span`
  width: 100%;
  font-size: ${fontSize[14]};
`;

const PublicationsDetailsWrapper = styled.div`
  padding: 5px;
  font-size: ${fontSize[10]};
  display: flex;
  align-items: center;
`;

const ProfileAvatarImg = styled.img`
  width: 15px;
  height: 15px;
  margin: 0px 5px;
  border-radius: 50%;
  background-color: black;
`;

const UpdateDate = styled.span`
  color: ${Colors.grey};
`;

const UserName = styled.span`
  color: ${Colors.greyLight};
`;

const WorkspacesWrapper = styled.div``;

const CustomLink = styled(Link)`
  color: blue;
  text-decoration: none;
`;

const ResumeworkWrapper = styled.div``;

interface IPosts {
  postBody: string;
  userName: string;
  photoUrl: string;
  avatarUrl: string;
}

// type GetUsers = ReturnType<typeof getUsers>;
// type GetComments = ReturnType<typeof getComments>;
// type GetPhotos = ReturnType<typeof getPhotos>;
// type GetPosts = ReturnType<typeof getPosts>;




const Home: FC = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch<GetUsers>(getUsers());
  //   dispatch<GetComments>(getComments());
  //   dispatch<GetPhotos>(getPhotos());
  //   dispatch<GetPosts>(getPosts());
  // }, []);


  const { photoList } = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photos,
  }));

  const { postList } = useSelector<IState, IPostReducer>((state) => ({
    ...state.posts,
  }));

  const { usersList } = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));

  const [mergedComments, setMergedComments] = useState<IPosts[]>([]);

  useEffect(() => {
    setMergedComments(
      postList
        ?.map((p) => {
          const user = usersList?.find((u) => u.id === p.userId);
          const photo = photoList?.find((u) => u.id === p.id);
          const avatar = photoList?.find((u) => u.id === user?.id);

          return {
            postBody: p.body,
            userName: user?.name,
            photoUrl: photo?.url,
            avatarUrl: avatar?.url,
          } as IPosts;
        })
        .splice(0, 4),
    );
  }, [postList, usersList, photoList]);

  return (
    <Wrapper>
      <PublicationsWrapper>
        <PublicationsImg src={mergedComments[0]?.photoUrl} />
        <LatestPublicationsWrapper>
          <Header>Latest publications</Header>

          {mergedComments.slice(1, 4).map((item, index) => (
            <Publication key={index}>
              <PublicationImg src={item.photoUrl} />
              <PublicationDescriptionWrapper>
                <PublicationsDescription>
                  {item.postBody}
                </PublicationsDescription>

                <PublicationsDetailsWrapper>
                  <UpdateDate>7 jan 2020</UpdateDate>
                  <ProfileAvatarImg src={item.avatarUrl}/>
                  <UserName>{item.userName}</UserName>
                </PublicationsDetailsWrapper>
              </PublicationDescriptionWrapper>
            </Publication>
          ))}

          <CustomLink to="/NotFound">See more publications</CustomLink>
        </LatestPublicationsWrapper>
      </PublicationsWrapper>

      <WorkspacesWrapper>
        <Workspace />
      </WorkspacesWrapper>

      <ResumeworkWrapper>
        <ResumeWork />
      </ResumeworkWrapper>
    </Wrapper>
  );
};

export default Home;
