/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TicketUpdateManyWithoutProjectsInput } from "./TicketUpdateManyWithoutProjectsInput";
import { Type } from "class-transformer";

@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TicketUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => TicketUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => TicketUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  tickets?: TicketUpdateManyWithoutProjectsInput;
}

export { ProjectUpdateInput as ProjectUpdateInput };
