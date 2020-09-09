import React from 'react';
import UserList from './pages/userList';
import Layout from './layout';

function App() {
  return (
    <div>
      <Layout>
        <UserList />
      </Layout>
    </div>
  );
}

export default App;