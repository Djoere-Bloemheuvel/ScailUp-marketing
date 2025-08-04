
import React, { useState, Suspense } from 'react';
import ContactFormLoader from '@/components/contact/ContactFormLoader';

// Lazy load the full contact page
const FastContactPage = React.lazy(() => import('@/components/contact/FastContactPage'));

const Contact = () => {
  const [showFullForm, setShowFullForm] = useState(false);

  const handleLoadComplete = () => {
    setShowFullForm(true);
  };

  return (
    <>
      {!showFullForm ? (
        <ContactFormLoader onLoadComplete={handleLoadComplete} />
      ) : (
        <Suspense fallback={<ContactFormLoader onLoadComplete={() => {}} />}>
          <FastContactPage />
        </Suspense>
      )}
    </>
  );
};

export default Contact;
