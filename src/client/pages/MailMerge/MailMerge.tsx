import React, { useState } from "react";

import { Card } from "../../components/Card/Card";
import { Layout } from "../../components/Layout/Layout";
import { MailMergeSteps, MailMergeStepSelector } from "../../components/MailMergeStepSelector/MailMergeStepSelector";
import { ScheduleAndSend } from "./ScheduleAndSend";
import { SelectMailingList } from "./SelectMailingList";
import { SelectTemplate } from "./SelectTemplate";

export const MailMerge: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(MailMergeSteps.selectTemplate);
  const [mailingList, setMailingList] = useState<string>();
  const [template, setTemplate] = useState<string>();

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
        <Card style={{ flex: "0 0" }}>
          <MailMergeStepSelector selectedStep={currentPage} onSelect={(k) => setCurrentPage(k)} />
        </Card>
        {/* Step 1: Select Mailing List */}
        {currentPage === MailMergeSteps.selectMailingList ? (
          <SelectMailingList onSelect={onSelectMailingList} selectedMailingList={mailingList} style={{ flex: "1 1" }} />
        ) : currentPage === MailMergeSteps.selectTemplate ? (
          <SelectTemplate selectedTemplate={template} onSelect={setTemplate} />
        ) : currentPage === MailMergeSteps.scheduleAndSend ? (
          <ScheduleAndSend />
        ) : null}
      </div>
    </Layout>
  );
};
