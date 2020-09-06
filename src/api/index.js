import { DATA_URL } from './../configs/api';
import queryString from 'query-string';
import { mdiFileRestore } from '@mdi/js';

export const getUIsers = ({
  inc = ['id', 'name', 'email', 'picture'],
  ...rest
} = {}) => {
  return fetch(
    `${DATA_URL}?${queryString.stringify(
      { inc, ...rest },
      { arrayFormat: 'comma' }
    )}`
  ).then((res) => res.json());
};
