import { Profile } from './Profile/Profile';
import user from '../dataFiles/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../dataFiles/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../dataFiles/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../dataFiles/transactions.json';

import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <>
      <Container>
        <Title>Task 1: Social network profile</Title>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Title>Task 2: Statistics Card</Title>
        <Statistics title="Upload stats" stats={data} />

        <Title>Task 3: Friends List</Title>
        <FriendList friends={friends} />

        <Title>Task 4: Transaction History</Title>
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};
