import Navigate from 'components/Navigate/Navigate';
import { Container, Header } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Container>
      <Header>
        <Navigate />
      </Header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}

export default Layout;
