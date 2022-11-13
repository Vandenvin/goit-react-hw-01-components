import styled from 'styled-components';

export const Table = styled.table`
  border-spacing: 0 2px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;    
`
export const TableRow = styled.tr`
    
`

export const TableHeader = styled.th`
  padding: 10px 20px;
  background: #8c8998;
  color: #fff;
  border-right: 2px solid;
  font-size: 0.9em;    
`

export const TableData = styled.td`
  vertical-align: middle;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;  
  
    :first-child {
        border-left: 2px solid black;
    }
`