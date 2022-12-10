import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from './StudentCard.module.scss';
import { IStudent } from '@lib/types/cards/cards';
import { students } from '@components/cards/studentCard/Students.mock';
import { Form } from 'react-bootstrap';
import { useStore } from 'effector-react';
import { $students, getStudents } from '@store/students/studentsStore';
import { Student } from '@src/utils/api/types/main';
import { combineInfo } from '@src/utils/combineInfo';

interface StudentCardProps {
  role: 'redactor' | 'viewer';
  student: Student;
}

export const StudentCard: FC<StudentCardProps> = ({ role, student }) => {
  const {
    id,
    first_name,
    course,
    qualification_name,
    specialization_name,
    faculty_name,
    isu,
    coverage,
    user,
    is_verified,
    is_public,
    last_name,
  } = student;
  const [infoValue, setInfo] = useState('');

  const infoHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInfo(e.target.value);
  };
  const isRedactor = useCallback(() => {
    return role === 'redactor';
  }, [role]);
  return (
    <div className={styles.student}>
      {/*{photo ? <img src={photo} alt="photo" className={styles.avatar} /> : <div></div>}*/}
      <div className={styles.name}>
        {first_name} {last_name}
      </div>
      <div>{combineInfo(course, qualification_name, faculty_name)}</div>
      <Form.Control
        as={'textarea'}
        disabled={!isRedactor()}
        className={styles.about}
        value={infoValue}
        onChange={infoHandler}
      />
    </div>
  );
};

interface StudentsProps {
  role?: 'redactor' | 'viewer';
}

export const StudentCards: FC<StudentsProps> = ({ role = 'viewer' }) => {
  const students = useStore($students);
  useEffect(() => {
    getStudents().then();
  }, []);
  return (
    <div className={styles.students}>
      {students.map((student) => (
        <StudentCard
          role={role}
          key={student.id}
          student={student}
        />
      ))}
    </div>
  );
};
