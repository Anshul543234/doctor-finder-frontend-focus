
import React from "react";
import DoctorsPage from "./DoctorsPage";

// SEO metadata component
const SeoMetadata = () => {
  return (
    <>
      {/* This would be rendered on the server with Next.js */}
      <title>Find Top General Physicians & Internal Medicine Specialists | MedFinder</title>
      <meta name="description" content="Find and book appointments with the best general physicians and internal medicine specialists in your area. Read reviews, check experience, and book instantly." />
      <meta name="keywords" content="general physician, internal medicine, doctor appointment, medical consultation, find doctors" />
      
      {/* Open Graph tags for social sharing */}
      <meta property="og:title" content="Top General Physicians & Internal Medicine Specialists | MedFinder" />
      <meta property="og:description" content="Find and book appointments with the best general physicians and internal medicine specialists in your area. Read reviews, check experience, and book instantly." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.medfinder.com/specialties/general-physician-internal-medicine" />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Top General Physicians & Internal Medicine Specialists | MedFinder" />
      <meta name="twitter:description" content="Find and book appointments with the best general physicians and internal medicine specialists in your area." />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.medfinder.com/specialties/general-physician-internal-medicine" />
    </>
  );
};

const Index = () => {
  // In a real Next.js application, the SEO metadata would be handled by Next.js Head component
  // Here we're just demonstrating the structure
  return (
    <>
      {/* SeoMetadata would typically be handled by Next.js <Head> */}
      <DoctorsPage />
    </>
  );
};

export default Index;
