import { useTranslation } from "react-i18next";

const { t } = useTranslation();

const companyType = [
  {
    id: '1',
    label: t("manufacturer"),
  },
  {
    id: '2',
    label: t("distribution company"),
  },
  {
    id: '3',
    label: t("retailer"),
  },
  {
    id: '4',
    label: t("Import Export"),
  },
  {
    id: '5',
    label: t("othes"),
  },
];

export default companyType;