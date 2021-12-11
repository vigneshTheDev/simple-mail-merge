import { message } from "antd";
import React, { useState } from "react";
import { MailingList, Template } from "../../../server/types";

import { Card } from "../../components/Card/Card";
import { Layout } from "../../components/Layout/Layout";
import { MailMergeSteps, MailMergeStepSelector } from "../../components/MailMergeStepSelector/MailMergeStepSelector";
import { Preview } from "./Preview";
import { ScheduleAndSend, ScheduleConfig } from "./ScheduleAndSend";
import { SelectMailingList } from "./SelectMailingList";
import { SelectTemplate } from "./SelectTemplate";

export const MailMerge: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(MailMergeSteps.selectMailingList);

  const [mailingList, setMailingList] = useState<MailingList>();
  const [template, setTemplate] = useState<Template>();
  const [schedule, setSchedule] = useState<ScheduleConfig>();
  const [scheduleType, setScheduleType] = useState<"now" | "later">();

  const onSelectMailingList = (mailingList: MailingList) => {
    setMailingList(mailingList);
  };

  const onSchedule = (schedule: ScheduleConfig) => {
    setSchedule(schedule);
    setScheduleType("later");
    goNext();
  };

  const onSendNow = () => {
    setScheduleType("now");
    goNext();
  };

  const goNext = () => {
    let nextPage = currentPage;
    switch (currentPage) {
      case MailMergeSteps.selectMailingList:
        nextPage = MailMergeSteps.selectTemplate;
        break;
      case MailMergeSteps.selectTemplate:
        nextPage = MailMergeSteps.scheduleAndSend;
        break;
      case MailMergeSteps.scheduleAndSend:
        if (!mailingList) return message.error("Please select a mailing list");
        if (!template) return message.error("Please select a template");

        nextPage = MailMergeSteps.preview;
        break;
    }
    setCurrentPage(nextPage);
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
        {currentPage !== MailMergeSteps.preview && (
          <Card style={{ flex: "0 0" }}>
            <MailMergeStepSelector selectedStep={currentPage} onSelect={(k) => setCurrentPage(k)} />
          </Card>
        )}

        {/* Step 1: Select Mailing List */}
        {currentPage === MailMergeSteps.selectMailingList ? (
          <SelectMailingList
            onNext={goNext}
            onSelect={onSelectMailingList}
            selectedMailingList={mailingList}
            style={{ flex: "1 1" }}
          />
        ) : /* Step 2: Select Template */
        currentPage === MailMergeSteps.selectTemplate ? (
          <SelectTemplate onNext={goNext} selectedTemplate={template} onSelect={setTemplate} />
        ) : /* Step 3: Schedule / Send */
        currentPage === MailMergeSteps.scheduleAndSend ? (
          <ScheduleAndSend onSelectSchedule={onSchedule} onSelectSendNow={onSendNow} schedule={schedule} />
        ) : currentPage === MailMergeSteps.preview ? (
          <Preview
            mailingList={mailingList!}
            template={template!}
            scheduleType={scheduleType!}
            schedule={schedule}
            onEdit={() => setCurrentPage(MailMergeSteps.selectMailingList)}
          />
        ) : null}
      </div>
    </Layout>
  );
};
