import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsList, ControlButton } from './FriendList.styled';
import { Component } from 'react';

// export const FriendList = ({ friends }) => {
//   return (
//     <FriendsList>
//       {friends.map(({ avatar, name, isOnline, id }) => (
//         <FriendListItem
//           avatar={avatar}
//           name={name}
//           isOnline={isOnline}
//           key={id}
//         />
//       ))}
//     </FriendsList>
//   );
// };

export class FriendList extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { friends } = this.props;
    const { visible } = this.state;

    return (
      <>
        <ControlButton type="button" onClick={this.toggle}>
          {visible ? 'Hide' : 'Show'}
        </ControlButton>

        {visible && (
          <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => (
              <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}
              />
            ))}
          </FriendsList>
        )}
      </>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
