import { http } from '@server/http';
import { urls } from '@server/urls';
import {createDomain} from 'effector';
import {User} from "@src/utils/api/types/main";

const profileDomain = createDomain();

export const showFeedBack = profileDomain.createEvent()
export const resetShowFeedBack = profileDomain.createEvent()

interface ProfileI {
  shouldShowFeedback: boolean
}

export const $profile = profileDomain
  .createStore<ProfileI>({shouldShowFeedback: false})
  .on(showFeedBack, (state, payload) => ({shouldShowFeedback: !state.shouldShowFeedback}))
  .reset(resetShowFeedBack)
