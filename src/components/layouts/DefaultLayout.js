import Header from './Header';

function DefaultLayout({ children }) {
  return (
    <div id="container" className="w-full font-nanum-regular">
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
