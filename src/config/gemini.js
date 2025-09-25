async function main(prompt) {
  const customApiUrl = 'https://free-gemini.vercel.app/api/google/v1beta/generate-content'; // Replace with your actual URL
  
  try {
    const response = await fetch(customApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // You may need to add a custom authentication header here, 
        // e.g., 'X-API-Key' or an 'Authorization' token.
        // The key would be specific to your internal API, not Google's.
      },
      body: JSON.stringify({
        model: "gemini-2.5-flash", // Your custom API might accept this, or it might be hardcoded.
        contents: prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.text);
    return data.text;
  } catch (error) {
    console.error("Error calling custom API:", error);
    return null;
  }
}

export default main;
