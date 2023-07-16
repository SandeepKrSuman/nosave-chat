import React from "react";

import styles from "./Faq.module.css";

const Faq = () => {
  const faqData = [
    {
      question:
        "Do I need to save the phone number to send a WhatsApp message?",
      answer:
        "No, with NoSave Chat, you can send a WhatsApp message without saving the phone number.",
    },
    {
      question: "Can I install NoSave Chat App on my phone?",
      answer:
        "Yes, the official NoSave Chat App can be installed from Google Play Store for android.",
    },
    {
      question: "Can I send messages to multiple recipients simultaneously?",
      answer:
        "No, NoSave Chat allows sending messages to one recipient at a time.",
    },
    {
      question: "Is it necessary to have WhatsApp installed on my device?",
      answer:
        "Yes, you need to have WhatsApp installed on your device to use NoSave Chat as it redirects you to the WhatsApp app.",
    },
    {
      question: "Does NoSave Chat store any personal information?",
      answer:
        "No, NoSave Chat does not store any personal information. It operates as a bridge to redirect you to WhatsApp.",
    },
    {
      question: "Do I need to pay to use NoSave Chat?",
      answer:
        "No, You don't have to pay any penny. NoSave Chat is completely FREE to use.",
    },
  ];

  return (
    <div className={styles.section}>
      <h3>FAQs</h3>
      <div className={styles.container}>
        {faqData.map((faq, index) => (
          <div className={styles.item} key={index}>
            <h5 className={styles.question}>{faq.question}</h5>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
