import React, { ChangeEvent, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import FilterEntity from './FilterEntity';




const Wrapper = styled.section`
/* background-color: ${Colors.white}; */
/* background-color: red; */
width: 100%;
height: 100%;
padding: 20px;
`;

const BarWrapper = styled.div`
  box-sizing: border-box;

  /* background-color: ${Colors.white}; */
  background-color: white;
  width: 100%;
  /* height: 100px; */
  padding: 5px;
  margin-bottom: 10px;
`;

const FirstBarWrapper = styled.div`
  background-color: white;
  width: 100%;
  /* height: 40px; */
  display: flex;
  justify-content: space-between;
`;

const FirstBarLeftItems = styled.div`
  background-color: pinkc;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const FirstBarRightItems = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  /* height: 30px; */
  /* width: 100px; */
`;

const DisplayOptionWrapper = styled.div`
  box-sizing: border-box;
  background-color: #87acfc;
  /* width: 70px; */
  /* padding: 0px 5px; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #87acfc;
`;

const DisplayOptionIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  padding-left: 5px;
`;

const DisplayOptionText = styled.span`
  padding-right: 5px;
  font-size: ${fontSize[12]};
`;

const BarIcon = styled.img`

    width: 15px;
    height: 15px;
    margin-left: 5px;
`;

const FirstBarRightScrollIcon = styled.img`
    /* padding: 10px 10px; */
    width: 15px;
    height: 15px;
    margin: 0 auto;
    /* margin-left: 5px; */
`;

const DisplayOptionIconWrapper = styled.div`
  background-color: white;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SecondBarWrapper = styled.div`
  background-color: white;
  width: 100%;
  /* height: 40px; */
  display: flex;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
	width: 140px;
  height: 30px;
	display: flex;
	justify-content:space-between;
	border: 1px solid ${Colors.grey};
  background-color: white;
`;


const FilterInput = styled.input`
	width: 95%;
	border: 0px;
	text-align: center;

	&::placeholder {
		color: ${Colors.grey};
    font-size: ${fontSize[12]};
		font-weight: bold;
	}
`;

const CustomImg = styled.img`
	margin: 10px;
`;

const FollowedWrapper = styled.button`
    width: 120px;
    height: 32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0px;
    margin: 5px;
    border: 1px solid blue;
`

const FollowIcon = styled.img`
    width: 15px;
    height: 15px;
    margin: 0 auto;
`

const MenuArrowIcon = styled.img`
	width: 10px;
	height: 6px;
  margin-left: 5px;
`

const FollowText = styled.span`
    color: blue;
    font-weight: bold;
`
const AllButtonWrapper = styled.button`
  background-color: #87acfc;
  color: blue;
  padding: 5px;
  font-weight: bold;
  border: 0px;
  display: flex;
  align-items: center;
  font-size: ${fontSize[10]};

`

const ItemIcon = styled.img`
  width: 10px;
  margin-right: 5px;
`
const SecondBarItem = styled.button`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  font-size: ${fontSize[10]};
  border: 0px;
  border-right: 1px solid black;
  padding: 5px 10px;
  margin-left: 5px;
`

const ItemsWrapper = styled.div`
  background-color: white;
  width: 100%;
  /* height: 100px; */
  display: inline-flex;
  flex-wrap: wrap;
  /* align-items: center; */
  /* justify-content: space-around; */

`;

const ItemWrapper = styled.div`
  width: 280px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
`;

const ItemImg = styled.img`
  /* background-color: black; */
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const ItemDetails = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`;

const ItemTitle = styled.span`
  font-size: ${fontSize[16]};
  font-weight: bold;
`;

const ItemDescription = styled.span`
  font-size: ${fontSize[12]};
  color: ${Colors.greyLight};
`;

const WrapperFilter = styled.div`
  background-color: red;
  height: 250px;
`;

const FilterTitle = styled.span`
  background-color: yellow;
  color: ${Colors.greyLight};
`;

const FilterRow = styled.div`
  background-color: orange;
  display: flex;
`;

const FilterItemWrapper = styled.button`
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 0px; */
`;

const FilterItemIcon = styled.img`
  width: 20px;
  transform: rotate(45deg);
`;

const FilterItemArrow = styled.img`
  width: 10px;
  /* transform: rotate(45deg); */
`;

const FilterItemText = styled.span`
  /* background-color: red; */
  padding: 5px;

`;

const FilterInputRow = styled.input`
  background-color: ${Colors.grey};
  width: 80px;
/* border: 0px; */
`;





const Entities: FC = () => {

  const { photoList } = useSelector<IState, IPhotoReducer>(state => ({
    ...state.photos
  }));

  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  const [sortDesc, setSortDesc] = useState<boolean>(true);

  const sortHandler = () => {
    setSortDesc(!sortDesc);
  };




  const photos = photoList?.slice(0, 30);


  const itemsAsc = photos.sort((a, b) => {
    var titleA = a.title.toUpperCase();
    var titleB = b.title.toUpperCase();
    return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
  }).map( photo => (
    photo.title.toLowerCase().includes(inputText.toLowerCase()) &&
    <ItemWrapper key={photo.id}>
      <ItemImg src={photo.url}/>
      <ItemDetails>
          <ItemTitle>
            {photo?.title}
          </ItemTitle>
          <ItemDescription>
            Caracas 1050, Distrito Capital, Venezuela
          </ItemDescription>
      </ItemDetails>
    </ItemWrapper>
  ))

  const itemsDesc = photos.sort((a, b) => {
    var titleA = a.title.toUpperCase();
    var titleB = b.title.toUpperCase();
    return (titleA > titleB) ? -1 : (titleA < titleB) ? 1 : 0;
  }).map( photo => (
    photo?.title.toLowerCase().includes(inputText.toLowerCase()) &&
    <ItemWrapper key={photo?.id}>
      <ItemImg src={photo?.url}/>
      <ItemDetails>
          <ItemTitle>
            {photo?.title}
          </ItemTitle>
          <ItemDescription>
            Caracas 1050, Distrito Capital, Venezuela
          </ItemDescription>
      </ItemDetails>
    </ItemWrapper>
  ))

  // const items = photoList?.slice(0, 30).map( photo => (
  //   photo?.title.toLowerCase().includes(inputText.toLowerCase()) &&
  //   <ItemWrapper key={photo?.id}>
  //     <ItemImg src={photo?.url}/>
  //     <ItemDetails>
  //         <ItemTitle>
  //           {photo?.title}
  //         </ItemTitle>
  //         <ItemDescription>
  //           Caracas 1050, Distrito Capital, Venezuela
  //         </ItemDescription>
  //     </ItemDetails>
  //   </ItemWrapper>
  // ))
  
  // var items = photoList?.slice(0, 30).map( photo => (
  //   <ItemWrapper key={photo?.id}>
  //     <ItemImg src={photo?.url}/>
  //     <ItemDetails>
  //         <ItemTitle>
  //           {photo?.title}
  //         </ItemTitle>
  //         <ItemDescription>
  //           Caracas 1050, Distrito Capital, Venezuela
  //         </ItemDescription>
  //     </ItemDetails>
  //     {console.log(photo)}
  //   </ItemWrapper>
  // ))

  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };


  return (
    <Wrapper>
        <BarWrapper>
          <FirstBarWrapper>
            <FirstBarLeftItems>
              Entities
              <BarIcon src="./media/cog.svg" />
            </FirstBarLeftItems>

            <FirstBarRightItems>
              <DisplayOptionWrapper>
                <DisplayOptionIcon src="./media/house2.svg"/>
                <DisplayOptionText>
                  Mosaic
                </DisplayOptionText>
                <DisplayOptionIconWrapper>
                  <FirstBarRightScrollIcon src="./media/plus.svg"/>
                </DisplayOptionIconWrapper>
              </DisplayOptionWrapper>
              
            </FirstBarRightItems>
            
          </FirstBarWrapper>

          <SecondBarWrapper>
            <FirstBarLeftItems>
              <AllButtonWrapper>
                <ItemIcon src="./media/plus.png"/>
                All
                <MenuArrowIcon src="./media/arrow-down.png" />
              </AllButtonWrapper>

              <SecondBarItem>
                ...
              </SecondBarItem>

              <SecondBarItem onClick={sortHandler}>
                <ItemIcon src="./media/plus.png"/>
                Sort
              </SecondBarItem>

              <SecondBarItem  onClick={handleFilter}>
                <ItemIcon src="./media/plus.png"/>
                Filter
              </SecondBarItem>

              <SecondBarItem>
                <ItemIcon src="./media/cog.png"/>
              </SecondBarItem>

              <SecondBarItem>
                <ItemIcon src="./media/plus.png"/>
                Share
              </SecondBarItem>
            </FirstBarLeftItems>

            <FirstBarRightItems>
              <InputWrapper >
                <FilterInput placeholder="Search..." type="text" value={inputText} onChange={inputHandler}/>
                <CustomImg src="./media/search.png" />
              </InputWrapper>

              <FollowedWrapper>
                <FollowIcon src="./media/entities.png" />
                <FollowText>Followed</FollowText>
                <MenuArrowIcon src="./media/arrow-down.png" />
              </FollowedWrapper>
            </FirstBarRightItems>
          </SecondBarWrapper>


          {showFilter === true && <FilterEntity/>   }
                 

        </BarWrapper>

        <ItemsWrapper>
          {sortDesc ? itemsAsc : itemsDesc}
        </ItemsWrapper>


    </Wrapper>
  );
}

export default Entities;
