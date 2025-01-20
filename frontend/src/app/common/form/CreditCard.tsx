import { observer } from "mobx-react-lite";
import React from "react";
import { DropdownItemProps, Grid } from "semantic-ui-react";
import MyTextInput from "./MyTextInput";
import { useTranslation } from "react-i18next";
import MySelectInput from "./MySelectInput";
import { monthsOptions } from "../options/expirationMonth";
import PageHeader from "../../layout/PageHeader";
import { Options } from "../options/option";

export default observer(function CreditCard() {
  const { t } = useTranslation(["common", "profile", "subscription"]);

  let currentYear = new Date().getFullYear();
  let years: DropdownItemProps[] = [];

  for (let i = 0; i < 20; i++) {
    let uOption: Options = {
      text: (currentYear + i).toString(),
      value: (currentYear + i).toString(),
    };
    years.push(uOption);
  }

  return (
    <>
      <Grid.Row>
        <Grid.Column>
          <PageHeader
            header={t("creditCard.label", { ns: "subscription" })}
            type={"h2"}
            divider={true}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <MyTextInput
            name="creditCardNumber"
            placeholder={t("creditCard.number", { ns: "subscription" })}
            label={`${t("creditCard.number", { ns: "subscription" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={20}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <MySelectInput
            name="expirationMonth"
            placeholder={t("creditCard.expirationMonth", {
              ns: "subscription",
            })}
            options={monthsOptions}
            label={`${t("creditCard.expirationMonth", {
              ns: "subscription",
            })}:`}
            clearable={true}
          />
        </Grid.Column>
        <Grid.Column>
          <MySelectInput
            name="expirationYear"
            placeholder={t("year", { ns: "common" })}
            options={years}
            label={`${t("year", { ns: "common" })}:`}
            clearable={true}
          />
        </Grid.Column>
        <Grid.Column>
          <MyTextInput
            name="securityCode"
            placeholder={t("creditCard.cvv", { ns: "subscription" })}
            label={`${t("creditCard.cvv", { ns: "subscription" })}:`}
            autoCapitalizeFirstLetter={false}
            maxLength={10}
          />
        </Grid.Column>
      </Grid.Row>
    </>
  );
});
