import styled from '@emotion/styled';

export const Container = styled.section`
  margin-top: 20px;
  margin-left: 20px;
  width: 300px;
  border: 1px solid black;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin: 25px 0;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  border: 1px solid black;
  width: 100%;
  text-align: center;
  padding: 10px 0;
`;

export const StatLabel = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const StatPercentage = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
