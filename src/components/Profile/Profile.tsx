import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { IState } from "../../reducers";
import { IUserReducer } from "../../reducers/userReducers";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { setUser } from "../../actions/usersActions";
import { IPhotoReducer } from "../../reducers/photoReducers";

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
`;
const TopBarButtonWrapper = styled.button`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 0px;
`;

const TopBarIcon = styled.img`
  width: 20px;
  background-color: white;
  margin-right: 5px;
  margin-bottom: 5px;
`;
const Plus = styled.img`
  width: 15px;
  transform: rotate(45deg);
`;

const UserWrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10px;
  border-bottom: 1px solid ${Colors.grey};
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const Avatar = styled.img`
  box-sizing: border-box;
  min-width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 50%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  background-color: transparent;
`;
const LeftInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopProfileInput = styled.input<{ isEdit: boolean }>`
  border: 0px;
  margin-bottom: 5px;
  padding: 5px;

  ${(props) =>
    props.isEdit &&
    css`
      border: 1px solid ${Colors.grey};
    `}
`;

const CityInput = styled.input``;

const TypeInput = styled.input``;

const RightInputs = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: space-between;
  align-items: flex-end;
`;

const EmailInput = styled.input``;

const CustomInput = styled.input``;

const UserDetailsWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  border-bottom: 1px solid ${Colors.grey};
  position: relative;
`;

const DetailsIconEdit = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
  border: 0px;
  background-color: transparent;
`;

const TitleDetails = styled.span``;
const InputWrapperDetails = styled.div`
  margin: 10px;
`;

const InputDetails = styled.input<{ isDetailsEdit: boolean }>`
  margin-right: 10px;
  background-color: #eceef7;
  border: 0px;
  padding: 5px;
  color: #bbc6f7;

  ${(props) =>
    props.isDetailsEdit &&
    css`
      border: 1px solid ${Colors.grey};
    `}
`;

const PanelInformationsWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  border-bottom: 1px solid ${Colors.grey};
`;

const Title = styled.span`
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: ${fontSize[18]};
`;

const ProfileTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ProfileTitle = styled.span`
  max-width: 250px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${Colors.grey};
`;
const MoneyInput = styled.input<{ isDetailsEdit: boolean }>`
  max-width: 100px;
  margin-bottom: 10px;
  border: 0px;
  padding: 5px;

  ${(props) =>
    props.isDetailsEdit &&
    css`
      border: 1px solid ${Colors.grey};
    `}
`;

const ProfileInput = styled.input<{ isDetailsEdit: boolean }>`
  max-width: 300px;
  margin-bottom: 10px;
  border: 0px;
  padding: 5px;

  ${(props) =>
    props.isDetailsEdit &&
    css`
      border: 1px solid ${Colors.grey};
    `}
`;

const FileInput = styled.input<{ isDetailsEdit: boolean }>`
  max-width: 300px;
  margin-bottom: 10px;
  border: 0px;
  padding: 5px;

  ${(props) =>
    props.isDetailsEdit &&
    css`
      border: 1px solid ${Colors.grey};
    `}
`;

const CorrespondantsWrapper = styled.div`
  width: 70%;
  background-color: #ebebeb;
  display: flex;
  margin-bottom: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const CorrespondantsImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  margin-right: 10px;
`;

const CorrespondantsName = styled.input<{ isDetailsEdit: boolean }>`
  max-width: 300px;
  margin-right: 10px;
  height: 26px;
  border: 0px;
  background-color: #ebebeb;
  ${(props) =>
    props.isDetailsEdit &&
    css`
      border: 1px solid ${Colors.grey};
    `}
`;

const CorrespondantsButtonWrapper = styled.button`
  max-width: 300px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  border: 0px;
`;

const ProposalsWrapper = styled.div`
  padding: 50px 10px;
  border-bottom: 1px solid ${Colors.grey};
`;
const TableHeader = styled.td`
  width: 100px;
  padding: 10px;
  font-weight: bold;
`;

const TableCell = styled.td`
  width: 100px;
  padding: 5px;
`;

const Thead = styled.thead`
  border-bottom: 1px solid ${Colors.grey};
`;
const CustomTable = styled.table`
  margin-top: 10px;
`;

const InternalReviewsWrapper = styled.div`
  padding: 50px 10px;
  border-bottom: 1px solid ${Colors.grey};
  position: relative;
`;

const AmountWrapper = styled.div`
  padding: 50px 10px;
`;

const AmountThead = styled.thead`
  border-bottom: 1px black solid;
`;

const SubTitle = styled.span`
  font-size: ${fontSize[16]};
  font-weight: bold;
  color: ${Colors.grey};
`;

const DetailsTitle = styled.span`
  color: ${Colors.grey};
`;
const SelectedFile = styled.span`
  font-size: ${fontSize[16]};
  font-weight: bold;
  color: ${Colors.greyLight};
  padding: 5px;
  margin-bottom: 10px;
  background-color: #ebebeb;
  width: 70%;
`;

const CustromSelect = styled.select`
  padding: 5px;
  background-color: #eceef7;
  border: 0px;
  color: #bbc6f7;
`;

const DetailSelect = styled.select<{ isEdit: boolean }>`
  padding: 5px;
  background-color: white;
  border: 0px;
  width: 130px;

  ${(props) =>
    props.isEdit &&
    css`
      border: 1px solid ${Colors.grey};
    `}
`;

const CustomLink = styled(Link)`
  color: #bbc6f7;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Profile: FC = () => {
  const [userEdit, setUserEdit] = useState<boolean>(false);
  const [userDetailsEdit, setUserEditDetails] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { user, usersList } = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));

  const { photoList } = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photos,
  }));

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TopBar>
        <TopBarButtonWrapper>
          <TopBarIcon src="./media/message.svg" />
          Message
        </TopBarButtonWrapper>

        <TopBarButtonWrapper>
          <TopBarIcon src="./media/note.svg" />
          Create a request
        </TopBarButtonWrapper>

        <TopBarButtonWrapper>
          <TopBarIcon src="./media/cluster.svg" />
          Add to a cluster
        </TopBarButtonWrapper>

        <TopBarButtonWrapper>
          <Plus src="./media/plus.png" />
        </TopBarButtonWrapper>
      </TopBar>
      <UserWrapper>
        <AvatarWrapper>
          <Avatar src={photoList[0]?.url} />
          See profile
        </AvatarWrapper>
        <DetailsWrapper>
          <LeftInputs>
            <TopProfileInput
              isEdit={userEdit}
              disabled={userEdit ? false : true}
              value={user}
              onChange={(e) => {
                dispatch(setUser(e.target.value));
              }}
            />
            <TopProfileInput
              isEdit={userEdit}
              disabled={userEdit ? false : true}
              defaultValue={"New-York"}
            />
            <DetailSelect
              name="profile"
              disabled={userEdit ? false : true}
              isEdit={userEdit}
            >
              <option value="Profile">Profile</option>
              <option value="Admin">Admin</option>
              <option value="Normal">Normal</option>
            </DetailSelect>
          </LeftInputs>
          <RightInputs>
            <TopBarIcon
              onClick={() => {
                setUserEdit(!userEdit);
              }}
              src="./media/edit.svg"
            />
            <TopProfileInput
              isEdit={userEdit}
              disabled={userEdit ? false : true}
              defaultValue={usersList[0]?.email}
            />
            <TopProfileInput
              isEdit={userEdit}
              disabled={userEdit ? false : true}
              defaultValue={usersList[0]?.phone}
            />
          </RightInputs>
        </DetailsWrapper>
      </UserWrapper>

      <UserDetailsWrapper>
        <DetailsIconEdit
          onClick={() => {
            setUserEditDetails(!userDetailsEdit);
          }}
        >
          <img src="./media/edit.svg" alt="" />
        </DetailsIconEdit>

        <TitleDetails>
          <SubTitle>Expertise</SubTitle>
          <InputWrapperDetails>
            <InputDetails
              isDetailsEdit={userDetailsEdit}
              disabled={userDetailsEdit ? false : true}
              defaultValue="Mergers and acquistions"
            />
          </InputWrapperDetails>
        </TitleDetails>

        <TitleDetails>
          <SubTitle>Specialties</SubTitle>
          <InputWrapperDetails>
            <InputDetails
              isDetailsEdit={userDetailsEdit}
              disabled={userDetailsEdit ? false : true}
              defaultValue="Cross border operation"
            />
            <InputDetails
              isDetailsEdit={userDetailsEdit}
              disabled={userDetailsEdit ? false : true}
              defaultValue="Transaction over 500"
            />
          </InputWrapperDetails>
        </TitleDetails>

        <TitleDetails>
          <SubTitle>Admission to practice law</SubTitle>
          <InputWrapperDetails>
            <InputDetails
              isDetailsEdit={userDetailsEdit}
              disabled={userDetailsEdit ? false : true}
              defaultValue="Paris bar association"
            />
            <InputDetails
              isDetailsEdit={userDetailsEdit}
              disabled={userDetailsEdit ? false : true}
              defaultValue="Tunisian bar assocation"
            />
          </InputWrapperDetails>
        </TitleDetails>

        <TitleDetails>
          <SubTitle>Counties</SubTitle>

          <InputWrapperDetails>
            <CustromSelect
              name="cities"
              disabled={userDetailsEdit ? false : true}
            >
              <option value="Poland">Poland</option>
              <option value="Russian">Russian</option>
              <option value="Ukraine">Ukraine</option>
            </CustromSelect>
          </InputWrapperDetails>
        </TitleDetails>
      </UserDetailsWrapper>

      <PanelInformationsWrapper>
        <Title>Panel informations</Title>

        <ProfileTitleWrapper>
          <ProfileTitle>Hourly fee</ProfileTitle>

          <DetailSelect
            name="money"
            disabled={userDetailsEdit ? false : true}
            isEdit={userEdit}
          >
            <option value="500">500</option>
            <option value="1500">1500</option>
            <option value="800">800</option>
          </DetailSelect>

          {/* <MoneyInput
            isDetailsEdit={userDetailsEdit}
            disabled={userDetailsEdit ? false : true}
            defaultValue="610zl "
          /> */}

          <ProfileTitle>Terms and conditions</ProfileTitle>
          <ProfileInput
            isDetailsEdit={userDetailsEdit}
            disabled={userDetailsEdit ? false : true}
            defaultValue="Monthly 10k retainer - see with Jeanny Smith "
          />

          {userDetailsEdit ? (
            <FileInput
              isDetailsEdit={userDetailsEdit}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSelectedFile(e.currentTarget.files![0]);
              }}
              type="file"
            />
          ) : (
            <SelectedFile>
              {selectedFile?.name === undefined
                ? "Nie wybrano"
                : selectedFile?.name}
            </SelectedFile>
          )}

          <ProfileTitle>Services and projects</ProfileTitle>
          <ProfileInput
            isDetailsEdit={userDetailsEdit}
            disabled={userDetailsEdit ? false : true}
            defaultValue="Corporate MA and international acquisitions"
          />
        </ProfileTitleWrapper>

        <Title>Internal correspondants</Title>

        <ProfileTitleWrapper>
          <CorrespondantsWrapper>
            <CorrespondantsImg />
            <CorrespondantsName
              isDetailsEdit={userDetailsEdit}
              disabled={userDetailsEdit ? false : true}
              defaultValue="Firstname Lastname"
            />

            <CorrespondantsButtonWrapper>
              <TopBarIcon src="./media/message.svg" />
              Message
            </CorrespondantsButtonWrapper>

            <CorrespondantsButtonWrapper>
              <TopBarIcon src="./media/people.png" />
              Profile
            </CorrespondantsButtonWrapper>
          </CorrespondantsWrapper>

          <CorrespondantsWrapper>
            <CorrespondantsImg />
            <CorrespondantsName
              isDetailsEdit={userDetailsEdit}
              disabled={userDetailsEdit ? false : true}
              defaultValue="Firstname Lastname"
            />

            <CorrespondantsButtonWrapper>
              <TopBarIcon src="./media/message.svg" />
              Message
            </CorrespondantsButtonWrapper>

            <CorrespondantsButtonWrapper>
              <TopBarIcon src="./media/people.png" />
              Profile
            </CorrespondantsButtonWrapper>
          </CorrespondantsWrapper>
        </ProfileTitleWrapper>
      </PanelInformationsWrapper>

      <ProposalsWrapper>
        <Title>Proposals</Title>

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
        <Title>Internal reviews</Title>

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
        <CustomLink to="/NotFound">See more reviews</CustomLink>
      </InternalReviewsWrapper>

      <AmountWrapper>
        <Title>Amount of fees</Title>

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
};

export default Profile;
