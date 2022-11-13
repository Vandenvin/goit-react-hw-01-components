import PropTypes from 'prop-types';
import { Wrapper, Title, StatList, StatItem, StatLabel, StatPercentage } from './Statistics.styled'


export const Statistics = ({ title, stats}) => { 
    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
            
            <StatList>
                {stats.map(stat => (
                    <StatItem key={stat.id}>
                        <StatLabel>{stat.label}</StatLabel>
                        <StatPercentage>{stat.percentage}%</StatPercentage>
                    </StatItem>
                ))}    
             </StatList>
        </Wrapper>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
            
        })
    )
}
