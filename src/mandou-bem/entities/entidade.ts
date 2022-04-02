export type EntidadeProps = {
  dtCriado: Date
  dtAtualizado: Date
}
export abstract class Entidade {
  constructor(protected props: EntidadeProps, public readonly id?: string) {}
}