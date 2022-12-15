import '../assets/css/News.css';
import NewsItem from './NewsItem';

function News() {
    return (
        <section className='news'>
            <div className='container'>
                <h2 className='news__title title'>News</h2>
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