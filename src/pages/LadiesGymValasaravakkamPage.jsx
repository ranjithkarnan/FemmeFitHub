import React from "react";
import LocalSeoLandingPage from "../components/LocalSeoLandingPage.jsx";
import { localSeoPages } from "../data/localSeoPages.js";

function LadiesGymValasaravakkamPage() {
  return (
    <LocalSeoLandingPage
      page={{
        ...localSeoPages.ladiesGymValasaravakkam,
        variant: "ladies-gym",
        heroLabel: "Premium Ladies Gym in Valasaravakkam",
        conversionTitle: "Visit the studio before choosing your plan",
        conversionText:
          "Book a free trial, meet the team, and get a clear program suggestion based on your goal, comfort level, and schedule."
      }}
    />
  );
}

export default LadiesGymValasaravakkamPage;
