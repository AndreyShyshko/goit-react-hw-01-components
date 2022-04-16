import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 300px;
  border: 1px solid gray;
  border-collapse: collapse;
  margin-left: 20px;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  :nth-of-type(2n) {
    background: #e8edff;
  }
`;

export const TableHeadCell = styled.th`
  border: 1px solid #bbbbae;
  background-color: aquamarine;
  padding: 5px 0;
`;

export const TableDataCell = styled.td`
  text-align: center;
  border: 1px solid #bbbbae;
  padding: 5px 0;
`;
