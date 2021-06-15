import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IPhotoReducer } from "../../reducers/photoReducers";
import { IUserReducer } from "../../reducers/userReducers";
import { Colors } from "../../styledHelpers/Colors";
import { ColumnWrapper } from "../../styledHelpers/ColumnWrapper";
import { fontSize } from "../../styledHelpers/FontSizes";

const Wrapper = styled(ColumnWrapper)`
  min-width: 250px;
`;

const InnerWrapper = styled(ColumnWrapper)`
  width: 100%;
  background: ${Colors.white};
  justify-content: center;
  box-shadow: 0px 5px 8px -1px rgba(0, 0, 0, 0.08);
`;

const CustomImg = styled.img``;

const UserImg = styled.img`
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
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  color: ${Colors.black};
  padding: 10px;
`;
const OptionImg = styled.img`
  width: 25px;
  margin-right: 15px;
`;
const OptionDescription = styled.p`
  color: ${Colors.greyLight};
`;

const UserProfileWrapper = styled(ColumnWrapper)`
  padding: 10px;
`;

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
`;

const UserLink = styled(Link)``;

interface UserAvatar {
  avatar: string;

}

const LeftMenu: FC = () => {
  const { user, usersList } = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));

  const { photoList } = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photos,
  }));

  const loggedUser = useMemo(
    () =>
      usersList
        ?.map((p) => {
          const photo = photoList?.find((u) => u.id === p.id);

          return {
            avatar: photo?.url,
          } as UserAvatar;
        })
        .splice(0, 1),
    [usersList]
  );

  return (
    <Wrapper>
      <InnerWrapper>
        <UserProfileWrapper>
          <UserLink to="/profile">
            <UserImg src={loggedUser[0]?.avatar}/>
          </UserLink>

          <UserName>{user}</UserName>
          <UserDescription>Job title - Company</UserDescription>
        </UserProfileWrapper>
        <UserOptionsWrapper>
          <UserOptionWrapper>
            <CustomLink to="/NotFound">
              <CustomImg src="./media/network.png" />
              <UserOptionDescription>Your network</UserOptionDescription>
              <ImgBorder>
                <CustomImg src="./media/user-plus.png" />
              </ImgBorder>
            </CustomLink>
          </UserOptionWrapper>
          <UserOptionWrapper>
            <CustomLink to="/NotFound">
              <CustomImg src="./media/publications.png" />
              <UserOptionDescription>Your network</UserOptionDescription>
              <ImgBorder>
                <CustomImg src="./media/plus.png" />
              </ImgBorder>
            </CustomLink>
          </UserOptionWrapper>
        </UserOptionsWrapper>
      </InnerWrapper>
      <OptionsWrapper>
        <OptionWrapper>
          <CustomLink to="/">
            <OptionImg src="./media/publications.png" />
            <OptionDescription>Publications</OptionDescription>
          </CustomLink>
        </OptionWrapper>

        <OptionWrapper>
          <CustomLink to="/NotFound">
            <OptionImg src="./media/ecosystem.png" />
            <OptionDescription>Ecosystems</OptionDescription>
          </CustomLink>
        </OptionWrapper>

        <OptionWrapper>
          <CustomLink to="/entities">
            <OptionImg src="./media/entities2.png" />
            <OptionDescription>Entities</OptionDescription>
          </CustomLink>
        </OptionWrapper>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default LeftMenu;
