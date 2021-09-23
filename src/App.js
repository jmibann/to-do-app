import React, { Fragment, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { useLocalStorageState } from './hooks';
import { setIsLoggedIn } from './features/session'

import Login from './screens/login';
import Todos from './screens/todos';

const TO_DO_APP_SESSION = 'to_do_app_session';

function App() {
  const dispatch = useDispatch();
  const [localSession] = useLocalStorageState(TO_DO_APP_SESSION);
  const isLoggedIn = useSelector(state => state.session.isLoggedIn);

  useEffect(() => {
    if (localSession) {
      dispatch(setIsLoggedIn(true));
    }
  }, [localSession, dispatch])

  return (
    <Fragment>
      {isLoggedIn ? <Todos /> : <Login />}
    </Fragment>
  )

}

export default App;
