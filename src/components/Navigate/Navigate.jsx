import { useDispatch, useSelector } from 'react-redux';
import { ButtonLogout, Div, Link, Nav } from './Navigate.staled';
import { actions } from 'store/auth/authSlice';
import { deleteToken } from 'fetchContacts/usersApi';

function Navigate() {
  const { user, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  function logoutFn(evt) {
    dispatch(actions.logOut());
    deleteToken();
  }
  return (
    <Nav>
      <Link to="/">PHONEBBOK</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/signUp">SIGNUP</Link>
      {token && (
        <Div>
          <span>{user.email}</span>
          <ButtonLogout onClick={logoutFn} type="button">
            logout
          </ButtonLogout>
        </Div>
      )}
    </Nav>
  );
}

export default Navigate;
