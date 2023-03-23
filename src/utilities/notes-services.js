import * as notesAPI from './notes-api'


export async function create(newNote) {
  const note = await notesAPI.create(newNote);
  return note;
}