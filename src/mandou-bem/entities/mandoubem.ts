export type MandouBemProps = {
  dtCriado: Date
  mensagem: string
}

export class MandouBem{
  constructor(private props: MandouBemProps, private readonly id?: string ){}


}