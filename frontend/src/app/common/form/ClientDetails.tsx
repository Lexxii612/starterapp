import React from "react";
import { Grid } from "semantic-ui-react";
import MyTextInput from "./MyTextInput";
import { useTranslation } from "react-i18next";
import StateSelect from "./StateSelect";
import PhoneNumberInput from "./PhoneNumberInput";
import { PhoneNumberType } from "../../models/enums";

export default function ClientDetails() {
  const { t } = useTranslation(["common", "advancedSettings", "errors"]);
  return (
    <>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            placeholder={t("name", { ns: "advancedSettings" })}
            label={`${t("name", { ns: "advancedSettings" })}:`}
            name="businessName"
            className="required"
            autoCapitalizeFirstLetter={false}
            maxLength={255}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            placeholder={t("address.address", { ns: "common" })}
            label={`${t("address.address", { ns: "common" })}:`}
            name="addressLine1"
            className="required"
            autoCapitalizeFirstLetter={false}
            maxLength={500}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            placeholder={t("address.city", { ns: "common" })}
            label={`${t("address.city", { ns: "common" })}:`}
            name="city"
            className="required"
            autoCapitalizeFirstLetter={false}
            maxLength={255}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <StateSelect
            label={`${t("address.state", { ns: "common" })}:`}
            placeholder={t("address.state", { ns: "common" })}
            name={"state"}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            placeholder={t("address.postalcode", { ns: "common" })}
            label={`${t("address.postalcode", { ns: "common" })}:`}
            name="postalCode"
            className="required"
            autoCapitalizeFirstLetter={false}
            maxLength={50}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            placeholder={t("contact", { ns: "advancedSettings" })}
            label={`${t("contact", { ns: "advancedSettings" })}:`}
            name="contactName"
            className="required"
            autoCapitalizeFirstLetter={false}
            maxLength={255}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            placeholder={t("email", { ns: "advancedSettings" })}
            label={`${t("email", { ns: "advancedSettings" })}:`}
            name="contactEmail"
            autoCapitalizeFirstLetter={false}
            maxLength={255}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <PhoneNumberInput
            placeholder={t("phonenumber", { ns: "common" })}
            label={`${t("phonenumber", { ns: "common" })}:`}
            name={"primaryNumber"}
            phoneType={PhoneNumberType.Landline}
          />
        </Grid.Column>
      </Grid.Row>
    </>
  );
}
