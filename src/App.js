
import React from 'react';
import { Authenticator, Button } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <Authenticator 
      variation='modal'
    
    >
      {({signOut,user}) => (
        <>
        <h1>hello {user.username}</h1>
        <button 
       
        onClick={signOut}>
          Sign Out
        </button>

        </>
      )}

    </Authenticator>
    
  );
};

export default App;