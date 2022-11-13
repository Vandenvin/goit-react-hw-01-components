import styled from 'styled-components';

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