import React from "react";

import {
  ValuesBlock,
  ValuesBlockProps,
} from "@/components/ValuesBlock/ValuesBlock";
import {
  HeroBanner,
  HeroBannerProps,
} from "@/components/HeroBanner/HeroBanner";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { getLandingPage } from "@/services/getLandingPage";

type LandingPageProps = {
  heroBannerData: HeroBannerProps;
  valuesData: ValuesBlockProps;
};

const LandingPage = ({ heroBannerData, valuesData }: LandingPageProps) => (
  <>
    <Header />
    <main className="bg-white">
      <HeroBanner {...heroBannerData} />
      <ValuesBlock {...valuesData} />
    </main>
    <Footer />
  </>
);

LandingPage.getInitialProps = async () => {
  const entry = await getLandingPage();

  return {
    heroBannerData: {
      bgColor: entry.hero_banner.bg_color,
      heading: entry.hero_banner.banner_title,
      description: entry.hero_banner.banner_description,
      cta: {
        title: entry.hero_banner.call_to_action.title,
        url: entry.hero_banner.call_to_action.href,
      },
    },
    valuesData: {
      group_heading: entry.values.title,
      items: entry.values.items,
    },
  };
};

export default LandingPage;
