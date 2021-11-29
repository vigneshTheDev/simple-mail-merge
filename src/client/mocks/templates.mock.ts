import { Template } from "../../server/types";

export const templateMock: Template[] = [
  {
    body: `<div>
            <div>Hello {{First Name}},</div>
            <div>This Diwali, take home your favourite PCs, Laptops and More.</div>
    </div>`,
    subject: "Upto 50% off on Laptops",
    type: "GMail",
    id: "1",
  },
  {
    body: `<div>
            <div>Hello {{First Name}},</div>
            <div>This Diwali, take home your favourite PCs, Laptops and More.</div>
    </div>`,
    subject: "Black Friday Sale",
    type: "GMail",
    id: "2",
  },
  {
    body: `<div>
      <div> Hello {{Last Name}},</div>
      <div>This Diwali, take home your favourite PCs, Laptops and More.</div>
    </div>`,
    subject: "Thanks Giving Sale",
    type: "GMail",
    id: "3",
  },
];
