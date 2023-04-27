import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
`;

export const TableContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const TitleAdmin = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

export const ButtonManage = styled.button`
  background-color: ${(props) => (props.delete ? '#f44336' : '#4caf50')};
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0 5px;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.delete ? '#da190b' : '#45a049')};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f1f1f1;
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #eee;
  text-align: center;
`;

export const TableHeader = styled.th`
  padding: 12px;
  border: 1px solid #eee;
  font-weight: bold;
  text-align: center;
`;

export const ButtonAdd = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Select = styled.select`
  font-size: 1rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const ButtonAddNew = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  margin-bottom: 15px;
  align-self: flex-end;

  &:hover {
    background-color: #45a049;
  }
`;