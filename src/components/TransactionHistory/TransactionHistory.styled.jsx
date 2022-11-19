import styled from 'styled-components';

export const ControlButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #000;
  border-radius: 50px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  vertical-align: top;
  transition: box-shadow 0.2s;

  :hover {
    transition: all 0.2s;
    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    background-color: #eee;
  }
`;

export const Table = styled.table`
  border-spacing: 0 2px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
`;
export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 10px 20px;
  background: #8c8998;
  color: #fff;
  border-right: 2px solid;
  font-size: 0.9em;
`;

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
`;
