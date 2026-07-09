
import IndustryPage from "@/components/IndustryPage";

export default function Page() {
  return (
    <IndustryPage
      title="Semiconductor Manufacturing"
      subtitle="Industry Sector"
      heroImage="/images/manufacturing.png"
      intro="Australia is developing sovereign semiconductor manufacturing capability across wafer fabrication, advanced packaging and commercialisation."
      features={[
        {
          title: "Wafer Fabrication",
          description:
            "Advanced fabrication for silicon, compound semiconductor and specialty devices.",
        },
        {
          title: "Packaging & Test",
          description:
            "Enabling high-value manufacturing through advanced packaging and testing.",
        },
        {
          title: "Commercialisation",
          description:
            "Supporting Australian innovation from research through to global markets.",
        },
      ]}
    />
  );
}
