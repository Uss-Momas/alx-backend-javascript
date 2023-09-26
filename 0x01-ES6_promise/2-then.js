export default function handleResponseFromAPI(promise) {
  promise.then((resolve) => { // eslint-disable-line
    console.log('Got a response from the API');
    return { status: 200, body: 'Success' };
  }, (err) => Error()); // eslint-disable-line
}
