type Entry = {
  uid: string;
  hero_banner: {
    bg_color: string;
    text_color: string;
    banner_title: string;
    banner_description: string;
    call_to_action: {
      title: string;
      href: string;
    };
  };
  title: string;
  values: {
    title: string;
    items: {
      heading: string;
      description: string;
    }[];
  };
};

type Entries = {
  entries: Entry[];
};

const BASE_URL = process.env.CS_BASE_URL || "";
const API_KEY = process.env.CS_API_KEY || "";
const DELIVERY_TOKEN = process.env.CS_DELIVERY_TOKEN || "";

export const getLandingPage = async (): Promise<Entry> => {
  // Fetch Hero Banner data
  const landingPageResult = await fetch(
    `${BASE_URL}/landing_page/entries?branch=main&locale=en-us`,
    {
      method: "GET",
      headers: {
        api_key: API_KEY,
        access_token: DELIVERY_TOKEN,
      },
    }
  );

  const { entries } = (await landingPageResult.json()) as Entries;

  const entry = entries[0];

  if (!entry) {
    throw new Error("No entry found");
  }

  return entry;
};
