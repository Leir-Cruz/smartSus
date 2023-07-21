import { Box } from '@mui/material';

import { Header } from '../Header/header';

interface IContainer {
  children: JSX.Element;
  color?: string;
}
export const PageContainer = ({ children, color }: IContainer) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '30px',
        width: '100%',
        backgroundColor: color ? color : '#fff',
        boxSizing: 'border-box',
        padding: '0 0 30px 0',
      }}
    >
      <Header />
      {children}
    </Box>
  );
};
