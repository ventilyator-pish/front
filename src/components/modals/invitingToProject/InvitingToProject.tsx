import React, {useCallback, useEffect, useState} from 'react';
import {$modals, resetShowModal} from "@store/modal/modalStore";
import {Button, Modal} from "react-bootstrap";
import styles from "@components/modals/creatingProject/CreatingProjectModal.module.scss";
import {CustomInputWithLabel} from "@components/modals/creatingProject/CreatingProjectModal";
import {useStore} from "effector-react";
import {http} from "@server/http";
import {urls} from "@server/urls";
import CustomSelect from "@components/UI/CustomSelect";
import {Company} from "@src/utils/api/types/main";
import {$me} from "@store/me/meStore";
import {useParams} from "react-router-dom";

const InvitingToProject = () => {
  const modal = useStore($modals)
  const {id} = useParams()
  const me = useStore($me)
  const [companies, setCompanies] = useState<{value: number, label: string}[]>([])
  const [company, setCompany] = useState<{value: number, label: string} | null>(null)
  const sendRequest = useCallback(async () => {
    if (id && company){
      await http.post(urls.profileInviteToProject(id), {project_id: company.value})
        .finally(() => {
          setCompanies([])
          resetShowModal()
        })
    }
  }, [company, id])

  const getMyProjects = async () => {
    if (me?.company?.id) {
      await http.get<Company[]>(urls.projectsByCompany(me.company.id))
        .then(({data}) => setCompanies(data.map(company => ({value: company.id, label: company.name}))))
    }
  }

  useEffect(() => {
    getMyProjects().then()
  }, [modal.isShowInvitingToProjectModal])

  return (
    <Modal show={modal.isShowInvitingToProjectModal} size="lg" centered
           onHide={resetShowModal} onClick={(e: any) => e.stopPropagation()}>
      <Modal.Header closeButton>
        <Modal.Title>Приглашение в проект</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <CustomSelect options={companies} placeholder={'Выберите компанию'} value={company} onChange={(res: {value: number, label: string}) => setCompany(res)}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={sendRequest} className={styles.createBtn}>
          Пригласить в проект
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InvitingToProject;
