import { http } from '@server/http';
import { urls } from '@server/urls';
import { createDomain } from 'effector';
import { User } from '@src/utils/api/types/main';

const modalsDomain = createDomain();

export const handleIsShowCreatingProjectModal = modalsDomain.createEvent<boolean>();
export const handleIsShowFinancingProjectModal = modalsDomain.createEvent<boolean>();
export const handleIsShowSupportingProjectModal = modalsDomain.createEvent<boolean>();
export const handleIsShowInvitingToProjectModal = modalsDomain.createEvent<boolean>();
export const resetShowModal = modalsDomain.createEvent();

interface ModalsI {
  isShowCreatingProjectModal: boolean;
  isShowFinancingProjectModal: boolean;
  isShowSupportingProjectModal: boolean;
  isShowInvitingToProjectModal: boolean;
}

export const $modals = modalsDomain
  .createStore<ModalsI>({
    isShowCreatingProjectModal: false,
    isShowFinancingProjectModal: false,
    isShowSupportingProjectModal: false,
    isShowInvitingToProjectModal: false,
  })
  .on(handleIsShowCreatingProjectModal, (state, payload) => ({
    ...state,
    isShowCreatingProjectModal: payload,
  }))
  .on(handleIsShowFinancingProjectModal, (state, payload) => ({
    ...state,
    isShowFinancingProjectModal: payload,
  }))
  .on(handleIsShowSupportingProjectModal, (state, payload) => ({
    ...state,
    isShowSupportingProjectModal: payload,
  }))
  .on(handleIsShowInvitingToProjectModal, (state, payload) => ({
    ...state,
    isShowInvitingToProjectModal: payload,
  }))
  .reset(resetShowModal);
