// napravi funckiju buildResponsePayload

// primjer kako handleBadRequest treba da izgleda:
// return buildResponsePayload(400, 'Invalid input provider')  bila 3 argumenta napisah da budu 2 ('bad request')

// napravi funkciju buildError(statusCode=400, message="Bad request"){
// buildResponsePaylaod(statusCode, message),
// }

// ideja je da svaka od ovih funkcija ispod poziva tu buildError funkciju,
// a funkcija buildError ona poziva buildResponsePayload i po defaultu baca bad request,

function buildError(status: number, message: string) {
  return buildResponsePayload(status, message);
}

function buildResponsePayload(status: number, message: string) {
  return { status, message };
}

const errorFactory = {
  handleBadRequest() {
    return buildError(400, "Bad request");
  },

  internalError() {
    return buildError(500, "Internal server error");
  },

  handleNotFound() {
    return buildError(404, "Not found");
  },
};


export default errorFactory;
