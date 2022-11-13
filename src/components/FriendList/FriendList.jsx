import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem'
import { FriendsList } from './FriendList.styled'; 


export const FriendList = ({friends}) => { 
    return (
        <FriendsList>
            {friends.map(friend => (
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
            ))}
        </FriendsList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    )
};