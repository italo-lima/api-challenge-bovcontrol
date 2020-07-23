import {
  ObjectID,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ObjectIdColumn,
} from 'typeorm';

@Entity('animals')
class Animal {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column()
  age_months: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Animal;
