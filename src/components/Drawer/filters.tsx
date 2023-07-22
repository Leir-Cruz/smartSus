import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  styled,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const Container = styled(Drawer)(() => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    bg: '#fff',
    gap: '24px',
    width: 400,
    height: 'calc(100vh - 48px)',
    right: '0px',
    top: 'calc(50% - 100vh/2)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',

    '& .title': {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '16px',
      textAlign: 'left',
      padding: '10px 0px',
      color: '#868E96',
    },

    '& .allFiltersContainer': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '24px',
      width: '100%',
    },

    '& .buttons': {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      gap: '12px',

      '& .buttonApply': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 0,
        gap: '8px',
      },

      '& .MuiButtonBase-root': {
        minWidth: 'fit-content',
      },
    },
  },
}));

export const Filters = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Filtros
      </Button>
      <Container open={open} anchor="right">
        <Typography className="title">Filtros</Typography>
        <Box className="filtersContainer">
          <FormGroup sx={{ overflowY: 'scroll', flexWrap: 'nowrap', width: '100%' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Sexo Masculino"
              onClick={() => handleClick()}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Teste PCR"
              onClick={() => handleClick()}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Teste Antígeno"
              onClick={() => handleClick()}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Resultado Positivo"
              onClick={() => handleClick()}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Sintoma inclui Febre"
              onClick={() => handleClick()}
            />
          </FormGroup>
        </Box>
        <Box className="buttons">
          <Button variant="contained" color="primary" onClick={handleClose}>
            Resetar Filtro
          </Button>
          <Box className="buttonApply" onClick={handleClose}>
            <Button variant="contained" color="error" sx={{ marginLeft: '18px' }}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary">
              Aplicar
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
