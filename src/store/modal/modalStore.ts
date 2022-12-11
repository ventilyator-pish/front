import { http } from '@server/http';
import { urls } from '@server/urls';
import {createDomain} from 'effector';
import {User} from "@src/utils/api/types/main";

const modalsDomain = createDomain();

export const handleIsShowCreatingProjectModal = modalsDomain.createEvent<boolean>()
export const resetShowModal = modalsDomain.createEvent()

interface ModalsI {
  isShowCreatingProjectModal: boolean
}

export const $modals = modalsDomain
  .createStore<ModalsI>({isShowCreatingProjectModal: false})
  .on(handleIsShowCreatingProjectModal, (state, payload) => ({isShowCreatingProjectModal: payload}))
  .reset(resetShowModal)
