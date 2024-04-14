import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, LoadingPage } from './pages/index';
import { PrivateRoutes } from './routes';
import { Suspense, lazy } from 'react';
import { VStack } from '@chakra-ui/react';

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

function App() {
  return (
    <VStack minH="100vh" width="100%">
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Login />} path="/" />
            <Route element={<PrivateRoutes />}>
              <Route element={<Dashboard />} path="/dashboard" />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </VStack>
  );
}

export default App;
