
import IndustryPage from "@/components/IndustryPage";

export default function Page() {
  return (
    <IndustryPage
      title="Photonics"
      subtitle="Industry Sector"
      heroImage="/images/photonics.png"
      intro="Integrated photonics is transforming communications, sensing, quantum technologies and healthcare."
      features={[
        {
          title: "Integrated Photonics",
          description:
            "Silicon photonics and photonic integrated circuits.",
        },
        {
          title: "Optical Communications",
          description:
            "High-speed optical networks for next-generation communications.",
        },
        {
          title: "Quantum Technologies",
          description:
            "Photonics enabling Australia's emerging quantum ecosystem.",
        },
      ]}
    />
  );
}
