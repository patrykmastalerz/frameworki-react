import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';




const Wrapper = styled.section`
  background-color: ${Colors.white};
  width: 1000px;
  margin-left: 10px;
`;

const TopBar = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-end;
`
const TopBarButtonWrapper = styled.button`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 0px;
`

const TopBarIcon = styled.img`
  width: 20px;
  background-color: white;
  margin-right: 5px;
  margin-bottom: 5px;
`
const Plus = styled.img`
  width: 15px;
  transform: rotate(45deg);
`

const UserWrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10px;
  border-bottom: 1px solid ${Colors.grey};
`
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

const Avatar = styled.div`
  box-sizing: border-box;
  min-width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 50%;
`

const DetailsWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  background-color: transparent;
`
const LeftInputs = styled.div`
  display: flex;
  flex-direction: column;

`

const TopProfileInput = styled.input<{isEdit: boolean}>`
  border: 0px;
  margin-bottom: 5px;
  padding: 5px;
  
  ${props => props.isEdit && css `
    border: 1px solid ${Colors.grey};
    /* background-color: red; */
  `}

`

const CityInput = styled.input`

`

const TypeInput = styled.input`

`

const RightInputs = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: space-between;
  align-items: flex-end;
`

const EmailInput = styled.input`

`

const CustomInput = styled.input`

`

const UserDetailsWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  border-bottom: 1px solid ${Colors.grey};
  position: relative;
`

const DetailsIconEdit = styled.img`
  width: 25px;
  position: absolute;
  right: 10px;
  top: 10px;
`



const TitleDetails = styled.span`
  /* background-color: red; */


`
const InputWrapperDetails = styled.div`
  margin: 10px;
`

const InputDetails = styled.input<{isDetailsEdit: boolean}>`
  margin-right: 10px;
  background-color: #eceef7;
  border: 0px;
  padding: 5px;
  color: #bbc6f7;

  ${props => props.isDetailsEdit && css `
    border: 1px solid ${Colors.grey};
    /* background-color: red; */
  `}

`

const PanelInformationsWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  border-bottom: 1px solid ${Colors.grey};
`

const Title = styled.span`
  padding: 10px;
  /* background-color: pink; */
  margin-bottom: 10px;
  font-weight: bold;
  font-size: ${fontSize[18]}
`

const ProfileTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  margin-bottom: 10px;

`

const ProfileTitle = styled.span`
  max-width: 250px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${Colors.grey}

`
const MoneyInput = styled.input <{isDetailsEdit: boolean}>`
  max-width: 100px;
  margin-bottom: 10px;
  border: 0px;
  padding: 5px;

  ${props => props.isDetailsEdit && css `
    border: 1px solid ${Colors.grey};
    /* background-color: red; */
  `}
`

const ProfileInput = styled.input <{isDetailsEdit: boolean}>`
  max-width: 300px;
  margin-bottom: 10px;
  border: 0px;
  padding: 5px;

  ${props => props.isDetailsEdit && css `
    border: 1px solid ${Colors.grey};
    /* background-color: red; */
  `}
`

const FileInput = styled.input <{isDetailsEdit: boolean}>`
  max-width: 300px;
  margin-bottom: 10px;
  border: 0px;
  padding: 5px;

  ${props => props.isDetailsEdit && css `
    border: 1px solid ${Colors.grey};
    /* background-color: red; */
  `}
`

const CorrespondantsWrapper = styled.div`
  width: 70%;
  background-color: #ebebeb;
  display: flex;
  margin-bottom: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
`

const CorrespondantsImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  margin-right: 10px;
`

const CorrespondantsName = styled.input  <{isDetailsEdit: boolean}>`
  max-width: 300px;
  margin-right: 10px;
  height: 26px;
  border: 0px;
  background-color: #ebebeb;
  ${props => props.isDetailsEdit && css `
    border: 1px solid ${Colors.grey};
    /* background-color: red; */
  `}
`

const CorrespondantsButtonWrapper = styled.button`
  max-width: 300px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  border: 0px;
`

const ProposalsWrapper = styled.div`
  /* background-color: green; */
  padding: 20px 10px;
  border-bottom: 1px solid ${Colors.grey};
`
// td

const TableHeader = styled.td`
  /* background-color: pink; */
  width: 100px;
  padding: 10px;
  font-weight: bold;
`

const TableCell = styled.td`
  /* background-color: pink; */
  width: 100px;
  padding: 5px;
`

//thead

const Thead = styled.thead`
  border-bottom: 1px solid ${Colors.grey};
`
const CustomTable = styled.table`
  margin-top: 10px;
`

const InternalReviewsWrapper = styled.div`
  /* background-color: green; */
  padding: 20px 10px;
  border-bottom: 1px solid ${Colors.grey};
`

const AmountWrapper = styled.div`
  /* background-color: green; */
  padding: 20px 10px;
`

const AmountThead = styled.thead`
  border-bottom: 1px black solid;
`

const SubTitle = styled.span`
  font-size: ${fontSize[16]};
  font-weight: bold;
  color: ${Colors.grey}
`

const DetailsTitle = styled.span`
  /* font-size: ${fontSize[16]}; */
  /* font-weight: bold; */
  color: ${Colors.grey}
`






const Profile: FC = () => {

  const [userEdit, setUserEdit] = useState<boolean>(false);
    
    const userEditHandler = () => {
      setUserEdit(!userEdit);
    }

  const [userDetailsEdit, setUserEditDetails] = useState<boolean>(false);
    
  const userDetailsEditHandler = () => {
    setUserEditDetails(!userDetailsEdit);
  }

  return (
    <Wrapper>
        {console.log(userEdit)}
        <TopBar>
          <TopBarButtonWrapper>
            <TopBarIcon src="./media/entities2.png"/>
            Message
          </TopBarButtonWrapper>

          <TopBarButtonWrapper>
            <TopBarIcon src="./media/entities2.png"/>
            Create a request
          </TopBarButtonWrapper>

          <TopBarButtonWrapper>
            <TopBarIcon src="./media/entities2.png"/>
            Add to a cluster
          </TopBarButtonWrapper>

          <TopBarButtonWrapper>
            <Plus src="./media/plus.png"/>
          </TopBarButtonWrapper>
        </TopBar>
        <UserWrapper>
          <AvatarWrapper>
            <Avatar/>
            See profile
          </AvatarWrapper>
          <DetailsWrapper>
            <LeftInputs>
              <TopProfileInput isEdit={userEdit} disabled={userEdit ? false : true} defaultValue="Imie"/>
              <TopProfileInput isEdit={userEdit} disabled={userEdit ? false : true} defaultValue="New-York" />
              <TopProfileInput isEdit={userEdit} disabled={userEdit ? false : true} defaultValue="Profile" />
            </LeftInputs>
            <RightInputs>
              <TopBarIcon onClick={userEditHandler} src="./media/settings.svg"/>
              <TopProfileInput isEdit={userEdit} disabled={userEdit ? false : true} defaultValue="fasdfsaf@gmail.com" />
              <TopProfileInput isEdit={userEdit} disabled={userEdit ? false : true} defaultValue="03 3213 312312" />
            </RightInputs>
          </DetailsWrapper>
        </UserWrapper>

        <UserDetailsWrapper>
          <DetailsIconEdit onClick={userDetailsEditHandler}  src="./media/settings.svg"/>
          <TitleDetails>
            <SubTitle>
              Expertise

            </SubTitle>
            <InputWrapperDetails>
              <InputDetails isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true} defaultValue="Mergers and acquistions" />
            </InputWrapperDetails>
          </TitleDetails>

          <TitleDetails>
            <SubTitle>
              Specialties
            </SubTitle>
            <InputWrapperDetails>
              <InputDetails isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true} value="Cross border operation" />
              <InputDetails isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true} value="Transaction over 500" />
            </InputWrapperDetails>
          </TitleDetails>

          <TitleDetails>
            <SubTitle>
              Admission to practice law
            </SubTitle>
            <InputWrapperDetails>
              <InputDetails isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true} value="Paris bar association" />
              <InputDetails isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true} value="Tunisian bar assocation" />
            </InputWrapperDetails>
          </TitleDetails>

          <TitleDetails>
            <SubTitle>
              Counties
            </SubTitle>
            <InputWrapperDetails>
              <InputDetails isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true} value="Tunisia" />
            </InputWrapperDetails>
          </TitleDetails>
        </UserDetailsWrapper>

        <PanelInformationsWrapper>
          <Title>
            Panel informations
          </Title>

          <ProfileTitleWrapper>
            <ProfileTitle>
              Hourly fee
            </ProfileTitle>
            <MoneyInput isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true} defaultValue="610zl " />

            <ProfileTitle>
              Terms and conditions
            </ProfileTitle>
            <ProfileInput isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true} defaultValue="Monthly 10k retainer - see with Jeanny Smith "/>

            <FileInput isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true}  type="file" />

            <ProfileTitle>
              Services and projects
            </ProfileTitle>
            <ProfileInput isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true} defaultValue="Corporate MA and international acquisitions"/>

          </ProfileTitleWrapper>


          <Title>
            Internal correspondants
          </Title>

          <ProfileTitleWrapper>
            <CorrespondantsWrapper>
              <CorrespondantsImg />
              <CorrespondantsName  isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true}  defaultValue="Firstname Lastname" />

              <CorrespondantsButtonWrapper>
                <TopBarIcon src="./media/entities2.png"/>
                Message
              </CorrespondantsButtonWrapper>

              <CorrespondantsButtonWrapper>
                <TopBarIcon src="./media/entities2.png"/>
                Profile
              </CorrespondantsButtonWrapper>
            </CorrespondantsWrapper>

            <CorrespondantsWrapper>
              <CorrespondantsImg />
              <CorrespondantsName  isDetailsEdit={userDetailsEdit} disabled={userDetailsEdit ? false : true}  defaultValue="Firstname Lastname" />

              <CorrespondantsButtonWrapper>
                <TopBarIcon src="./media/entities2.png"/>
                Message
              </CorrespondantsButtonWrapper>

              <CorrespondantsButtonWrapper>
                <TopBarIcon src="./media/entities2.png"/>
                Profile
              </CorrespondantsButtonWrapper>
            </CorrespondantsWrapper>

          </ProfileTitleWrapper>
        </PanelInformationsWrapper>

        <ProposalsWrapper>
          <Title>
            Proposals
          </Title>

          <CustomTable>
          <Thead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Entity</TableHeader>
              <TableHeader>Location</TableHeader>
              <TableHeader>Experiense</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Firm</TableHeader>
            </tr>
          </Thead>
          <tbody>
            <tr>
              <TableCell>Operation</TableCell>
              <TableCell>Renoult</TableCell>
              <TableCell>France</TableCell>
              <TableCell>#Tax</TableCell>
              <TableCell>10/10/2010</TableCell>
              <TableCell>Racine</TableCell>
            </tr>
            <tr>
              <TableCell>Operation</TableCell>
              <TableCell>Renoult</TableCell>
              <TableCell>France</TableCell>
              <TableCell>#Tax</TableCell>
              <TableCell>10/10/2010</TableCell>
              <TableCell>Racine</TableCell>
            </tr>
          </tbody>
          </CustomTable>

        </ProposalsWrapper>

        <InternalReviewsWrapper>

          <Title>
            Internal reviews
          </Title>

         
          <CustomTable>
          <Thead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Entity</TableHeader>
              <TableHeader>Location</TableHeader>
              <TableHeader>Experiense</TableHeader>
              <TableHeader>Date</TableHeader>
            </tr>
          </Thead>
          <tbody>
            <tr>
              <TableCell>Operation</TableCell>
              <TableCell>Renoult</TableCell>
              <TableCell>France</TableCell>
              <TableCell>#Tax</TableCell>
              <TableCell>10/10/2010</TableCell>
            </tr>
            <tr>
              <TableCell>Operation</TableCell>
              <TableCell>Renoult</TableCell>
              <TableCell>France</TableCell>
              <TableCell>#Tax</TableCell>
              <TableCell>10/10/2010</TableCell>
            </tr>
          </tbody>
          </CustomTable>
          <Link to="/NotFound">See more reviews</Link>
        </InternalReviewsWrapper>

        <AmountWrapper>

          <Title>
            Amount of fees
          </Title>

         
          <CustomTable>
          <thead>
            <tr>
              <TableHeader>Year</TableHeader>
              <TableHeader>Cost center</TableHeader>
              <TableHeader>Total amount</TableHeader>
              <TableHeader>Law firm</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>2019</TableCell>
              <TableCell>CS 153</TableCell>
              <TableCell>3500</TableCell>
              <TableCell>Linklaters</TableCell>
            </tr>
            <tr>
              <TableCell>2018</TableCell>
              <TableCell>CS 153</TableCell>
              <TableCell>3500</TableCell>
              <TableCell>Linklaters</TableCell>
            </tr>
          </tbody>
          </CustomTable>
        </AmountWrapper>

    </Wrapper>
  );
}

export default Profile;
