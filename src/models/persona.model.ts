import {Entity, model, property, hasMany} from '@loopback/repository';
import {Pedido} from './pedido.model';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idPersona?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombrePersona: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidoPersona: string;

  @property({
    type: 'string',
    required: true,
  })
  correoPersona: string;

  @property({
    type: 'string',
    required: true,
  })
  celularPersona: string;

  @property({
    type: 'string',
    required: true,
  })
  clavePersona: string;

  @hasMany(() => Pedido)
  pedidos: Pedido[];

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
