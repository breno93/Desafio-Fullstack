import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Contato } from "./contato.entities";

@Entity("clientes")
export class Cliente {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  telefone: string;

  @CreateDateColumn()
  dataRegistro: Date;

  @OneToMany(() => Contato, (contato) => contato.cliente)
  contatos: Contato[];
}
