export default function handleResponseFromAPI(promise) {
  promise.then((resolve) => { // eslint-disable-line
    return { status: 200, body: 'Success' };
  }).catch((err) => new Error()) // eslint-disable-line
    .finally(() => console.log('Got a response from the API'));
}
