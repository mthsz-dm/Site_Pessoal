import { useTranslation } from 'react-i18next';
export default function Profile() {
  const { t } = useTranslation();
  return (
    <header className="profile">
      <h1>{t("titulo")}</h1>
      <p>
        {t("sobremim")}
      </p>
    </header>
  );
}
