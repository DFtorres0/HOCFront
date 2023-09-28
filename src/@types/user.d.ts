type Role = "Administrador" | "Instructor" | "Estudiante";

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
  availableCoursesId?: Number;
  userId?: Number;
  courseId?: Number;
  course?: Courses;
  user?: User;
};

type Instructor = {
  instructorId?: Number;
  instructorExperience?: Number;
  userId?: Number;
  user: User;
};

type InstructorSpecialty = {
  instructorEspecialtyId?: Number;
  instructorId?: Number;
  topicId?: Number;
  instructor: Instructor;
  topic: Topic;
};
