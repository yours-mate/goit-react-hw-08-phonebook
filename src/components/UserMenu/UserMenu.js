import { useDispatch } from 'react-redux';
import { Box } from '../Box';
import { authOperations } from '../../redux/auth';
import { useAuth } from 'hooks';

const styles = {
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <span style={styles.name}>Welcome, {user.name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </Box>
  );
}
