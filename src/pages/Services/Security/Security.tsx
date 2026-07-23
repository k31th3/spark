
import { Thumbnail, SectionHeader, SectionBody } from "@/pages/Services";
import { Scheme } from "./scheme";

export default function Security() {
  return (
    <>
      <Thumbnail />
            
      <SectionHeader
          title="Security Services"
          description="Comprehensive threat prevention and data security tailored to keep your business safe."/>

      <SectionBody services={Scheme} />

    </>
  );
}