import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {GetProjects, Project, Review} from "@src/utils/api/types/main";

const reviewsDomain = createDomain();

export const getReviews = reviewsDomain.createEffect(async (id: string) => {
  const res = await http.get<Review[]>(urls.reviews(id));
  return res.data;
});

export const $reviews = reviewsDomain
  .createStore<Review[]>([])
  .on(getReviews.doneData, (_, payload) => payload);
