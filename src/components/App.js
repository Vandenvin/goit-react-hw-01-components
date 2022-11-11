import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import css from './App.module.css';

export const App = () => {
  return (
    <>
      <div className={css.container}>
        <h1>Task 1: Social network profile</h1>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <h1>Task 2: Statistics Section</h1>
        <Statistics title="Upload stats" stats={data} />
        <h1>Task 3: Friend List</h1>
        <FriendList friends={friends} />
        <h1>Task4: Transaction History</h1>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
