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

export const FriendsList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;

  width: 200px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  transition: scale 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    scale: 1.05;
  }
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;

  margin-right: 10px;

  border-radius: 50%;

  background-color: ${props => {
    return props.isOnline ? '#3f8506' : '#b50a0a';
  }};
`;

export const FriendAvatar = styled.img`
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
