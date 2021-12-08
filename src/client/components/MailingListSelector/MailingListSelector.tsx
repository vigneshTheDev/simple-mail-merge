import { Typography } from "antd";
import React, { CSSProperties, useMemo } from "react";
import { useMailingLists } from "../../hooks/useMailingLists";
import { SearchableList } from "../SearchableList/SearchableList";

export interface MailingListSelectorProps {
  onSelect?: (key: string) => void;
  selectedMailingList?: string;
  style?: CSSProperties;
}

export const MailingListSelector: React.FC<MailingListSelectorProps> = ({
  onSelect,
  selectedMailingList,
  style = {},
}) => {
  const { data: mailingLists, loading: loadingMailingLists } = useMailingLists();
  const items = useMemo(
    () => (mailingLists ? mailingLists.map((m) => ({ label: m.name, key: m.id })) : []),
    [mailingLists]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, ...style }}>
      <Typography.Title level={4} style={{ color: "#595959", margin: 0, flex: "0 0", fontWeight: 300 }}>
        Select a Mailing List
      </Typography.Title>

      <SearchableList
        items={items}
        onSelect={(key) => {
          onSelect && onSelect(key);
        }}
        selectedItem={selectedMailingList}
        style={{ flex: "1 1", overflowY: "auto" }}
      />
    </div>
  );
};
