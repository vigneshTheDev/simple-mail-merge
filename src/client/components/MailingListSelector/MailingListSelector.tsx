import { Typography } from "antd";
import React, { useMemo } from "react";
import { useMailingLists } from "../../hooks/useMailingLists";
import { SearchableList } from "../SearchableList/SearchableList";

export interface MailingListSelectorProps {
  onSelect?: (key: string) => void;
  selectedMailingList?: string;
}

export const MailingListSelector: React.FC<MailingListSelectorProps> = ({ onSelect, selectedMailingList }) => {
  const { data: mailingLists, loading: loadingMailingLists } = useMailingLists();
  const items = useMemo(
    () => (mailingLists ? mailingLists.map((m) => ({ label: m.name, key: m.id })) : []),
    [mailingLists]
  );

  console.log({ mailingLists, items });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Typography.Title level={5} style={{ color: "#595959", margin: 0 }}>
        Select a Mailing List
      </Typography.Title>

      <SearchableList
        items={items}
        onSelect={(key) => {
          onSelect && onSelect(key);
        }}
        selectedItem={selectedMailingList}
      />
    </div>
  );
};
