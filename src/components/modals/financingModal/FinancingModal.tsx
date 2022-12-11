import React, {FC, useCallback, useState} from 'react';
import {$modals, resetShowModal} from "@store/modal/modalStore";
import {Button, Modal} from "react-bootstrap";
import styles from "@components/modals/creatingProject/CreatingProjectModal.module.scss";
import {CustomInputWithLabel} from "@components/modals/creatingProject/CreatingProjectModal";
import {useStore} from "effector-react";
import {useParams} from "react-router-dom";
import {http} from "@server/http";
import {urls} from "@server/urls";
import {CrowdFounding} from "@src/utils/api/types/main";

interface FinancingModalProps {
  crowdfunding?: CrowdFounding
}

const FinancingModal: FC<FinancingModalProps> = ({crowdfunding}) => {
  const {id} = useParams()
  const modal = useStore($modals);
  const [sum, setSum] = useState<string>('')
  const handleSum = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSum(e.target.value)
  }

  const sendRequest = useCallback(async () => {
    if (modal.isShowFinancingProjectModal) {
      await http.post(urls.crowdfounding(), {goal: sum, project_id: id})
        .finally(() => {
          setSum('')
          resetShowModal()
        })
    } else if (modal.isShowSupportingProjectModal && crowdfunding) {
      await http.post(urls.projectByIdDonate(crowdfunding.project.id), {amount: +sum})
        .finally(() => {
          setSum('')
          resetShowModal()
        })
    }


  }, [sum, id])
  return (
    <Modal show={modal.isShowFinancingProjectModal || modal.isShowSupportingProjectModal} size="lg" centered
           onHide={resetShowModal} onClick={(e: any) => e.stopPropagation()}>
      <Modal.Header closeButton>
        <Modal.Title>Финансирование проекта</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <CustomInputWithLabel
          label={modal.isShowFinancingProjectModal ? 'Введите сумму для финансирования' : "Введите сумму для поддержки"}
          name={'description'}
          value={sum}
          onChange={handleSum}
          placeholder={'Сумма'}
          type={'number'}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={sendRequest} className={styles.createBtn}>
          {
            modal.isShowFinancingProjectModal ? 'Запросить финансирование' : "Поддержать"
          }

        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FinancingModal;
