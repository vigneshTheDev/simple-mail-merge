import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Layout } from "../../components/Layout/Layout";
import { MailingListSelector } from "../../components/MailingListSelector/MailingListSelector";
import { MailMergeSteps, MailMergeStepSelector } from "../../components/MailMergeStepSelector/MailMergeStepSelector";

export const MailMerge: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(MailMergeSteps.selectMailingList);
  const [mailingList, setMailingList] = useState<string>();

  const onSelectMailingList = (key: string) => {
    setMailingList(key);
    setCurrentPage(MailMergeSteps.selectTemplate);
  };

  return (
    <Layout title="Mail Merge">
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          gap: 16,
          flexDirection: "column",
        }}
      >
        <Card style={{ flexGrow: 0, flexShrink: 0 }}>
          <MailMergeStepSelector selectedStep={currentPage} onSelect={(k) => setCurrentPage(k)} />
        </Card>

        <Card style={{ flexShrink: 1, overflowY: "auto" }}>
          <MailingListSelector onSelect={onSelectMailingList} selectedMailingList={mailingList}></MailingListSelector>
        </Card>
      </div>
    </Layout>
  );
};
