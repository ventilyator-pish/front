import React, {useCallback, useState} from 'react';
import {$modals, resetShowModal} from "@store/modal/modalStore";
import {Button, Modal} from "react-bootstrap";
import styles from "@components/modals/creatingProject/CreatingProjectModal.module.scss";
import {CustomInputWithLabel} from "@components/modals/creatingProject/CreatingProjectModal";
import {useStore} from "effector-react";
import {useParams} from "react-router-dom";
import {http} from "@server/http";
import {urls} from "@server/urls";

const FinancingModal = () => {
  const {id} = useParams()
  const modal = useStore($modals);
  const [sum, setSum] = useState<string>('')
  const handleSum = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSum(e.target.value)
  }

  const sendRequest = useCallback(async () => {
    await http.post(urls.crowdfounding(), {goal: sum, project_id: id})
      .finally(() => {
        setSum('')
        resetShowModal()
      })

  }, [sum, id])
  return (
    <Modal show={modal.isShowFinancingProjectModal} size="lg" centered onHide={resetShowModal}>
      <Modal.Header closeButton>
        <Modal.Title>Финансирование проекта</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <CustomInputWithLabel
          label={'Введите сумму для финансирования'}
          name={'description'}
          value={sum}
          onChange={handleSum}
          placeholder={'Сумма'}
          type={'number'}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={sendRequest} className={styles.createBtn}>
          Запросить финансирование
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FinancingModal;
