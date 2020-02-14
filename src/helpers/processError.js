/**
 * Used by actions to process a non-OK response. Takes in the result, which is
 * the JSON body of the response, and returns a single string containing the
 * entire error message.
 *
 * Most of the time the returned string originated from a single field in the
 * result object. However, in the case of payload validation errors (which
 * occur when the request's arguments are invalid, meaning some arg was missing
 * or the wrong type), there can be multiple error messages split up as the
 * values of an object.
 */
export default function processError(result) {
  if (result.errors && Object.keys(result.errors).length > 0) {
    // payload validation errors
    const errors = [];
    for (const field of Object.keys(result.errors)) {
      errors.push(`Field ${field} Error: ${result.errors[field]}`);
    }
    return errors.join('. ');
  }
  if (result.error) {
    // our normal errors (most (preferably all) of the errors we wrote
    // should be in this format)
    return result.error;
  }
  if (result.message) {
    // this includes uncaught 500s and possibly other errors. If it is
    // _only_ the uncaught 500s, we may want to return something more
    // user friendly that just 'Internal Server Error' which is what
    // result.message is in those cases.
    return result.message;
  }
  if (typeof result === 'string') {
    // Auth errors. This could include logging in with wrong credentials,
    // or making a request that requires jwt without the authorization
    // header.
    return result;
  }
  console.log('processError has encountered an error with unexpected format:', result);
  return "We're sorry, but an unknown error has occurred.";
}