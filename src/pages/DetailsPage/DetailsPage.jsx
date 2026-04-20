import './detailsPage.css';
import background from '../../images/background.JPG';
import Calendar from '../../components/Calendar/Calendar';

const DetailsPage = () => {
    return (
        <div className="detailsPag">
            <div className="container">
                <div className="details">
                    <img src={background} alt='img' />

                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;