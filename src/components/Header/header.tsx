import { Box, styled, Typography } from '@mui/material';

import marca from '../../assets/marca.png';
const Container = styled(Box)(() => ({
  display: 'flex',
  padding: '8px 16px',
  width: 'calc(100% -32px)',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  backgroundColor: '#fff',
  borderBottom: '1px solid #F0EDEE',
  '& img': {
    width: '250px',
    height: '40px',

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
      <img src={marca} alt="marca" />
      <Typography className="subTitle">Facilite a visualização de seus dados!</Typography>
    </Container>
  );
};
