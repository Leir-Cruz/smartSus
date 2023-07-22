import { Box, styled, Typography } from '@mui/material';
import { useState } from 'react';

import { PageContainer } from '../components/containers/pageContainer';
import { Filters } from '../components/Drawer/filters';
import { MainTable } from '../components/Tables/mainTable';
import { TCurrFilters } from '../services/interfaces';

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
  const [currFilters, setCurrFilters] = useState<TCurrFilters>(null);
  const [source, setSource] = useState<any[]>([]);
  const [rawSource, setRawSource] = useState<any[]>([]);
  return (
    <PageContainer>
      <Container>
        <Box className="headerContainer">
          <Typography>Nossos dados</Typography>
          <Filters currFilters={currFilters} setCurrFilters={setCurrFilters} />
        </Box>
        <Box className="tableContainer">
          <MainTable
            currFilters={currFilters}
            source={source}
            setSource={setSource}
            rawSource={rawSource}
            setRawSource={setRawSource}
          />
        </Box>
      </Container>
    </PageContainer>
  );
};
