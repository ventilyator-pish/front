import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {GetProjects, Project, Review} from "@src/utils/api/types/main";
import Cookies from 'js-cookie';


const reviewsDomain = createDomain();

interface addReview {
  student_id: string
  text: string
}


export const getReviews = reviewsDomain.createEffect(async (id: string) => {
  const res = await http.get<Review[]>(urls.reviews(id));
  return res.data;
});


export const addReview = reviewsDomain.createEffect(async ({student_id, text}: addReview) => {
  const res = await http.post<Review>(urls.createReview(), {
    "student": student_id,
    "review": text,
  }, {
    headers: {
      "X-CSRFToken": Cookies.get("csrftoken")
    }
  });
  return res.data;
})

export const $reviews = reviewsDomain
  .createStore<Review[]>([])
  .on(getReviews.doneData, (_, payload) => payload);
