import './letter.css';
import LetterPhoto from '../../images/letter.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.5 }
    }
}

const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 }
}

const Letter = () => {
    return (
        <motion.div className="letter" variants={containerVariants} initial="hidden" animate="visible">
            <motion.h4 variants={itemVariants}>Սեղմեք անակնկալի համար...</motion.h4>
            <motion.div className="imgBlock" variants={itemVariants}>
                <Link to="/page1">
                    <motion.img src={LetterPhoto} alt="letter" />
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Letter;