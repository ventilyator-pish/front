import React from 'react';
import Recommendations from '@components/recommendations/Recommendations';
import { StudentCards } from '@components/cards/studentCard/StudentCard';
import { StudentSearch } from '@components/search/studentSearch'
import Tinder from "@components/tinder/Tinder";

const Students = () => {
  return (
    <>
      <Recommendations />
      <StudentCards />
      <Tinder />
      <StudentSearch />
    </>
  );
};

export default Students;
