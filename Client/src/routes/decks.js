import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import DecksViewDash from '../components/DecksViewDash';
import Footer from '../components/Footer';

function Decks() {
  return (
      // Complete view box
      <div className='w-full h-screen flex flex-col justify-start items-start'>
            <Header 
            currentPage = 'Decks'
            />
            <SubHeader
            title={'My Decks'}
            />
            <section className='h-4/5'>
                <DecksViewDash />
            </section>
            <Footer />
        </div>
    );
  }
  
  export default Decks;