import React, { FC } from "react";
import useDropdown from "react-dropdown-hook";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Wrapper } from "../../styledHelpers/Components";
import { fontSize } from "../../styledHelpers/FontSizes";
import ExpandedMenu from "./ExpandedMenu";

const Wrapper2 = styled(Wrapper)`
  padding: 4px;
  box-shadow: 0px 5px 8px -1px rgba(0, 0, 0, 0.08);
`;
const InnerWrapper = styled.div`
  width: 100%;
  padding: 5px 20px;
  background: ${Colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CustomImg = styled.img`
  margin: 10px;
`;

const LogoImg = styled.img`
  width: 35px;
`;

const ImgBackground = styled.div<{ showBg: boolean }>`
  position: relative;
  background: ${Colors.iconBackground};
  border-radius: 50%;

  ${(props) =>
    props.showBg &&
    css`
      margin-left: 5px;
      &:after {
        content: "2";
        padding: 6px;
        font-size: ${fontSize[12]};
        position: absolute;
        z-index: 3;
        top: -5px;
        right: -8px;
        border-radius: 50%;
        color: white;
        background: #3e00e9;
        width: 10px;
        text-align: center;
      }
    `}
`;

const InputWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
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
`;

const MenuWrapper = styled.div`
  width: 200px;
  height: 30px;
  border: 1px solid ${Colors.grey};
  background-color: transparent;
  position: relative;
  margin-left: 30px;
`;

const MenuSelectedOptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuSelectedOption = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${Colors.greyLight};
`;

const MenuIcon = styled.img`
  margin: 0px 10px 0px 5px;
`;

const MenuArrowIcon = styled.img`
  margin-right: 10px;
  width: 10px;
  height: 6px;
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;
const CustomLink = styled(Link)`
  color: black;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TopBar: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown /* closeDropdown */] =
    useDropdown();

  const menuHandler = () => {
    toggleDropdown();
  };

  return (
    <Wrapper2>
      <InnerWrapper>
        <LeftMenu>
          <Link to="/">
            <LogoImg src="./media/logo.png" />
          </Link>

          <MenuWrapper ref={wrapperRef}>
            <MenuSelectedOptionWrapper onClick={menuHandler}>
              <MenuSelectedOption>
                <MenuIcon src="./media/house.png" />
                Home
              </MenuSelectedOption>

              <MenuArrowIcon src="./media/arrow-down.png" />
            </MenuSelectedOptionWrapper>
            {dropdownOpen && <ExpandedMenu />}
          </MenuWrapper>
        </LeftMenu>

        <InputWrapper>
          <CustomInput placeholder="Search Legalcluster" type="text" />
          <CustomImg src="./media/search.png" />
        </InputWrapper>
        <RightIcons>
          <CustomImg src="./media/house.png" />
          <ImgBackground showBg={true}>
            <CustomImg src="./media/comments.png" />
          </ImgBackground>
          <ImgBackground showBg={true}>
            <CustomImg src="./media/bell.png" />
          </ImgBackground>
        </RightIcons>
      </InnerWrapper>
    </Wrapper2>
  );
};

export default TopBar;
