import { Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { BasePage, Notice } from "@/components/base";
import Home from "@/components/setting/setting-home";
import {   useState } from "react";

const Ipage = () => {
  const { t } = useTranslation(); 
  const [url, setUrl] = useState("https://fo.angula.net");

  const onError = (err: any) => {
    Notice.error(err?.message || err.toString());
  };

  return (
    <BasePage title={t("Home")}>
      <Paper sx={{ borderRadius: 1, boxShadow: 2, mb: 3 }}>
      <iframe src={url} height="750px" width="375px"></iframe>
      </Paper>
      

      
    </BasePage>
  );
};

export default Ipage;
