import { useServerCall } from './_base/useServerCall';
import { server } from '../server';

const { getMailingLists } = server;

export function useMailingLists() {
  return useServerCall(getMailingLists);
}
