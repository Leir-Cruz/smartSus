export type TCurrFilters = {
  dataNascimento: Date;
  dataNotificacao: Date;
  dataInicioSintomas: Date;
  dataTeste: Date;
  sexo: string;
  estadoTeste: string;
  tipoTeste: string;
  nomeCompleto: string;
  sintomas: string;
  outrosSintomas: string;
};

interface ISource {
  dataNascimento: Date;
  dataNotificacao: Date;
  dataInicioSintomas: Date;
  dataTeste: Date;
  estrangeiro: string;
  profissionalSaude: string;
  profissionalSeguranca: string;
  cbo: string;
  cpf: string;
  cns: string;
  nomeCompleto: string;
  nomeMae: string;
  paisOrigem: string;
  sexo: string;
  racaCor: string;
  passaporte: string;
  cep: '';
  logradouro: '';
  numero: '';
  complemento: '';
  bairro: '';
  estado: '';
  municipio: '';
  telefoneContato: '';
  telefone: '';
  sintomas: '';
  outrosSintomas: '';
  condicoes: '';
  estadoTeste: '';
  tipoTeste: '';
}
