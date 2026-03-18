import { useTranslation } from 'react-i18next';
export default function Profile() {
  const { t } = useTranslation();
  return (
    <div className="profile" id="perfil">
      <h1>{t("titulo")}</h1>
      <p>
        {t("sobremim")}
      </p>
    </div>
  );
}
