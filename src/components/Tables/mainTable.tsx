import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { TCurrFilters } from '../../services/interfaces';

interface IMainTable {
  currFilters: TCurrFilters;
}

export const MainTable = ({ currFilters }: IMainTable) => {
  const [source, setSource] = useState<any[]>([]);
  const [rawSource, setRawSource] = useState<any[]>([]);
  useEffect(() => {
    api
      .get('/source')
      .then((response) => {
        setRawSource(response.data);
        console.log('response', response);
      })
      .catch((e) => {
        setRawSource([]);
        console.log('error', e);
      });
  }, []);

  useEffect(() => {
    if (!currFilters && rawSource) {
      setSource(rawSource);
    } else {
      setSource(
        rawSource.filter((src) => {
          if (currFilters.sexo.length && src.sexo == currFilters.sexo) return true;
          if (currFilters.tipoTeste.length > 0 && currFilters.resultadoTeste.length) {
            if (
              currFilters.tipoTeste.includes(src.tipoTeste) &&
              src.resultadoTeste == currFilters.resultadoTeste
            )
              return true;
          } else {
            if (
              currFilters.tipoTeste.length > 0 &&
              currFilters.tipoTeste.includes(src.tipoTeste)
            )
              return true;
            if (
              currFilters.resultadoTeste.length &&
              src.resultadoTeste == currFilters.resultadoTeste
            )
              return true;
          }
        }),
      );
    }
  }, [currFilters, rawSource]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Nome Completo</TableCell>
            <TableCell align="left">Cpf</TableCell>
            <TableCell align="left">Tipo Teste</TableCell>
            <TableCell align="left">Resultado Teste</TableCell>
            <TableCell align="left">Data coleta teste</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {source.map((src) => (
            <TableRow
              key={src.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { cursor: 'pointer' },
              }}
            >
              <TableCell component="th" scope="src">
                {src.id}
              </TableCell>
              <TableCell align="left">{src.nomeCompleto}</TableCell>
              <TableCell align="left">{src.cpf}</TableCell>
              <TableCell align="left">{src.tipoTeste}</TableCell>
              <TableCell align="left">{src.resultadoTeste}</TableCell>
              <TableCell align="left">{src.dataTeste}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
