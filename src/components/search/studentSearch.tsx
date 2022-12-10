import TagSelect from "@components/UI/TagSelect/TagSelect"
import styles from './studentSearch.module.scss'
import { Student, Tag } from "@src/utils/api/types/main";
import { useState } from "react";
import { useEffect } from "react";
import { getRelatedStudents } from "@store/students/studentsStore";
import { StudentExtendedCard } from "@components/cards/studentExtendedCard/studentExtendedCard";


export const StudentSearch = () => {
    const [tags, onTagsChange] = useState<Tag[]>([]);
    const [students, setStudents] = useState<Student[]>([]);

    const handleTagChange = (tags: Tag[]) => {
        console.log(tags)
        onTagsChange(tags)
    }

    useEffect(() => {
        const tagsProp = tags.map((tag) => tag.id).join(",");
        getRelatedStudents(tagsProp).then(
            (students) => setStudents(students));
    }, [tags, setStudents])

    return <div>
        <h3 className={styles.activeLink}>Найдите подходящего специалиста</h3>
        <TagSelect handleTagChange={handleTagChange}/>
        {students.map((student) => <StudentExtendedCard key={student.id} student={student}/>)}
    </div>
}