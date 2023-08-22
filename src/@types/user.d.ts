type UserRole = {
  userRoleId?: number;
  roleName: string;
  roleDescription: string;
};

type User = {
  userUserId?: number;
  userName: string;
  userUsername: string;
  userPassword: string;
  userEmail: string;
  userPhone?: string;
  userProfilePicture?: string;
  userRoleId?: number;
  userRole?: UserRole | undefined;
};

type AvailableCourses = {
  availableCourses?: bigint;
  userId?: bigint;
  courseId?: bigint;
  course: Courses;
  user: User;
};

type Instructor = {
  instructorId?: bigint;
  instructorExperience?: bigint;
  userId?: bigint;
  user: User;
};

type InstructorSpecialty = {
  instructorEspecialtyId?: bigint;
  instructorId?: bigint;
  topicId?: bigint;
  instructor: Instructor;
  topic: Topic;
};
