import React from "react";

import { Form } from "../components";

import {
  ContactPageSectionStyled,
  ContactPageTitleStyled,
} from "./contactPage.scss";

const ContactPage = () => {
  return (
    <ContactPageSectionStyled>
      <ContactPageTitleStyled>contact us</ContactPageTitleStyled>
      <Form />
    </ContactPageSectionStyled>
  );
};

export default ContactPage;
