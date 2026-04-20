import Letter from '../../components/Letter/Letter';
import './homePage.css';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    }
}

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
}

const HomePage = () => {
    return (
        <main>
            <div className="container">
                <motion.div className="main" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h2 className='top' variants={itemVariants}>
                        <span>2</span>
                        <span>0</span>
                        <span>1</span>
                        <span>4</span>
                    </motion.h2>
                    <Letter />
                    <motion.h2 className='bottom' variants={itemVariants}>
                        <span>2</span>
                        <span>0</span>
                        <span>2</span>
                        <span>6</span>
                    </motion.h2>
                </motion.div>
            </div>
        </main>
    )
}

export default HomePage;