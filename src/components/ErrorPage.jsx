import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const message =
    error?.statusText || error?.message || "The page you are looking for does not exist.";

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.code}>{error?.status || 404}</h1>
        <p style={styles.message}>Oops! Something went wrong.</p>
        <p style={styles.detail}>{message}</p>
        <Link to="/" style={styles.link}>← Back to Home</Link>
      </div>
    </div>
  );
};


export default ErrorPage;

// Inline styles
const styles = {
  wrapper: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    textAlign: "center",
    padding: "2rem",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    maxWidth: "400px",
  },
  code: {
    fontSize: "4rem",
    margin: "0",
    color: "#e63946",
  },
  message: {
    fontSize: "1.25rem",
    margin: "0.5rem 0",
  },
  detail: {
    fontSize: "0.9rem",
    color: "#555",
    marginBottom: "1.5rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
