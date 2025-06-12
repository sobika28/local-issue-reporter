export default function IssueCard({ title, description }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
