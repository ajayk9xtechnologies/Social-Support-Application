import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../store/settings/settingSlice";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const getLang = useSelector((state) => state.settings.language);
console.log(getLang)
  // Sync Redux state with i18n
  useEffect(() => {
    i18n.changeLanguage(getLang);
  }, [getLang, i18n]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    dispatch(setLanguage(newLang));
     document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <header>
      <select
        name="lang"
        id="language"
        value={getLang}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </header>
  );
}
