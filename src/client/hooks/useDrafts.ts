import { useServerCall } from "./_base/useServerCall";
import { server } from "../server";

export function useDrafts() {
  return useServerCall(server.getTemplates);
}
