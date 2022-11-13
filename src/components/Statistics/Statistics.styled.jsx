import styled from 'styled-components';
import getRandomHexColor from '../../utils/RandomHexColor';


export const Wrapper = styled.section`
  display: inline-block;

  margin-left: 20px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;    

`
export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;    
`

export const StatList = styled.ul`
  display: flex;
  border-top: 2px solid #a9a9a9;    
`

export const StatItem = styled.li`
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;

  background-color: ${() => getRandomHexColor()};

  transition: scale 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  
    :hover,:focus {
        scale: 1.05;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
    }
`

export const StatLabel = styled.span`
  font-weight: 700;    
`

export const StatPercentage = styled.span`
    
`