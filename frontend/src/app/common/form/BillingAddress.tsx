import { observer } from "mobx-react-lite";
import React from "react";
import MyTextInput from "./MyTextInput";
import { useTranslation } from "react-i18next";
import MySelectInput from "./MySelectInput";
import { usStatesOptions } from "../options/statesOptions";
import { countryOptions } from "../options/countryOptions";
import PhoneNumberInput from "./PhoneNumberInput";
import PageHeader from "../../layout/PageHeader";
import { Grid } from "semantic-ui-react";
import { PhoneNumberType } from "../../models/enums";

export default observer(function BillingAddress() {
  const { t } = useTranslation(["common", "profile"]);

  return (
    <>
      <Grid.Row>
        <Grid.Column>
          <PageHeader
            header={t("billingAddress", { ns: "common" })}
            type={"h2"}
            divider={true}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            name="clientName"
            placeholder={t("companyname", { ns: "common" })}
            label={`${t("companyname", { ns: "common" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={500}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            name="firstName"
            placeholder={t("first_name", { ns: "common" })}
            label={`${t("first_name", { ns: "common" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={255}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            name="lastName"
            placeholder={t("last_name", { ns: "common" })}
            label={`${t("last_name", { ns: "common" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={255}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            name="email"
            placeholder={t("email", { ns: "common" })}
            label={`${t("email", { ns: "common" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={255}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            name="addressLine1"
            placeholder={t("address.address", { ns: "common" })}
            label={`${t("address.address", { ns: "common" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={500}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            name="addressLine2"
            placeholder={t("address.address2", { ns: "common" })}
            label={`${t("address.address2", { ns: "common" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={500}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <MyTextInput
            name="city"
            placeholder={t("address.city", { ns: "common" })}
            label={`${t("address.city", { ns: "common" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={255}
          />
        </Grid.Column>
        <Grid.Column>
          <MySelectInput
            name="state"
            placeholder={t("address.state", { ns: "common" })}
            options={usStatesOptions}
            label={t("address.state", { ns: "common" })}
            clearable={true}
          />
        </Grid.Column>
        <Grid.Column>
          <MyTextInput
            name="postalCode"
            placeholder={t("address.postalcode", { ns: "common" })}
            label={`${t("address.postalcode", { ns: "common" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={50}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MySelectInput
            name="country"
            placeholder={t("address.country", { ns: "common" })}
            options={countryOptions}
            label={`${t("address.country", { ns: "common" })}:`}
            clearable={true}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <PhoneNumberInput
            name="billingPhone"
            placeholder={t("phonenumber", { ns: "common" })}
            label={`${t("phonenumber", { ns: "common" })}:`}
            phoneType={PhoneNumberType.Landline}
          />
        </Grid.Column>
      </Grid.Row>
    </>
  );
});
