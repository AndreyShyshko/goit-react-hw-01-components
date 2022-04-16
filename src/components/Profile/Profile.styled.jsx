import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  width: 300px;
  border: 1px solid black;
`;

export const Description = styled.div`
  padding-top: 30px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 150px;
  background-color: blue;
  border-radius: 50%;
  padding: 10px 0;
`;

export const UserName = styled.p`
  margin-top: 30px;
  font-weight: 700;
  font-size: 20px;
`;

export const UserTag = styled.p``;

export const UserLocation = styled.p``;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: #d4d1d1;
  margin: 0;
  padding: 0;
`;

export const StatsItems = styled.li`
  width: 100%;
  border: 1px solid #a2a2a2;
  padding: 10px 0;
  text-align: center;
`;

export const ItemLabel = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const ItemQuantity = styled.span`
  font-weight: 700;
  font-size: 16px;
`;
