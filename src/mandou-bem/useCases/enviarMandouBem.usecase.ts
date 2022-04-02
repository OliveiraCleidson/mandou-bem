import { IUsuarioRepository } from './../repository/usuario.repository';
import { IUserCase, UserCaseResponse } from './../../@seedwork/interfaces/userCase.interface';

export type EnviarMandouBemDto = {
  idUsuarioMandou: string
  idUsuarioRecebe: string
  mensagem: string
}

// SOLID
// Single Responsability Principle

export class EnviarMandouBemUseCase implements IUserCase<EnviarMandouBemDto, void> {
  constructor(private _repository: IUsuarioRepository){}
  execute(request: EnviarMandouBemDto): Promise<UserCaseResponse<void>> {
    // Usuario Mandou Existe?
    // Usuario Recebe Existe?
    // Mensagem é válida? (min 5 caracteres)

    this._repository.
    // Criar um Mandou Bem
    // Persistir Mandou Bem

    // Foi um sucesso
  }



}