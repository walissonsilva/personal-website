import { ICourse } from "../../../pages/cursos";
import * as S from "./styles";

interface CourseItemProps {
  course: ICourse;
}

export const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  return (
    <S.CourseItemContainer
      href={course.youtubeUrl}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <S.Thumbnail src={course.imageUrl} alt={course.title} />

      <S.CourseInfo>
        <S.CourseTitle>{course.title}</S.CourseTitle>
        <S.Category>{course.category}</S.Category>

        <S.Description
          dangerouslySetInnerHTML={{ __html: course.description }}
        />
      </S.CourseInfo>
    </S.CourseItemContainer>
  );
};
