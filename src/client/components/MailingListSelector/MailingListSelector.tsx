import { Skeleton, Spin, Typography } from "antd";
import React, { CSSProperties, useMemo } from "react";
import { LoadingOutlined } from "@ant-design/icons";

import { MailingList } from "../../../server/types";
import { useMailingLists } from "../../hooks/useMailingLists";
import { SearchableList } from "../SearchableList/SearchableList";

export interface MailingListSelectorProps {
  onSelect: (mailingList: MailingList) => void;
  selectedMailingList?: MailingList;
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
      {loadingMailingLists ? (
        // <Spin indicator={<LoadingOutlined />} ></Spin>
        <>
          <Skeleton.Input active />
          <Skeleton active />
        </>
      ) : (
        <SearchableList
          items={items}
          onSelect={(key) => {
            const selectedList = mailingLists!.find((item) => item.id === key);
            if (selectedList) onSelect(selectedList);
          }}
          selectedItem={selectedMailingList?.id}
          style={{ flex: "1 1", overflowY: "auto" }}
        />
      )}
    </div>
  );
};
