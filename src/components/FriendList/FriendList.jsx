import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem'
import { FriendsList } from './FriendList.styled'; 


export const FriendList = ({friends}) => { 
    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id}) => (
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                />
            ))}
        </FriendsList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    )
};