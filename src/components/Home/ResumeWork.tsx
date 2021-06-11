import React, { ChangeEvent, FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../reducers';
import { ICommentReducer } from '../../reducers/commentReducers';
import { IUserReducer } from '../../reducers/userReducers';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';




const Wrapper = styled.section`
  /* background-color: grey; */
  width: 100%;

`;

const TopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center
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
    /* background-color: red; */
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

const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
  justify-content: center;
}

ul {
  list-style: none;
  padding: 0;
}

ul.pagination li {
  display: inline-block;
  width: 30px;
  /* border: 1px solid #e2e2e2; */
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin: 4px;

}

ul.pagination li a {
  text-decoration: none;
  color: blue;
  font-size: 20px;

}

ul.pagination li.active a {
  color: white;
}
ul.pagination li.active {
  background-color: ${Colors.greyLight};
}

ul.pagination li a:hover,
ul.pagination li a.active {
  color: blue;
}

.page-selection {
  width: 48px;
  height: 30px;
  color: blue;
}

.pagination-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
`;

const ResumeWork: FC = () => {
    const { commentList } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comments
    }));

    const { usersList } = useSelector<IState, IUserReducer>(state => ({
        ...state.users
    }));
    
    const [currentPage, setCurrentPage] = useState<number>(0);
    
    const comments = commentList?.slice(currentPage, currentPage + 10);
      
    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
        console.log(text);
    }
      


  return (
    <Wrapper>
        <TopBar>
            <Header>Resume your work</Header>
            <RightBar>
                <InputWrapper>
                    <FilterInput placeholder="Search Legalcluster" type="text" value={inputText} onChange={inputHandler}/>
                    <CustomImg src="./media/search.png" />
                </InputWrapper>
                <FollowedWrapper>
                    <FollowIcon src="./media/entities.png" />
                    <FollowText>Followed</FollowText>
                    <MenuArrowIcon src="./media/arrow-down.png" />
                </FollowedWrapper>
            </RightBar>
        </TopBar>

        {comments.map(item => { 
            const user = usersList?.find(u => u.id === item.postId);
            
            return ( user?.id === item.postId && item.name.toLowerCase().includes(inputText.toLowerCase()) ?
                <ResumeWrapper key={item.id}>
                    {console.log(user?.id === item.postId)}
                            <ResumeTitle>
                                {item.name}
                            </ResumeTitle>
                            <ResumeDescription>
                                {item.body}
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
                                    Updates 3 days ago by {user.name} {user.username}
                                </UpdateDate>
                            </ResumeDetails>
                        </ResumeWrapper>
                        : <></>
                        
            )

        })}
        {/* <ResumeWrapper>
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
        </ResumeWrapper> */}

        <StyledPaginateContainer>
            <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={commentList.length}
            marginPagesDisplayed={2}
            pageRangeDisplayed={10}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            />
        </StyledPaginateContainer>

    </Wrapper>
  );
}

export default ResumeWork;
