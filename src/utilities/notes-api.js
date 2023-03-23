import sendRequest from "./send-request";
const BASE_URL = '/api/notes'

export async function create(newNote) {
  return sendRequest(BASE_URL, 'POST', newNote);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  console.log(id);
  return sendRequest(`${BASE_URL}/${id}`, 'GET', {"user": id} );
}