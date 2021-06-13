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

interface IUserComment {
    userId: number,
    userName: string, 
    postId: number,
    title: string,
    body: string,
  }

const ResumeWork: FC = () => {
    const { commentList } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comments
    }));

    const { usersList } = useSelector<IState, IUserReducer>(state => ({
        ...state.users
    }));
    
    const [currentPage, setCurrentPage] = useState<number>(0);
    
    // const comments = commentList?.slice(currentPage, currentPage + 10);
      
    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }



    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const [myfilter, setFilter] = useState<boolean>(true);
    
    const filterHandler = () => {
        setFilter(!myfilter);
        setCurrentPage(0);
    }

    const test = usersList?.map( p => {
        const comment = commentList?.find(u => u.postId === p.id);
        console.log(p?.id);
        console.log(comment?.postId);
        return {
            userId: p?.id,
            userName: p?.name, 
            postId: comment?.postId,
            title: comment?.name,
            body: comment?.body,
        } as IUserComment
    })

    const mergedComments = commentList?.map( p => {
        const user = usersList?.find(u => u.id === p.postId);
        return {
            userId: user?.id,
            userName: user?.name, 
            postId: p.postId,
            title: p.name,
            body: p.body,
        } as IUserComment
    }).filter( x => myfilter ? x.postId === x.userId : x.postId === 1)
    .slice(currentPage, currentPage + 10)

    const myComments = commentList?.map( p => {
        const user = usersList?.find(u => u.id === p.postId);
        return {
            userId: user?.id,
            userName: user?.name, 
            postId: p.postId,
            title: p.name,
            body: p.body,
        } as IUserComment
    }).filter( x => x.postId === 1 )
    .slice(currentPage, currentPage + 10)
    
    

    const allComments = commentList?.map( p => {
        const user = usersList?.find(u => u.id === p.postId);
        return {
            userId: user?.id,
            userName: user?.name, 
            postId: p.postId,
            title: p.name,
            body: p.body,
        } as IUserComment
    }).filter( x =>  x.postId === x.userId)
    .slice(currentPage, currentPage + 10)
   


  return (
    <Wrapper>
        {/* {console.log(test)} */}
        
        {console.log(currentPage)}
        <TopBar>
            <Header>Resume your work</Header>
            <RightBar>
                <InputWrapper>
                    <FilterInput placeholder="Search Legalcluster" type="text" value={inputText} onChange={inputHandler}/>
                    <CustomImg src="./media/search.png" />
                </InputWrapper>
                <FollowedWrapper onClick={filterHandler}>
                    <FollowIcon src="./media/entities.png" />
                    {myfilter ? <FollowText>Followed</FollowText> : <FollowText>My</FollowText>}
                    <MenuArrowIcon src="./media/arrow-down.png" />
                </FollowedWrapper>
            </RightBar>
        </TopBar>


        {mergedComments.map((item, index) => { 
            return ( item.title.toLowerCase().includes(inputText.toLowerCase()) ?
                <ResumeWrapper key={index}>
                            <ResumeTitle>
                                {item.title}
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
                                    Updates 3 days ago by {item.userName}
                                </UpdateDate>
                            </ResumeDetails>
                        </ResumeWrapper>
                        : <></>
                
    )

})}

    {/* {console.log(1/10)} */}
    <StyledPaginateContainer>
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={mergedComments.length >= 10 ? mergedComments.length : 0}
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

// {mergedComments.map((item, index) => { 
//     return ( item.title.toLowerCase().includes(inputText.toLowerCase()) ?
//         <ResumeWrapper key={index}>
//                     <ResumeTitle>
//                         {item.title}
//                     </ResumeTitle>
//                     <ResumeDescription>
//                         {item.body}
//                     </ResumeDescription>
//                     <ResumeDetails>
//                         <SubWrapper>
//                             <DetailsIcon src="./media/entities.png"/>
//                             <SubText>Subsid. corp.</SubText>
//                         </SubWrapper>

//                         <SubWrapper>
//                             <DetailsIcon src="./media/entities.png"/>
//                             <SubText>Client contract</SubText>
//                         </SubWrapper>

//                         <UpdateDate>
//                             Updates 3 days ago by {item.userName}
//                         </UpdateDate>
//                     </ResumeDetails>
//                 </ResumeWrapper>
//                 : <></>
                
//     )

// })}



// {mergedComments.length >= 10 && 
//     <StyledPaginateContainer>
//         <ReactPaginate
//             previousLabel={'<'}
//             nextLabel={'>'}
//             breakLabel={'...'}
//             breakClassName={'break-me'}
//             pageCount={mergedComments.length}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={10}
//             onPageChange={handlePageClick}
//             containerClassName={'pagination'}
//             activeClassName={'active'}
//         />
//     </StyledPaginateContainer>
// }




// {myfilter ? allComments : myComments }


// <StyledPaginateContainer>
//     <ReactPaginate
//         previousLabel={'<'}
//         nextLabel={'>'}
//         breakLabel={'...'}
//         breakClassName={'break-me'}
//         pageCount={myfilter ? allComments.length : 0}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//         containerClassName={'pagination'}
//         activeClassName={'active'}
//     />
// </StyledPaginateContainer>
















// {mergedComments.map((item, index) => { 
//     return ( item.title.toLowerCase().includes(inputText.toLowerCase()) ?
//         <ResumeWrapper key={index}>
//                     <ResumeTitle>
//                         {item.title}
//                     </ResumeTitle>
//                     <ResumeDescription>
//                         {item.body}
//                     </ResumeDescription>
//                     <ResumeDetails>
//                         <SubWrapper>
//                             <DetailsIcon src="./media/entities.png"/>
//                             <SubText>Subsid. corp.</SubText>
//                         </SubWrapper>

//                         <SubWrapper>
//                             <DetailsIcon src="./media/entities.png"/>
//                             <SubText>Client contract</SubText>
//                         </SubWrapper>

//                         <UpdateDate>
//                             Updates 3 days ago by {item.userName}
//                         </UpdateDate>
//                     </ResumeDetails>
//                 </ResumeWrapper>
//                 : <></>
                
//     )

// })}


//     {myfilter && <StyledPaginateContainer>
//         <ReactPaginate
//             previousLabel={'<'}
//             nextLabel={'>'}
//             breakLabel={'...'}
//             breakClassName={'break-me'}
//             pageCount={mergedComments.length}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={10}
//             onPageChange={handlePageClick}
//             containerClassName={'pagination'}
//             activeClassName={'active'}
//         />
//     </StyledPaginateContainer>}





















///
// {myfilter ? allComments .map((item, index) => { 
//     return ( item.title.toLowerCase().includes(inputText.toLowerCase()) ?
//         <ResumeWrapper key={index}>
//             <ResumeTitle>
//                 {item.title}
//             </ResumeTitle>
//             <ResumeDescription>
//                 {item.body}
//             </ResumeDescription>
//                 <ResumeDetails>
//                     <SubWrapper>
//                         <DetailsIcon src="./media/entities.png"/>
//                         <SubText>Subsid. corp.</SubText>
//                     </SubWrapper>

//                     <SubWrapper>
//                         <DetailsIcon src="./media/entities.png"/>
//                         <SubText>Client contract</SubText>
//                     </SubWrapper>

//                     <UpdateDate>
//                             Updates 3 days ago by {item.userName}
//                     </UpdateDate>
//                 </ResumeDetails>
//             </ResumeWrapper>
//             : <></>
//         )

//     }) : myComments.map((item, index) => { 
//         return ( item.title.toLowerCase().includes(inputText.toLowerCase()) ?
//             <ResumeWrapper key={index}>
//                 <ResumeTitle>
//                     {item.title}
//                 </ResumeTitle>
//                 <ResumeDescription>
//                     {item.body}
//                 </ResumeDescription>
//                 <ResumeDetails>
//                     <SubWrapper>
//                         <DetailsIcon src="./media/entities.png"/>
//                         <SubText>Subsid. corp.</SubText>
//                     </SubWrapper>

//                     <SubWrapper>
//                         <DetailsIcon src="./media/entities.png"/>
//                         <SubText>Client contract</SubText>
//                     </SubWrapper>

//                     <UpdateDate>
//                         Updates 3 days ago by {item.userName}
//                     </UpdateDate>
//                 </ResumeDetails>
//             </ResumeWrapper>
//             : <></>
                    
//         )

//     }) }


//     <StyledPaginateContainer>
//         <ReactPaginate
//             previousLabel={'<'}
//             nextLabel={'>'}
//             breakLabel={'...'}
//             breakClassName={'break-me'}
//             // pageCount={myfilter ? allComments.length : myComments.length < 10 ? 0 : myComments.length}
//             pageCount={myfilter ? allComments.length : myComments.length}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={handlePageClick}
//             containerClassName={'pagination'}
//             activeClassName={'active'}
//         />
//     </StyledPaginateContainer>
    