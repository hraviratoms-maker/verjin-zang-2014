import './teacherCard.css';
import { motion } from 'framer-motion';

const photoVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const TeacherCard = ({ imgSrc, title }) => {
    return (
        <motion.div className="cardTeacher" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={photoVariants} style={{ marginBottom: '50px', textAlign: 'center' }}>
            <img src={imgSrc} />
            <h5>{title}</h5>
        </motion.div>
    )
}

export default TeacherCard;