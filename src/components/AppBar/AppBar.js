import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { useAuth } from 'hooksAuth';
import { Box } from '@chakra-ui/react';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #2A363B"
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </header>
  );
}
