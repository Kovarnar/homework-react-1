import '../assets/scss/Banner.scss';
import Title from './Title';

function Banner() {
    return (
        <section className='banner'>
            <div className='container'>
                <Title titleH2="Full-width banner image" />
            </div>
        </section>
    );
}

export default Banner;