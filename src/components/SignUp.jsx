import { useEffect } from 'react';

function SignUp() {
  useEffect(() => {
    window.location.href = 'https://discord.gg/GKZcHpmcEF';
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Redirecting to Discord...</h2>
    </div>
  );
}

export default SignUp;