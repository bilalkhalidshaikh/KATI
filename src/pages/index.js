import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redirect to /login
  }, []);

  return null; // Render nothing since the redirect happens automatically
};

export default Index;
