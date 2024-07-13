import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/signin', { replace: true });
    }
  }, [user, navigate]);

  return user ? <Outlet /> : navigate('/signin');
};

export default PrivateRoutes;
