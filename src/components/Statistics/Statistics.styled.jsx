import styled from 'styled-components';
import getRandomHexColor from '../../utils/RandomHexColor';

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
`

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