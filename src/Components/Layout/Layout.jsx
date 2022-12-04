import Navbarr from '../Navbar/Navbar';

export const Layout = ({ children }) => {
  return (
    <main className="App">
      <Navbarr />
      {children}
    </main>
  );
};
