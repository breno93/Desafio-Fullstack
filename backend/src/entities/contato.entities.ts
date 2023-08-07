import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Cliente } from "./cliente.entities";

@Entity("contatos")
export class Contato {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @CreateDateColumn()
  dataRegistro: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.contatos)
  cliente: Cliente;
}
