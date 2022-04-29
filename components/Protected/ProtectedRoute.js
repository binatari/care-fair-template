import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {getAgencyToken, getToken} from '../../src/utils/services';

export default function PrivateRoute({ publicRoutes, children }) {
    const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
//   const { isAuthenticated, isLoading } = useAuth();

  const pathIsNotPublic = publicRoutes.indexOf(router.pathname) == -1;

  useEffect(() => {
      setAuthorized(false)
      const path = router.pathname
    if (!getAgencyToken() && !authorized && pathIsNotPublic && path.includes('/agency') ) {
      // Redirect route, you can point this to /login
     router.push('/agency/login')
      return
    }
    if (!getToken() && !authorized && pathIsNotPublic && path.includes('/admin') ) {
        // Redirect route, you can point this to /login
       router.push('/admin/login')
        return
      }
    setAuthorized(true)
  }, [ authorized, pathIsNotPublic]);

//   if (!authorized && pathIsProtected) {
//     return <FullPageLoader />;
//   }

  return authorized && children;
}