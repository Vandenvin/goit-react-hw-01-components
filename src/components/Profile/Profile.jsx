import PropTypes from 'prop-types';
import { Card, DescriptionBlock, Avatar, UserName, UserTag, UserLocation, StatsBlock, StatItem, StatLabel, StatQuantity } from './Profile.styled'

export const Profile = ({avatar, username, tag, location, stats }) => { 
    return (
      <Card>
        <DescriptionBlock>
            <Avatar src={avatar} alt="User avatar" />
            <UserName>{username}</UserName>
            <UserTag>@{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
          </DescriptionBlock>

          <StatsBlock>
            <StatItem>
              <StatLabel>Followers</StatLabel>
              <StatQuantity>{stats.followers}</StatQuantity>
            </StatItem>
            <StatItem>
              <StatLabel>Views</StatLabel>
              <StatQuantity>{stats.views}</StatQuantity>
            </StatItem>
            <StatItem>
              <StatLabel>Likes</StatLabel>
              <StatQuantity>{stats.likes}</StatQuantity>
            </StatItem>
          </StatsBlock>
        </Card>
    )
}


Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
