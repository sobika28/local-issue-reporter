import Header from '../components/Header';
import IssueCard from '../components/IssueCard';
import { useState, useEffect } from 'react';

export default function Home() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Simulated issue data
    setIssues([
      { title: "⚠️ Water Leakage", description: "Pipe burst near Gandhi street." },
      { title: "💡 Broken Streetlight", description: "Light not working near school road." },
      { title: "🕳️ Road Damage", description: "Potholes on Anna Nagar Main Road." },
    ]);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "0",
        margin: "0",
      }}
    >
      <Header />
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>📝 Reported Local Issues</h2>
        {issues.map((issue, index) => (
          <IssueCard key={index} title={issue.title} description={issue.description} />
        ))}
      </main>
    </div>
  );
}
