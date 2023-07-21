import { Box, styled, Typography } from '@mui/material';

const Container = styled(Box)(() => ({
  display: 'flex',
  padding: '16px',
  width: 'calc(100% -32px)',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  backgroundColor: '#fff',
  borderBottom: '1px solid #F0EDEE',
  '& .title': {
    color: '#F0EDEE',
    fontSize: '20px',
    fontFamily: 'Archivo',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  '& .subTitle': {
    color: '#868E96',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  },
}));

export const Header = () => {
  return (
    <Container>
      <Typography className="title">SmartSus</Typography>
      <Typography className="subTitle">Facilite a visualização de seus dados!</Typography>
    </Container>
  );
};
