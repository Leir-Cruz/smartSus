import { Box, styled, Typography } from '@mui/material';

import { PageContainer } from '../components/containers/pageContainer';
import { MainTabel } from '../components/Tables/mainTable';

const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  width: '100%',
  minHeight: 'calc(100vh - 60px)',
  backgroundColor: '#FFFFFF',
}));

export const Homepage = () => {
  return (
    <PageContainer>
      <Container>
        <Typography>Nossos dados</Typography>
        <MainTabel />
      </Container>
    </PageContainer>
  );
};
