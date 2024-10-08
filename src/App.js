import style from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ChatDots from './reusable_components/ChatDots/ChatDots';
import ScrollToTop from './utils/scrollToTop.js';

const App = () => {
  return (
    <section className={style.app_container}>
      <ScrollToTop />
      <Header />
      <Main />
      <ChatDots />
      <Footer />
    </section>
  );
};

export default App;
