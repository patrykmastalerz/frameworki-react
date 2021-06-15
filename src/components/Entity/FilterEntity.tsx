import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const WrapperFilter = styled.div`
  background-color: white;
`;

const FilterTitle = styled.span`
  background-color: transparent;
  color: ${Colors.greyLight};
  padding: 10px;
  display: block;
`;

const FilterRow = styled.div`
  display: flex;
  align-items: center;
`;

const FilterItemWrapper = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  margin: 4px 10px;
`;

const FilterItemIcon = styled.img`
  width: 20px;
  transform: rotate(45deg);
`;

const FilterItemArrow = styled.img`
  width: 10px;
`;

const FilterItemText = styled.span`
  padding: 5px;
`;

const FilterInputRow = styled.input`
  background-color: ${Colors.grey};
  width: 80px;
  height: 20px;
`;

const FilterAddIcon = styled.img`
  width: 20px;
`;

const FilterAddText = styled.span`
  color: blue;
  padding: 5px;
`;

const FilterEntity: FC = () => {
  return (
    <WrapperFilter>
      <FilterTitle>
        Rows are filtered by the following condiions starting from the top
      </FilterTitle>
      <FilterRow>
        <FilterItemWrapper>
          <FilterItemIcon src="./media/plus.svg" />
          <FilterItemText>Where</FilterItemText>
        </FilterItemWrapper>

        <FilterItemWrapper>
          <FilterItemText>Company</FilterItemText>
          <FilterItemArrow src="./media/arrow-down.svg" />
        </FilterItemWrapper>
        <FilterItemWrapper>
          <FilterItemText>Contains</FilterItemText>
          <FilterItemArrow src="./media/arrow-down.svg" />
        </FilterItemWrapper>
        <FilterInputRow type="text" disabled={true} placeholder="Type..." />
      </FilterRow>

      <FilterRow>
        <FilterItemWrapper>
          <FilterItemIcon src="./media/plus.svg" />
          <FilterItemText>Where</FilterItemText>
        </FilterItemWrapper>

        <FilterItemWrapper>
          <FilterItemText>Status</FilterItemText>
          <FilterItemArrow src="./media/arrow-down.svg" />
        </FilterItemWrapper>
        <FilterItemWrapper>
          <FilterItemText>Is</FilterItemText>
          <FilterItemArrow src="./media/arrow-down.svg" />
        </FilterItemWrapper>
        <FilterInputRow type="text" disabled={true} placeholder="Type..." />
        <FilterItemWrapper>
          <FilterItemText>In</FilterItemText>
          <FilterItemArrow src="./media/arrow-down.svg" />
        </FilterItemWrapper>
        <FilterInputRow type="text" disabled={true} placeholder="Entity..." />
      </FilterRow>

      <FilterRow>
        <FilterItemWrapper>
          <FilterItemIcon src="./media/plus.svg" />
          <FilterItemText>And</FilterItemText>
        </FilterItemWrapper>

        <FilterItemWrapper>
          <FilterItemText>Status</FilterItemText>
          <FilterItemArrow src="./media/arrow-down.svg" />
        </FilterItemWrapper>
        <FilterItemWrapper>
          <FilterItemText>Ends before</FilterItemText>
          <FilterItemArrow src="./media/arrow-down.svg" />
        </FilterItemWrapper>
        <FilterInputRow type="text" disabled={true} placeholder="Date" />
        <FilterItemWrapper>
          <FilterItemText>In</FilterItemText>
          <FilterItemArrow src="./media/arrow-down.svg" />
        </FilterItemWrapper>
        <FilterInputRow type="text" disabled={true} placeholder="Entity..." />
      </FilterRow>

      <FilterRow>
        <FilterItemWrapper>
          <FilterAddIcon src="./media/plus.svg" />
          <FilterAddText>Add filter</FilterAddText>
        </FilterItemWrapper>

        <FilterItemWrapper>
          <FilterAddText>choose property</FilterAddText>
          <FilterItemArrow src="./media/arrow-down.svg" />
        </FilterItemWrapper>
      </FilterRow>
    </WrapperFilter>
  );
};

export default FilterEntity;
