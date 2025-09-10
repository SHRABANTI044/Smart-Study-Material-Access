import React from "react";

const resources = [
  {
    title: "Python Tutorial",
    type: "video",
    url: "https://www.youtube.com/embed/gPvYox9JIYI",
  },
  {
    title: "COA Tutorial",
    type: "video",
    url: "https://www.youtube.com/embed/DsK35f8wyUw",
  },
  {
    title: "DSA Tutorial",
    type: "video",
    url: "https://www.youtube.com/embed/8hly31xKli0",
  },
  {
    title: "DBMS Tutorial",
    type: "video",
    url: "https://www.youtube.com/embed/ztHopE5Wnpc",
  },
  {
    title: "Python Notes",
    type: "pdf",
    url: "https://mrcet.com/downloads/digital_notes/CSE/III%20Year/PYTHON%20PROGRAMMING%20NOTES.pdf",
  },
  {
    title: "COA Notes",
    type: "pdf",
    url: "https://mrcet.com/downloads/digital_notes/ECE/III%20Year/07012023/COMPUTER%20ORGANIZATION%20AND%20ARCHITECTURE.pdf",
  },
  {
    title: "DSA Notes",
    type: "pdf",
    url: "https://mrcet.com/downloads/digital_notes/CSE/II%20Year/DATA%20STRUCTURES%20DIGITAL%20NOTES.pdf",
  },
  {
    title: "DBMS Notes",
    type: "pdf",
    url: "https://mrcet.com/downloads/digital_notes/ECE/III%20Year/DATABASE%20MANAGEMENT%20SYSTEMS.pdf",
  },
];

export default function StudyArea() {
  const pdfResources = resources.filter((res) => res.type === "pdf");
  const videoResources = resources.filter((res) => res.type === "video");

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📖Study Area</h2>

      <div style={styles.contentWrapper}>
        {/* PDF Section */}
        <div style={styles.pdfSection}>
          <h3 style={styles.subheading}>📄 PDF Resources</h3>
          {pdfResources.map((res, index) => (
            <div key={index} style={styles.card}>
              <h4 style={styles.title}>{res.title}</h4>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Open PDF
              </a>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div style={styles.videoSection}>
          <h3 style={styles.subheading}>🎥 Video Resources</h3>
          {videoResources.map((res, index) => (
            <div key={index} style={styles.videoWrapper}>
              <h4 style={styles.title}>{res.title}</h4>
              <iframe
                width="100%"
                height="100%"
                src={res.url}
                title={res.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={styles.iframe}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "10px 20px",
    background: "linear-gradient(135deg, #3b82f6, #9333ea)",
    borderRadius: "0px",
    border: "none",
    boxShadow: "none",
    color: "#333",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "700",
    color: "#333",
  },
  subheading: {
    fontSize: "20px",
    marginBottom: "16px",
    fontWeight: "500",
    color: "#333",
  },
  contentWrapper: {
    display: "flex",
    gap: "20px",
    flex: 1,
    minHeight: "0",
    overflow: "hidden",
  },
  pdfSection: {
    flex: 1,
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
    overflowY: "auto",
    minHeight: "0",
    maxHeight: "100%",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  },
  videoSection: {
    flex: 2,
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
    overflowY: "auto",
    minHeight: "0",
    maxHeight: "100%",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  },
  card: {
    background: "#fff",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    color: "#333",
  },
  title: {
    marginBottom: "8px",
    color: "#333",
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "bold",
  },
  videoWrapper: {
    marginBottom: "20px",
    height: "300px",
  },
  iframe: {
    borderRadius: "8px",
    width: "100%",
    height: "100%",
  },
};
