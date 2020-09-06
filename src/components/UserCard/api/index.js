import config from './../config';
import queryString from 'querystring';
import _ from 'lodash';

const {
  api: {
    seed,
    baseUrl,
    user: { fields: userFields, allowedParams: getUserParams },
  },
} = config;
const getUsers = (options) => {
  const defaultOptions = {
    page: 1,
    seed,
    results: 10,
    inc: userFields,
  };
  const queryParamString = queryString.stringify(defaultOptions, {
    arrayFormat: 'comma',
  });
  return fetch(`${baseUrl}?${queryParamString}`).then((result) =>
    result.json()
  );
};
export default getUsers;
