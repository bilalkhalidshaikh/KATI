import { useRouter } from 'next/router';
import Login from './login';
import Register from './register';

const Index = () => {
  const router = useRouter();
  const { pathname } = router;

  const renderForm = () => {
    if (pathname === '/') {
    //   return <Login />;
    router.push('/login');
    } else if (pathname === '/register') {
    //   return <Register />;
    router.push('/register');
    }
  };

  return (
    <div>
      {renderForm()}
    </div>
  );
};

export default Index;
