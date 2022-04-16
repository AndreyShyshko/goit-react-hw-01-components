import styled from '@emotion/styled';

export const Item = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  margin: 0 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ eventType }) => {
    switch (eventType) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'black';
    }
  }};
`;

export const Avatar = styled.img`
  margin: 5px 0;
  border-radius: 10px;
  background-color: #d9d9fa;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
`;
