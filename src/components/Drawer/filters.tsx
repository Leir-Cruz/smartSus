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
import { useEffect, useState } from 'react';

import { TCurrFilters } from '../../services/interfaces';

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

interface IFilters {
  currFilters: TCurrFilters;
  setCurrFilters: React.Dispatch<React.SetStateAction<TCurrFilters>>;
}

export const Filters = ({ currFilters, setCurrFilters }: IFilters) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedResult, setSelectedResult] = useState<string>('');
  const [selectedSex, setSelectedSex] = useState<string>('');
  const [selectedTestType, setSelectedTestType] = useState<string[]>([]);
  const [selectedSintomn, setSelectedSintomn] = useState<string>('');

  useEffect(() => {
    if (currFilters) {
      setSelectedSex(currFilters.sexo);
      setSelectedTestType(currFilters.tipoTeste);
      setSelectedResult(currFilters.resultadoTeste);
      setSelectedSintomn(currFilters.sintomas);
    }
  }, [currFilters]);

  const handleClick = () => {
    if (!currFilters) {
      setSelectedResult('');
      setSelectedSex('');
      setSelectedTestType([]);
      setSelectedSintomn('');
    }
    console.log('cuur', currFilters);
    setOpen(true);
  };

  const handleApplyFilter = () => {
    try {
      setCurrFilters((curr) => {
        return {
          ...curr,
          sexo: selectedSex,
          resultadoTeste: selectedResult,
          tipoTeste: selectedTestType,
          sintomas: selectedSintomn,
        };
      });
    } finally {
      setOpen(false);
    }
  };

  const handleResetFilters = () => {
    try {
      /*       setCurrFilters((curr) => {
        return {
          ...curr,
          sexo: '',
          resultadoTeste: '',
          tipoTeste: [],
          sintomas: '',
        };
      }); */
      setCurrFilters(null);
    } finally {
      setOpen(false);
    }
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
              onChange={() => {
                selectedSex.length ? setSelectedSex('') : setSelectedSex('M');
              }}
              checked={selectedSex.length > 0}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Teste PCR"
              onChange={() => {
                selectedTestType.includes('PCR')
                  ? setSelectedTestType(selectedTestType.filter((tt) => tt != 'PCR'))
                  : setSelectedTestType([...selectedTestType, 'PCR']);
              }}
              checked={selectedTestType.includes('PCR')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Teste Antígeno"
              onChange={() => {
                selectedTestType.includes('Antígeno')
                  ? setSelectedTestType(selectedTestType.filter((tt) => tt != 'Antígeno'))
                  : setSelectedTestType([...selectedTestType, 'Antígeno']);
              }}
              checked={selectedTestType.includes('Antígeno')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Apenas Resultado Positivo"
              onChange={() => {
                selectedResult.length
                  ? setSelectedResult('')
                  : setSelectedResult('Positivo');
              }}
              checked={selectedResult.length > 0}
            />
            {/*  //todo
                        <FormControlLabel
              control={<Checkbox />}
              label="Apenas Sintoma inclui Febre"
            /> */}
          </FormGroup>
        </Box>
        <Box className="buttons">
          <Button variant="contained" color="primary" onClick={handleResetFilters}>
            Resetar Filtro
          </Button>
          <Box className="buttonApply" onClick={handleClose}>
            <Button variant="contained" color="error" sx={{ marginLeft: '18px' }}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" onClick={handleApplyFilter}>
              Aplicar
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
