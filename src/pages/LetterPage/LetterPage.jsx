import './letterPage.css';
import img1 from '../../images/letter1.png';
import img2 from '../../images/img1.JPG';
import img3 from '../../images/img2.JPG';
import img4 from '../../images/img3.JPG';
import Disc from '../../components/Disc/Disc';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';

const LetterPage = () => {
    return (
        <div className="letterPage">
            <div className="container">
                <div className="letter">
                    <img src={img1} alt="img" />

                    <div className="imgBlockSchool">
                        <div className="imgBlock">
                            <img src={img2} alt="img" />
                            <img src={img3} alt="img" />
                            <img className="small-photo" src={img4} alt="img" />
                            <Disc />
                        </div>
                    </div>

                    <Slider />

                    <div className="btnsMenu">
                        <Link to="/page2">
                            Մենք
                            <i className="fa-solid fa-bell"></i>
                        </Link>
                        
                        <Link to="/page3">
                            Մանրամասներ
                            <i className="fa-solid fa-bell"></i>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LetterPage;