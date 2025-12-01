import type { Metadata } from "next";
import { getCityDataFromUrl } from "@/lib/cityData";
import { env } from "@/lib/env";
import { getCanonicalUrl } from "@/lib/canonical-helper";

export const metadata: Metadata = (() => {
  const city = getCityDataFromUrl(env.SITE_URL);
  return {
    title: `Devis Déménagement ${city.nameCapitalized} | 5+ Offres en 48h`,
    description: `Recevez 5+ devis comparables de déménageurs contrôlés à ${city.nameCapitalized} en 48h. Dossier anonyme, 0 harcèlement. Dès 280€. Formulaire 5 min. Gratuit.`,
    alternates: {
      canonical: getCanonicalUrl("devis-gratuits"),
    },
    openGraph: {
      title: `Devis Déménagement ${city.nameCapitalized} | 5+ Offres en 48h`,
      description: `5+ devis comparables en 48h. Dossier anonyme, 0 spam. Dès 280€. Gratuit.`,
      url: getCanonicalUrl("devis-gratuits"),
      type: "website",
    },
  };
})();

export default function DevisGratuitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
