// src/category/models/category.model.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;

  @Field()
  displayName: string;

  @Field()
  icon: string;
}
