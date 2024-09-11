import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Privacy Policy</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <h4 className="card-title">Introduction</h4>
              <p className="card-text">
                Welcome to Vartaman Time. We value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website.
              </p>

              <h4 className="card-title mt-4">Information We Collect</h4>
              <p className="card-text">
                We may collect information about you in a variety of ways. The
                information we may collect includes:
              </p>
              <ul>
                <li>
                  Personal Data: Personal information such as your name, email
                  address, and contact details when you register on our website,
                  subscribe to our newsletter, or interact with our content.
                </li>
                <li>
                  Usage Data: Information about how you use our website,
                  including IP addresses, browser types, pages viewed, and other
                  related data.
                </li>
                <li>
                  Cookies and Tracking Technologies: We use cookies and similar
                  technologies to track activity and preferences to enhance your
                  experience on our site.
                </li>
              </ul>

              <h4 className="card-title mt-4">How We Use Your Information</h4>
              <p className="card-text">We use the information we collect to:</p>
              <ul>
                <li>Improve our website and services.</li>
                <li>
                  Send you newsletters, updates, and promotional materials if
                  you have opted in.
                </li>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Analyze usage patterns to enhance user experience.</li>
              </ul>

              <h4 className="card-title mt-4">How We Share Your Information</h4>
              <p className="card-text">
                We do not sell or rent your personal information to third
                parties. We may share information with third parties in the
                following situations:
              </p>
              <ul>
                <li>
                  With service providers who assist us in operating our website
                  and delivering services.
                </li>
                <li>
                  In compliance with legal obligations or to protect our rights
                  and interests.
                </li>
                <li>
                  In connection with a business transfer, such as a merger or
                  acquisition.
                </li>
              </ul>

              <h4 className="card-title mt-4">Your Choices</h4>
              <p className="card-text">You have the right to:</p>
              <ul>
                <li>
                  Access, update, or delete your personal information by
                  contacting us.
                </li>
                <li>
                  Opt-out of receiving promotional communications by following
                  the unsubscribe instructions provided in emails.
                </li>
                <li>Control cookies through your browser settings.</li>
              </ul>

              <h4 className="card-title mt-4">Security</h4>
              <p className="card-text">
                We implement appropriate security measures to protect your
                information from unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the
                Internet or electronic storage is 100% secure.
              </p>

              <h4 className="card-title mt-4">
                Changes to This Privacy Policy
              </h4>
              <p className="card-text">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                our website. Your continued use of the site following any
                changes constitutes your acceptance of the new policy.
              </p>

              <h4 className="card-title mt-4">Contact Us</h4>
              <p className="card-text">
                If you have any questions or concerns about our Privacy Policy,
                please contact us at:
              </p>
              <p className="card-text">
                Email:{" "}
                <a href="mailto:support@vartamantime.com">
                  support@vartamantime.com
                </a>
              </p>
              <p className="card-text">
                Address: Vartaman Time, 123 News Street, City, Country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
