import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavigtaionBar from './components/NavigtaionBar';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './api/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const { user } = React.useContext(Context);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    check().then((data) => {
      user.setUser(data);
      user.setIsAuth(true);
      console.log(user.isAuth);
    });
  }, [user.isAuth]);
  if (loading) {
    return <Spinner animation="grow" />;
  }
  return (
    <BrowserRouter>
      <NavigtaionBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
