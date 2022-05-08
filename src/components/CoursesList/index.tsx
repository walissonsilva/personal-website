import { ICourse } from "../../pages/cursos";
import { CourseItem } from "./CourseItem";

import * as S from "./styles";

interface CourseListProps {
  courses: ICourse[];
}

export const CoursesList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <S.CoursesListContainer>
      {courses.map((course, idx) => (
        <CourseItem key={idx} course={course} />
      ))}
    </S.CoursesListContainer>
  );
};
