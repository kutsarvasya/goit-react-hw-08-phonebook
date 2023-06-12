import styled from 'styled-components';

export const FormContacts = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  gap: 10px;
  padding: 20px;
  width: 200px;
`;
export const BtnSubmit = styled.button`
  padding: 4px;
  width: 100px;
  border-radius: 4px;
  :hover {
    background-color: teal;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
`;
