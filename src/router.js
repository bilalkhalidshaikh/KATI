// router.js
import { useRouter } from 'next/router';

export const getCurrentRoute = () => {
  const router = useRouter();
  return router.pathname;
};


















