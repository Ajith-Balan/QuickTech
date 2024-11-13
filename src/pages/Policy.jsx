import React from 'react';
import Layout from '../components/layout/Layout';

const Policy = () => {
  return (
    <div>
      <Layout title={'Privacy Policy - Quick Tech'}>
        <div className="privacy-policy p-4">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p><strong>Effective Date:</strong> {new Date().getFullYear()}</p>

          <p className="mb-4">
            At Quick Tech, we respect your privacy and are committed to protecting it. This Privacy Policy outlines our practices to ensure your information is kept safe. Please read this policy carefully to understand our commitment to your privacy.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Do Not Collect</h2>
          <p className="mb-4">
            We want to assure you that we do not collect any personal information such as your name, email address, or contact details when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. Cookies and Tracking</h2>
          <p className="mb-4">
            Our website uses only essential cookies that are necessary for the website's functionality. We do not use tracking technologies to collect any personal data or monitor your browsing behavior.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
          <p className="mb-4">
            Although we do not collect personal data, we are committed to ensuring that any information you may provide (e.g., during support inquiries) is kept secure. However, please be aware that no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to other websites. Please be aware that we are not responsible for the content or privacy practices of these sites. We encourage you to review their privacy policies if you visit them.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, so we encourage you to review it periodically. Your continued use of our website after any modifications indicates your acceptance of the updated policy.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy, please feel free to contact us at [ayalurajith@gmail.com].
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Policy;
