import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { ISinglePhoto } from '../../entities/ISinglePhoto';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import FilterEntity from './FilterEntity';




const Wrapper = styled.section<{isFullScreen: boolean}>`

  width: 100%;
  min-height: 100%;
  padding: 20px;
  ${props => props.isFullScreen && css `
    position: fixed;
    margin: 0px;
    top: 0px;
    left: 0px;
    padding: 0px;
    background-color: white;
  `}
`;

const BarWrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

const FirstBarWrapper = styled.div`
  background-color: white;
  width: 100%;
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
`;

const DisplayOptionWrapper = styled.div`
  box-sizing: border-box;
  background-color: #87acfc;
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
    width: 15px;
    height: 15px;
    margin: 0 auto;
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

const ItemsWrapper = styled.div<{isMosaic: boolean; isFullScreen: boolean}>`

  background-color: white;
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  ${props => props.isMosaic && css `
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  `}

  ${props => props.isFullScreen && css `
    background-color: white;
  `}
`;

const ItemWrapper = styled.div<{isMosaic: boolean}>`
  box-sizing: border-box;
  width: 280px;
  height: 100px;
  margin: 10px auto;
  display: flex;
  box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);

  ${props => props.isMosaic && css `
  box-sizing: border-box;

  box-sizing: border-box;
  background-color: pink;
  width: 100%;
  margin-bottom: 10px;
  `}
`;

const ItemImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const ItemDetails = styled.div<{isMosaic: boolean}>`
  box-sizing: border-box;
  background-color: white;
  width: 180px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;

  ${props => props.isMosaic && css `
    width: 100%;
  `}
`;

const ItemTitle = styled.span`
  font-size: ${fontSize[16]};
  font-weight: bold;
`;

const ItemDescription = styled.span`
  font-size: ${fontSize[12]};
  color: ${Colors.greyLight};
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

  // const [link, setLink] = useState<string>('');

  const linkHandler = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    // setLink(url);
  }

  const [mosaic, setMosaic] = useState<boolean>(false);
  const mosaicHandler = () => {
    setMosaic(!mosaic);
  }


  const [sortDesc, setSortDesc] = useState<boolean>(false);
  const sortHandler = () => {
    setSortDesc(!sortDesc);
  };

  const [entity, setEntity] = useState<ISinglePhoto[]>([]);
  
  //czemu tutaj nie moge posortowac zaleznie od zmiennej - sortDesc
  useEffect( () => {
    setEntity(photoList?.slice(0, 30))
  }, [])

  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const fullScreenHandler = () => {
    setFullScreen(!fullScreen);
  }
  
  const cos = entity?.sort((a, b) => {
    var titleA = a?.title.toUpperCase();
    var titleB = b?.title.toUpperCase();
    if(sortDesc){
      return (titleA > titleB) ? -1 : (titleA < titleB) ? 1 : 0;
    }
    else{
      return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
    }
  })





  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };


  return (
    <Wrapper isFullScreen={fullScreen}>
        <BarWrapper>
          <FirstBarWrapper>
            <FirstBarLeftItems>
              Entities
              <BarIcon src="./media/cog.svg" />
            </FirstBarLeftItems>

            <FirstBarRightItems>
              <DisplayOptionWrapper onClick={mosaicHandler}>
                <DisplayOptionIcon src="./media/house2.svg"/>
                <DisplayOptionText>
                  {mosaic ? "Mosaic" : "Line"}
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
                <ItemIcon src="./media/sort.svg"/>
                Sort
              </SecondBarItem>

              <SecondBarItem  onClick={handleFilter}>
                <ItemIcon src="./media/filter.svg"/>
                Filter
              </SecondBarItem>

              <SecondBarItem onClick={fullScreenHandler}>
                <ItemIcon src="./media/full.svg"/>
              </SecondBarItem>

              <SecondBarItem onClick={linkHandler}>
                <ItemIcon src="./media/share.svg"/>
                Share
              </SecondBarItem>
            </FirstBarLeftItems>

            <FirstBarRightItems>
              <InputWrapper >
                <FilterInput placeholder="Search..." type="text" value={inputText} onChange={inputHandler}/>
                <CustomImg src="./media/search.png" />
              </InputWrapper>

              <FollowedWrapper>
                <FollowIcon src="./media/satellite.svg" />
                <FollowText>Followed</FollowText>
                <MenuArrowIcon src="./media/arrow-down.png" />
              </FollowedWrapper>
            </FirstBarRightItems>
          </SecondBarWrapper>


          {showFilter === true && <FilterEntity/>   }
                 

        </BarWrapper>

        <ItemsWrapper isMosaic={mosaic} isFullScreen={fullScreen}>
          {cos?.map( photo => (
          photo?.title.toLowerCase().includes(inputText.toLowerCase()) &&
            <ItemWrapper key={photo?.id} isMosaic={mosaic}>
              <ItemImg src={photo?.url}/>
              <ItemDetails isMosaic={mosaic}>
                  <ItemTitle>
                    {photo?.title}
                  </ItemTitle>
                  <ItemDescription>
                    Caracas 1050, Distrito Capital, Venezuela
                  </ItemDescription>
              </ItemDetails>
            </ItemWrapper>
          ))}
          {/* {sortDesc ? itemsAsc : itemsDesc} */}
        </ItemsWrapper>


    </Wrapper>
  );
}

export default Entities;





        
  
  // useEffect( () => {
  //   setEntity(photoList?.slice(0, 30).sort((a, b) => {
  //       var titleA = a?.title.toUpperCase();
  //       var titleB = b?.title.toUpperCase();
  //       if(sortDesc){
  //         // console.log(sortDesc)
  //         return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
  //       }
  //       else{
  //         // console.log(sortDesc)

  //         return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
  //       }
  //     }))
  // }, [])



  

  // const itemsAsc = photos?.sort((a, b) => {
  //   var titleA = a?.title.toUpperCase();
  //   var titleB = b?.title.toUpperCase();
  //   return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
  // }).map( photo => (
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

  // const itemsDesc = photos?.sort((a, b) => {
  //   var titleA = a?.title.toUpperCase();
  //   var titleB = b?.title.toUpperCase();
  //   return (titleA > titleB) ? -1 : (titleA < titleB) ? 1 : 0;
  // }).map( photo => (
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
