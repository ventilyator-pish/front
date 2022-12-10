import { FC } from 'react'
import { Student, Tag } from "@src/utils/api/types/main"
import { StudentCard } from '../studentCard/StudentCard'
import styles from "@components/cards/studentExtendedCard/studentExtendedCard.module.scss";


interface StudentExtendedCardProps {
    student: Student
}


export const StudentExtendedCard: FC<StudentExtendedCardProps> = ({student}) => {
    // TODO: fix styles

    return <div className="d-flex">
            <StudentCard student={student} role="viewer"/>
            <div>
                <div>
                    <p>Скилы</p>
                    {student.skills?.map((tag) => (
                    <div className={styles.tagKeyword} key={tag.id}>
                        {tag.keyword}
                    </div>
                    ))}
                </div>
                <div>
                    <p>Интересы</p>
                    {student.interests_tags?.map((tag) => (
                    <div className={styles.tagKeyword} key={tag.id}>
                        {tag.keyword}
                    </div>
                    ))}
                </div>
            </div>
        </div>
}