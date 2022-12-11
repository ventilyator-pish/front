import { FC } from 'react'
import { Student, Tag } from "@src/utils/api/types/main"
import { StudentCard } from '../studentCard/StudentCard'
import styles from "./studentExtendedCard.module.scss"


interface StudentExtendedCardProps {
    student: Student
}


export const StudentExtendedCard: FC<StudentExtendedCardProps> = ({student}) => {
    // TODO: fix styles
  console.log(student)
    return <div className={styles.wrapperOuter}>
            <StudentCard student={student} role="viewer"/>
            <div className={styles.wrapper}>
                <div className={styles.skills}>
                    <p>Скилы</p>
                  <div className={styles.tags}>
                    {student.skills?.map((tag) => (
                      <div className={styles.tagKeyword} key={tag.id} style={{background: `#${tag.color}`}}>
                        {tag.keyword}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                    <p>Интересы</p>
                  <div className={styles.tags}>
                    {student.interest_tags?.map((tag) => (
                      <div className={styles.tagKeyword} key={tag.id} style={{background: `#${tag.color}`}}>
                        {tag.keyword}
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
}
