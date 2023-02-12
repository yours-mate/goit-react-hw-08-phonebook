import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box maxWidth={1440} margin="0 auto" px={16}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
