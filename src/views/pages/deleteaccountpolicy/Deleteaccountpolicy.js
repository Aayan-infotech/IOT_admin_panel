import React from "react";

const DeleteAccountPolicy = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Delete Account Policy</h1>
        <p style={styles.lastUpdated}><em>Last updated: August 31, 2024</em></p>

        <p style={styles.paragraph}>
          At IOT, we respect your right to privacy and understand that you may wish to delete your account.
          This policy outlines the process for account deletion.
        </p>

        <h2 style={styles.subheading}>1. Requesting Account Deletion</h2>
        <p style={styles.paragraph}>If you wish to delete your IOT account, please follow these steps:</p>
        <ul style={styles.list}>
          <li>Log in to your Urodoc account.</li>
          <li>Navigate to the account settings page.</li>
          <li>Select the "Delete Account" option.</li>
          <li>Confirm your request by following the on-screen instructions.</li>
        </ul>

        <h2 style={styles.subheading}>2. Data Deletion</h2>
        <p style={styles.paragraph}>Upon confirming your account deletion request, we will:</p>
        <ul style={styles.list}>
          <li>Permanently delete your account and all associated data from our servers.</li>
          <li>Remove your personal information from our active databases.</li>
          <li>
            Retain certain information as required by law or for legitimate business purposes
            (e.g., to comply with legal obligations, resolve disputes, and enforce our agreements).
          </li>
        </ul>

        <h2 style={styles.subheading}>3. Processing Time</h2>
        <p style={styles.paragraph}>
          Account deletion requests are typically processed within 30 days. You will receive a confirmation email
          once your account has been successfully deleted.
        </p>

        <h2 style={styles.subheading}>4. Contact Us</h2>
        <p style={styles.paragraph}>
          If you encounter any issues or have questions about deleting your account, please contact our support team.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: "20px",
    textAlign: "center",
  },
  content: {
    maxWidth: "600px",
    textAlign: "left",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
    textAlign: "center",
  },
  lastUpdated: {
    fontSize: "16px",
    color: "#666",
    fontStyle: "italic",
  },
  paragraph: {
    fontSize: "16px",
    color: "#666",
    lineHeight: 1.6,
  },
  subheading: {
    fontSize: "20px",
    color: "#333",
    marginTop: "20px",
  },
  list: {
    paddingLeft: "20px",
  },
};

export default DeleteAccountPolicy;
