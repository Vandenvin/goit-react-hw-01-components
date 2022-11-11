import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
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
      </div>
    </>
  );
};
