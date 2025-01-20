import React from "react";
import { Button, Divider } from "semantic-ui-react";
import PageHeader from "../../layout/PageHeader";
import { useTranslation } from "react-i18next";
import { useStore } from "../../stores/store";

interface Props {
  header: string;
  value?: string;
  text?: string;
  deleteValue?: (id: string) => void;
}

export default function ConfirmDelete({
  header,
  value,
  text,
  deleteValue,
}: Readonly<Props>) {
  const { t } = useTranslation(["common"]);
  const { modalStore } = useStore();
  return (
    <>
      <PageHeader header={header} type={"h3"} divider={true} />
      <p>
        <label className="myLabel">
          {t("confirmDeleteMessage", { ns: "common" })}
        </label>
      </p>
      <p>
        {text ? (
          <label className="myLabel fontStyleItalic">"{text}"</label>
        ) : (
          ""
        )}
      </p>
      <Divider />
      <Button
        color="red"
        className="save_button"
        content={t("confirmDelete", { ns: "common" })}
        type="button"
        onClick={() => {
          if (deleteValue && value) deleteValue(value);
          modalStore.closeModal();
        }}
      />
      <Button
        className="save_button"
        type="reset"
        content={t("cancel", { ns: "common" })}
        onClick={() => modalStore.closeModal()}
      />
    </>
  );
}
