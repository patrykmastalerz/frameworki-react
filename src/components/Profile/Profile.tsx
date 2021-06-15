import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';




const Wrapper = styled.section`
  background-color: ${Colors.white};
  width: 1000px;
`;

const TopBar = styled.div`
  width: 100%;
  background-color: yellow;
  display: flex;
  justify-content: flex-end;
`
const TopBarButtonWrapper = styled.button`
  background-color: red;
  display: flex;
  align-items: center;
  padding: 5px;
`

const TopBarIcon = styled.img`
  width: 15px;
  background-color: yellow;
  margin-right: 5px;
`
const Plus = styled.img`
  width: 15px;
  transform: rotate(45deg);
`

const UserWrapper = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10px;
`
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
`

const Avatar = styled.div`
  box-sizing: border-box;
  min-width: 60px;
  height: 60px;
  background-color: pink;
`

const DetailsWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  background-color: green;
`
const LeftInputs = styled.div`
  display: flex;
  flex-direction: column;

`

const NameInput = styled.input`

`

const CityInput = styled.input`

`

const TypeInput = styled.input`

`

const RightInputs = styled.div`
  display: flex;
  flex-direction: column;
`

const EmailInput = styled.input`

`

const CustomInput = styled.input`

`

const UserDetailsWrapper = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
`

const TitleDetails = styled.span`

`
const InputWrapperDetails = styled.div`
  margin-bottom: 10px;
`

const InputDetails = styled.input`
  margin-right: 10px;
`

const PanelInformationsWrapper = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
`

const Title = styled.span`

`

const ProfileTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  margin-bottom: 10px;
`

const ProfileTitle = styled.span`
  max-width: 250px;

`
const MoneyInput = styled.input`
  max-width: 100px;

`

const ProfileInput = styled.input`
  max-width: 300px;

`

const CorrespondantsWrapper = styled.div`
  background-color: orange;
  display: flex;
  margin-bottom: 5px;
`

const CorrespondantsImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: red;
  margin-right: 10px;
`

const CorrespondantsName = styled.input`
  max-width: 300px;
  margin-right: 10px;

`

const CorrespondantsButtonWrapper = styled.button`
  max-width: 300px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`

const ProposalsWrapper = styled.div`
  background-color: green;
`
// td

const TableHeader = styled.td`
  background-color: pink;
  width: 100px;
  padding: 10px;
`

const TableCell = styled.td`
  background-color: pink;
  width: 100px;
  padding: 5px;
`

//thead

const Thead = styled.thead`
  border-bottom: 1px black solid;
`



const Profile: FC = () => {
  return (
    <Wrapper>
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
              <NameInput value="Imie"/>
              <CityInput value="New-York" />
              <TypeInput value="Profile" />
            </LeftInputs>
            <RightInputs>
              <TopBarIcon src="./media/entities2.png"/>
              <EmailInput value="fasdfsaf@gmail.com" />
              <CustomInput value="03 3213 312312" />
            </RightInputs>
          </DetailsWrapper>
        </UserWrapper>
        <UserDetailsWrapper>
          <TitleDetails>
            Expertise
            <InputWrapperDetails>
              <InputDetails value="Mergers and acquistions" />
            </InputWrapperDetails>
          </TitleDetails>

          <TitleDetails>
            Specialties
            <InputWrapperDetails>
              <InputDetails value="Cross border operation" />
              <InputDetails value="Transaction over 500" />
            </InputWrapperDetails>
          </TitleDetails>

          <TitleDetails>
            Admission to practice law
            <InputWrapperDetails>
              <InputDetails value="Paris bar association" />
              <InputDetails value="Tunisian bar assocation" />
            </InputWrapperDetails>
          </TitleDetails>

          <TitleDetails>
            Counties
            <InputWrapperDetails>
              <InputDetails value="Tunisia" />
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
            <MoneyInput value="610zl "/>
          </ProfileTitleWrapper>

          <ProfileTitleWrapper>
            <ProfileTitle>
              Terms and conditions
            </ProfileTitle>
            <ProfileInput value="Monthly 10k retainer - see with Jeanny Smith "/>
          </ProfileTitleWrapper>

          <ProfileTitleWrapper>
            <ProfileInput value="jakis plik"/>
          </ProfileTitleWrapper>

          
          <ProfileTitleWrapper>
            <ProfileTitle>
              Services and projects
            </ProfileTitle>
            <ProfileInput value="Corporate MA and international acquisitions"/>
          </ProfileTitleWrapper>

          <Title>
            Internal correspondants
          </Title>

          <ProfileTitleWrapper>
            <CorrespondantsWrapper>
              <CorrespondantsImg />
              <CorrespondantsName value="Firstname Lastname" />

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
              <CorrespondantsName value="Firstname Lastname" />

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

          <table>
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
          </table>

        </ProposalsWrapper>



    </Wrapper>
  );
}

export default Profile;
