import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="pwrapper">
      <div className="pcontainer">
        <h2>Privacy Policy</h2>
        <h1>NoSave Chat</h1>
        <br />
        <p>
          At NoSave Chat, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and handle the information you
          provide while using our app. By using the NoSave Chat app, you agree
          to the terms outlined in this policy.
        </p>

        <div className="psection-title">1. Information Collection and Use</div>
        <p>
          NoSave Chat is a simple app that allows users to initiate WhatsApp
          chats without saving the contact number. To use the app, you provide a
          phone number and a message that you want to send. Please note that we
          do not collect or store any personal information you provide through
          the app. We solely act as a bridge, redirecting you to WhatsApp with
          the pre-filled message and the specified phone number.
        </p>

        <div className="psection-title">2. Data Transmission</div>
        <p>
          When you initiate a chat using NoSave Chat, your message and the phone
          number you entered are transmitted to WhatsApp. For this purpose we
          use WhatsApp's{" "}
          <a
            href="https://faq.whatsapp.com/5913398998672934/?helpref=uf_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            click to chat
          </a>{" "}
          feature. We do not store, retain, or have access to any of this
          information once it is redirected to WhatsApp.
        </p>

        <div className="psection-title">3. Third-Party Integration</div>
        <p>
          NoSave Chat integrates with WhatsApp's API or deep linking feature to
          initiate chats. We do not control the data handling practices of
          WhatsApp. We encourage you to review WhatsApp's own privacy policy to
          understand how they handle your information.
        </p>

        <div className="psection-title">4. Data Security</div>
        <p>
          We take reasonable precautions to ensure the security of your
          information. However, please be aware that no method of transmission
          over the internet or electronic storage is 100% secure. While we
          strive to protect your personal information, we cannot guarantee its
          absolute security.
        </p>

        <div className="psection-title">5. Children's Privacy</div>
        <p>
          To use NoSave Chat one should already be using WhatsApp. Our app
          relies on WhatsApp for functionality, and any information provided or
          handled is subject to WhatsApp's own privacy policies and practices.
          We do not knowingly collect personal information from children. If you
          are a parent or guardian and believe that your child has used NoSave
          Chat without your consent, please ensure appropriate supervision and
          contact WhatsApp directly to address any concerns regarding your
          child's privacy and data protection.
          <br /> <br />
          While we do not collect any personal information from our users, we
          believe that it is important for parents and guardians to be aware of
          their children's online activities and to help them make safe and
          responsible choices. We encourage parents and guardians to talk to
          their children about online privacy and security, and to set
          appropriate boundaries and guidelines for app usage.
        </p>

        <div className="psection-title">6. Changes to this Policy</div>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be effective immediately upon posting the revised policy on this page.
          We encourage you to review this Privacy Policy periodically to stay
          informed about how we are protecting your information.
        </p>

        <div className="psection-title">8. Contact Us</div>
        <p>
          If you have any questions or concerns about this Cookie Policy &
          Privacy Statement, please raise an issue{" "}
          <a
            href="https://github.com/SandeepKrSuman/nosave-chat/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>

        <h4>
          By using NoSave Chat, you agree to the terms outlined in this Privacy
          Policy.
        </h4>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
