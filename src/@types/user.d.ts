type UserRole = {
  UserRoleId?: number;
  RoleName: string;
  RoleDescription: string;
};

type User = {
  UserUserId?: number;
  UserName: string;
  UserUsername: string;
  UserPassword: string;
  UserEmail: string;
  UserPhone?: string;
  UserProfilePicture?: string;
  UserRoleId?: number;
  UserRole?: UserRole | undefined;
};

type AvailableCourses = {
  AvailableCourses?: bigint;
  UserId?: bigint;
  CourseId?: bigint;
  Course: Courses;
  User: User;
};

type Instructor = {
  InstructorId?: bigint;
  InstructorExperience?: bigint;
  UserId?: bigint;
  User: User;
};

type InstructorSpecialty = {
  InstructorEspecialtyId?: bigint;
  InstructorId?: bigint;
  TopicId?: bigint;
  Instructor: Instructor;
  Topic: Topic;
};
