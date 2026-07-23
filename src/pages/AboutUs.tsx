import { Seo, StructuredData } from "@/components";

function AboutUs() {
  const pageUrl = `${window.location.origin}/about`;
  return (
    <>
      <Seo title="about us" description="We help businesses grow through innovative IT solutions, including hardware, networking, cybersecurity, and custom software development. Our team is committed to delivering reliable technology and exceptional service that supports your success." 
        canonical={pageUrl} />
      <StructuredData data={""} />
    </>
  );
}

export default AboutUs;
