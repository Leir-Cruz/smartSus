import { Box } from '@mui/material';

interface IContainer {
  children: JSX.Element[];
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
        padding: '30px 0',
      }}
    >
      {children}
    </Box>
  );
};
