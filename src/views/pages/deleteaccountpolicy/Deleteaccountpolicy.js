import React from "react";

const DeleteAccountPolicy = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Delete Account Policy</h1>
        <p style={styles.lastUpdated}><em>Last updated: December 4, 2024</em></p>

        <p style={styles.paragraph}>
          This policy outlines the procedure for deleting user accounts for an application designed exclusively for internal use by employees. The app is restricted to employees who have been pre-verified, and account creation is not available to the public. This policy ensures compliance with relevant data privacy regulations and the latest requirements set forth by Google.
        </p>

        <h2 style={styles.subheading}>1. Account Deletion Request</h2>
        <p style={styles.paragraph}>
          Employees who wish to delete their accounts can do so by following the procedure outlined below:
        </p>
        <ul style={styles.list}>
          <li><strong>Submitting a Request:</strong> Employees may request the deletion of their account by submitting a request via the designated web portal or weblink. This link is accessible only to authorized users within the company’s internal network.</li>
          <li><strong>Verification:</strong> Upon receiving a deletion request, the system will verify the identity of the requester to ensure that the account belongs to the employee making the request.</li>
          <li><strong>Processing the Request:</strong> After verification, the account deletion process will be initiated. The user’s data will be permanently removed from the app’s database within [X days] of the request.</li>
        </ul>

        <h2 style={styles.subheading}>2. Access to the Deletion Portal</h2>
        <p style={styles.paragraph}>
          <strong>Internal Access Only:</strong> The account deletion portal is accessible only within the organization’s network and is not available to the general public. Only current employees with valid credentials can access the portal.
        </p>

        <h2 style={styles.subheading}>3. Data Deletion</h2>
        <p style={styles.paragraph}>
          <strong>Data Removed:</strong> Once the account deletion is confirmed, all personal data associated with the account will be permanently deleted from the system. This includes login credentials, profile information, and any other data linked to the account.
        </p>
        <p style={styles.paragraph}>
          <strong>Exceptions:</strong> Certain data required for legal, compliance, or operational purposes may be retained in a non-identifiable format, as permitted by applicable laws.
        </p>

        <h2 style={styles.subheading}>4. Consequences of Account Deletion</h2>
        <p style={styles.paragraph}>
          <strong>Service Termination:</strong> Deleting an account will result in the termination of access to the app and any associated services. Employees should ensure that they have no pending tasks or essential data within the app before requesting deletion.
        </p>
        <p style={styles.paragraph}>
          <strong>Irreversibility:</strong> Once an account is deleted, the process is irreversible. Employees who wish to regain access to the app will need to undergo the account creation process again, subject to organizational approval.
        </p>

        <h2 style={styles.subheading}>5. Support and Contact Information</h2>
        <p style={styles.paragraph}>
          For any questions or issues related to account deletion, employees may contact the support team or IT department at the designated support email or phone number.
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
    marginBottom: "20px",
  },
};

export default DeleteAccountPolicy;
