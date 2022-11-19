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
`

export const Card = styled.div`
    display: inline-block;
    margin-left: 20px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    width: 300px;
`

export const DescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border-bottom: 2px solid #a9a9a9;
`

export const Avatar = styled.img`
    width: 150px;
    margin-top: 20px;
    margin-bottom: 40px;

    border-radius: 50%;
    border: 2px solid #a9a9a9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

    :hover, :focus {
        scale: 1.01;    
}
`

export const UserName = styled.p`
    margin-bottom: 10px;
    font-weight: 700;
`

export const UserTag = styled.p`
    margin-bottom: 5px;
    color: #a9a9a9;
`

export const UserLocation = styled.p`
  margin-bottom: 30px;
  color: #a9a9a9;
`

export const StatsBlock = styled.ul`
  display: flex;
`

export const StatItem = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;

  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f5f5f5;

  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

    :not(:last-child) {
        border-right: 2px solid #a9a9a9;
    }

    :hover {
        scale: 1.01;          
    }   
` 

export const StatLabel = styled.span`
  font-weight: 700;
`

export const StatQuantity = styled.span`
`