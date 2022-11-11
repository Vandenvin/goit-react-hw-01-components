import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => { 
    return (
        <li className={css.item}>

            {isOnline
                ? <span className={css.status} style={{ backgroundColor: "#3f8506" }}>{isOnline}</span>
                : <span className={css.status} style={{ backgroundColor: "#b50a0a" }} >{isOnline}</span>}

            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}