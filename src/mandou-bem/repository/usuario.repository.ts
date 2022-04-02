import { Usuario } from './../entities/usuario';

export interface IUsuarioRepository{
  findById(id: string): Promise<Usuario>;
  findByEmail(email: string): Promise<Usuario>;
  save(usuario: Usuario): Promise<Usuario>;
  update(usuario: Usuario): Promise<Usuario>;
}

export class MySql{
  query(sql: string): Promise<any>{
    return Promise.resolve([]);
  }
}

export class UsuarioRepositoryMySql implements IUsuarioRepository {
  constructor(private _mySql: MySql){}
  async findById(id: string): Promise<Usuario> {
    const userResult = this._mySql.query("SELECT * FROM usuario WHERE id = '" + id + "'");
  
    return new Usuario({});
  }
  findByEmail(email: string): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
  save(usuario: Usuario): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
  update(usuario: Usuario): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }

}