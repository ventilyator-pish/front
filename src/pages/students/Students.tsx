import React from 'react';
import Recommendations from '@components/recommendations/Recommendations';
import { StudentCards } from '@components/cards/studentCard/StudentCard';

const Students = () => {
  return (
    <>
      <Recommendations />
      <StudentCards />
    </>
  );
};

export default Students;
