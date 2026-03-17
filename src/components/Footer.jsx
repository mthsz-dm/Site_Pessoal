import { useTranslation } from 'react-i18next';
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer" id="contato">
      <p>{t("footer")}</p>
      <h5>Matheus Dias Mendes</h5>
    </footer>
  );
}
