import PropTypes from 'prop-types';
import { Wrapper, Title, StatList, StatItem, StatLabel, StatPercentage } from './Statistics.styled'


export const Statistics = ({ title, stats}) => { 
    return (
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
        </Wrapper>
    )
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
