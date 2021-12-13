import { server } from "../server";
import { useLazyServerCall } from "./_base/useLazyServerCall";

const { insertMailingList } = server;

export function useInsertMailingList() {
  return useLazyServerCall(insertMailingList);
}
