import styled from 'styled-components';

// Styled components for mobile-responsive design
const Heading = styled.div`
  text-align: center;
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const GridLoader = styled.div`
  text-align: center;
  color: #999;
  font-size: 16px;
  margin: 20px 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Section = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
`;

const SearchInput = styled.input`
  display: block;
  margin: 0 auto;
  width: 300px; /* Replace with your desired fixed width in pixels */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Category = styled.span`
  font-weight: bold;
  color: #ff6600;
`;

const Source = styled.span`
  font-weight: bold;
  color: #007bff;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const SelectComponent = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const AuthorsFilter = styled.div`
  flex: 1;
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  select {
    border: none;
  }`;

const DateInput = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export {
  Heading,
  GridLoader,
  GridContainer,
  Section,
  SearchInput,
  Category,
  Source,
  FilterContainer,
  SelectComponent,
  AuthorsFilter,
  DateInput,
};
