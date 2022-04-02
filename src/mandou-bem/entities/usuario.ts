import { randomUUID } from 'crypto'
import { Entidade, EntidadeProps } from './entidade'

export type UsuarioProps = {
  nome: string
  email: string
  status: number
  idExcluido?: string
}

// Identificador único
// Propriedades
// Comportamento
export class Usuario extends Entidade {
  constructor(protected props: UsuarioProps & EntidadeProps, public readonly id?: string) {
    super(props, id);
  }

  get nome() {
    return this.props.nome;
  }

  get email() {
    return this.props.email;
  }

  set nome(nome: string) {
    this.props.nome = nome;
  }

  set email(email: string) {
    this.props.email = email;
  }

  public darSoquinho(){

  }

  set status(status: number) {
    if(this.props.status == 0) throw new Error("Usuário não existe");

    if(status === 0) this.props.idExcluido = randomUUID();

    this.props.status = status;
  }

  private validateEmail(email:string){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}