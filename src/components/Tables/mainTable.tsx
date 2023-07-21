import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

export const MainTabel = () => {
  const [source, setSource] = useState<any[]>([]);
  useEffect(() => {
    api
      .get('/source')
      .then((response) => {
        setSource(response.data);
        console.log('response', response);
      })
      .catch((e) => {
        setSource([]);
        console.log('error', e);
      });
  }, []);

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
