import { MAILING_LIST_KEY } from './constants';
import { MailingList } from './types';
import { getUserProperty } from './utils/properties';

export function getMailingLists() {
  const mailingLists = getUserProperty<MailingList[]>(MAILING_LIST_KEY);
  return mailingLists || [];
}
