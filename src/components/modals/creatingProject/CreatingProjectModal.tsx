import React, { ChangeEvent, ElementType, FC, useCallback, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import styles from './CreatingProjectModal.module.scss';
import { Formik } from 'formik';
import { Form as FormBootstrap } from 'react-bootstrap';
import { CreatingProjectType } from '@src/utils/api/types/main';
import { http } from '@server/http';
import { urls } from '@server/urls';
import { useStore } from 'effector-react';
import { $modals, handleIsShowCreatingProjectModal, resetShowModal } from '@store/modal/modalStore';
import { toast } from 'react-toastify';

interface CustomInputWithLabelProps {
  value?: string;
  onChange:
    | ((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
    | ((e: ChangeEvent<HTMLInputElement>) => Promise<void>);
  placeholder?: string;
  name: string;
  as?: ElementType<any>;
  label: string;
  type: string;
}

export const CustomInputWithLabel: FC<CustomInputWithLabelProps> = ({
  type,
  label,
  as = 'input',
  value,
  onChange,
  placeholder,
  name,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.label}>{label}</div>
      <FormBootstrap.Control
        as={as}
        name={name}
        onChange={onChange}
        value={value}
        className={styles.input}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

interface CreatingProjectModalProps {
  type?: 'student';
}
const CreatingProjectModal: FC<CreatingProjectModalProps> = ({type}) => {
  const modal = useStore($modals);
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };
  const handleName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(e.target.value);
  };
  const handleDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const resetFields = () => {
    setFile(null)
    setName('')
    setDescription('')
  }
  const createProject = useCallback(async () => {
    const formData = new FormData();
    if (file) {
      formData.append('image', file);
    }
    formData.append('name', name);
    formData.append('description', description);
    await http
      .post(urls.projects(), formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => toast.success('Создание проекта прошло успешно'))
      .catch((e) => console.log(e.data))

      .finally(() => {
        resetShowModal();
        resetFields();
      });
  }, [file, name, description]);
  return (
    <Modal show={modal.isShowCreatingProjectModal} size="lg" centered onHide={resetShowModal}>
      <Modal.Header closeButton>
        <Modal.Title>Создание проекта</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <CustomInputWithLabel
          label={'Аватар проекта'}
          name={'file'}
          onChange={handleFileUpload}
          type={'file'}
        />
        <CustomInputWithLabel
          label={'Название'}
          name={'name'}
          value={name}
          onChange={handleName}
          placeholder={'Название'}
          type={'text'}
        />
        <CustomInputWithLabel
          label={'Описание'}
          as={'textarea'}
          name={'description'}
          value={description}
          onChange={handleDescription}
          placeholder={'Описание'}
          type={'text'}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={createProject} className={styles.createBtn}>
          Создать
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatingProjectModal;
