export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { issue } = req.body;

  try {
    const apiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are an assistant that helps categorize civic issues." },
          { role: "user", content: `Issue Description: ${issue}` }
        ]
      }),
    });

    const data = await apiRes.json();
    const reply = data.choices?.[0]?.message?.content || 'Could not process';
    res.status(200).json({ suggestion: reply });
  } catch (err) {
    res.status(500).json({ error: 'OpenAI error' });
  }
}

