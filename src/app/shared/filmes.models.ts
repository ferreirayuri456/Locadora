export interface Filmes {
  titulo: string,
  linkFoto?: string,
  dataLancamento: Date,
  descricao: string,
  notaIMDb: number,
  linkIMDb: string,
  genero: Array<string>;
}
