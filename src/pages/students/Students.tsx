import React from 'react';
import Recommendations from '@components/recommendations/Recommendations';
import { StudentCards } from '@components/cards/studentCard/StudentCard';
import { StudentSearch } from '@components/search/studentSearch'

const Students = () => {
  return (
    <>
      <Recommendations />
      <StudentCards />
      <StudentSearch />
    </>
  );
};

export default Students;
