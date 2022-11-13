import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: center;    
`

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
  
    :hover, :focus {
         scale: 1.05;
    }
`

export const FriendStatus = styled.span`
    width: 15px;
    height: 15px;

    margin-right: 10px;

    border-radius: 50%;

    background-color: ${(props) => { 
        return props.isOnline ? "#3f8506" : "#b50a0a"
    }
    
  };
`

export const FriendAvatar = styled.img`
  margin-right: 10px;    
`

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;    
`