import PropTypes from 'prop-types';
import { Component } from 'react';
import { Wrapper, Title, StatList, StatItem, StatLabel, StatPercentage, ControlButton } from './Statistics.styled'


// export const Statistics = ({ title, stats}) => { 
//     return (
//         <Wrapper>
//             {title && <Title>{title}</Title>}
            
//             <StatList>
//                 {stats.map(({ id, label, percentage }) => (
//                     <StatItem key={id}>
//                         <StatLabel>{label}</StatLabel>
//                         <StatPercentage>{percentage}%</StatPercentage>
//                     </StatItem>
//                 )
//                 )}    
//              </StatList>
//         </Wrapper>
//     )
// }

export class Statistics extends Component { 
    state = {
        visible: false,
    };

    toggle = () => {
      this.setState(prevState => ({
        visible: !prevState.visible,
      }));
    };

    render() { 

        const { title, stats } = this.props;
        const { visible } = this.state;

        return (
            <>
            <ControlButton type="button" onClick={this.toggle}> {visible ? 'Hide' : 'Show'}</ControlButton>
                
                {visible && 
                <Wrapper>
                {title && <Title>{title}</Title>}
            
                <StatList>
                    {stats.map(({ id, label, percentage }) => (
                        <StatItem key={id}>
                            <StatLabel>{label}</StatLabel>
                            <StatPercentage>{percentage}%</StatPercentage>
                        </StatItem>
                    )
                    )}    
                </StatList>
                </Wrapper>}
            </>
        );
    }
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
            
        })
    )
}
