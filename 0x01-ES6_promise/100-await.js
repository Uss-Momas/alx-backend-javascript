import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return await Promise // eslint-disable-line
    .all([uploadPhoto(), createUser()])
    .then((values) => ({ photo: values[0], user: values[1] }))
    .catch(() => ({ photo: null, user: null }));
}
