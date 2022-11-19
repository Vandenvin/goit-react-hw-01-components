import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  Card,
  DescriptionBlock,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  StatsBlock,
  StatItem,
  StatLabel,
  StatQuantity,
  ControlButton,
} from './Profile.styled';

// export const Profile = ({ avatar, username, tag, location, stats: { followers, views, likes } }) => {
//     return (
//       <Card>
//         <DescriptionBlock>
//             <Avatar src={avatar} alt="User avatar" />
//             <UserName>{username}</UserName>
//             <UserTag>@{tag}</UserTag>
//             <UserLocation>{location}</UserLocation>
//           </DescriptionBlock>

//           <StatsBlock>
//             <StatItem>
//               <StatLabel>Followers</StatLabel>
//               <StatQuantity>{followers}</StatQuantity>
//             </StatItem>
//             <StatItem>
//               <StatLabel>Views</StatLabel>
//               <StatQuantity>{views}</StatQuantity>
//             </StatItem>
//             <StatItem>
//               <StatLabel>Likes</StatLabel>
//               <StatQuantity>{likes}</StatQuantity>
//             </StatItem>
//           </StatsBlock>
//         </Card>
//     )
// }

export class Profile extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const {
      avatar,
      username,
      tag,
      location,
      stats: { followers, views, likes },
    } = this.props;
    const { visible } = this.state;

    return (
      <>
        <ControlButton type="button" onClick={this.toggle}>
          {visible ? 'Hide' : 'Show'}
        </ControlButton>

        {visible && (
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
                <StatQuantity>{followers}</StatQuantity>
              </StatItem>
              <StatItem>
                <StatLabel>Views</StatLabel>
                <StatQuantity>{views}</StatQuantity>
              </StatItem>
              <StatItem>
                <StatLabel>Likes</StatLabel>
                <StatQuantity>{likes}</StatQuantity>
              </StatItem>
            </StatsBlock>
          </Card>
        )}
      </>
    );
  }
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
