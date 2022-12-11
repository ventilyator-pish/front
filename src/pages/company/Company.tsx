import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Company.module.scss';
import { STUDENT } from '@src/routes/routes';
import noPhoto from '@assets/mock/noImage.png';
import { combineInfo } from '@src/utils/combineInfo';
import { Button, Form } from 'react-bootstrap';
import cn from 'classnames';
import { $company, getCompanyByIdFx } from '@store/company/companyStore';
import { useStore } from 'effector-react';
import CompanyCard from '@components/cards/companyCard/CompanyCard';
import ProfileInfo from '@components/profile/profileInfo/ProfileInfo';
import ProjectsFromCompany from "@components/company/projectsFromCompany/ProjectsFromCompany";
import CreatingProjectModal from "@components/modals/creatingProject/CreatingProjectModal";
import {$modals} from "@store/modal/modalStore";

const Company = () => {
  const { id } = useParams();
  const company = useStore($company);

  useEffect(() => {
    if (id) {
      getCompanyByIdFx(id);
    }
  }, [id]);
  return (
    <>
      <CreatingProjectModal />
      {company && (
        <div className={styles.wrapper}>
          <CompanyCard company={company} />
          <div className={styles.aboutCompany}>
            <ProfileInfo type={'company'} />
            <ProjectsFromCompany />
          </div>
        </div>
      )}
    </>
  );
};

export default Company;
