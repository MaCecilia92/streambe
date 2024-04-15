import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import { PrivateRoutes } from './routes';
import { Suspense, lazy } from 'react';
import { VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './state/Session/selectors';

const Dashboard = lazy(() => import('./pages/Dashboard/index'));

function App() {
  const user = useSelector(selectIsAuthenticated);
  console.log(useSelector(selectIsAuthenticated), 'user');
  return (
    <VStack minH="100vh" width="100%">
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Routes>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<LoginPage />} path="/" />
            <Route element={<PrivateRoutes user={user} />}>
              <Route element={<Dashboard />} path="/dashboard" />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </VStack>
  );
}

export default App;
