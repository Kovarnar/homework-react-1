import '../assets/scss/News.scss';
import NewsItem from './NewsItem';
import Title from './Title';

function News() {
    return (
        <section className='news'>
            <div className='container'>
                <Title titleH2="News" />
                <ul className='news__list'>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                </ul>
            </div>
        </section>
    );
}

export default News;