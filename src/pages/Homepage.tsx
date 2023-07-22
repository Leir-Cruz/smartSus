import { Box, Button, styled, Typography } from '@mui/material';

import { PageContainer } from '../components/containers/pageContainer';
import { Filters } from '../components/Drawer/filters';
import { MainTabel } from '../components/Tables/mainTable';

const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  width: '100%',
  minHeight: 'calc(100vh - 60px)',
  backgroundColor: '#FFFFFF',

  '& .tableContainer': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 30px',
    width: 'calc(100% - 60px)',

    '& .MuiTableCell-head': {
      width: 'fit-content',
      color: '#868E96',
      fontWeight: 600,
      border: '1px solid #E6E6E6',
    },
    '& .MuiTableBody-root': {
      '& .MuiTableCell-root': {
        paddingLeft: '32px',
        minWidth: '150px',
        maxWidth: '300px',
        lineBreak: 'normal',
        border: '1px solid #E9ECEF',

        color: '#15181B',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '17px',
        //fontFamily: 'Inter',
        fontStyle: 'normal',
      },
    },
  },
  '& .headerContainer': {
    display: 'flex',
    padding: '8px 24px',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
}));

export const Homepage = () => {
  return (
    <PageContainer>
      <Container>
        <Box className="headerContainer">
          <Typography>Nossos dados</Typography>
          <Filters />
        </Box>
        <Box className="tableContainer">
          <MainTabel />
        </Box>
      </Container>
    </PageContainer>
  );
};
