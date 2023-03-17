import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #ccc;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid black;
  }
`;

export const NovoAluno = styled(Link)`
  display: bolck;
  margin: 20px 0 10px 0;
  border: 2px solid black;
  border-radius: 50px;
  padding: 10px 10px;
`;
