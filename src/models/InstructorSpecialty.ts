import { Instructor } from "./Instructor";
import { Topic } from "./Topic";

export interface InstructorSpecialty {
  InstructorEspecialtyId?: bigint;

  InstructorId?: bigint;

  TopicId?: bigint;

  Instructor: Instructor;

  Topic: Topic;
}
