import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout";
import { HomePage } from "../pages/Home/HomePage";
import { CaseStudyPage } from "../pages/CaseStudy/CaseStudyPage";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
      </Routes>
    </SiteLayout>
  );
}