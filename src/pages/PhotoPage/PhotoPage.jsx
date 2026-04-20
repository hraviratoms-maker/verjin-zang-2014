import { useEffect, useRef, useState } from 'react';
import './photoPage.css';
import TeacherCard from '../../components/TeacherCard/TeacherCard';
import StudentCard from '../../components/StudentCard/StudentCard';
import music from '../../audio/arame.mp3';
import { motion } from 'framer-motion';
import disc from '../../images/disc.png';

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

const PhotoPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        fetch('/DB/data.json')
            .then(r => r.json())
            .then(res => {
                setData(res.employees)
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Սխալ տեղի ունեցավ։ ", error);
                setIsLoading(false);
            })

        if (audioRef.current) {
            audioRef.current.play().catch(err => {
                console.log(err);
            })
        }    
    }, []);


    return (
        <div className="photoPageMain">
            <div className="container">
                <motion.div className="photos" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h2 variants={itemVariants}>ՄԵՆՔ</motion.h2>
                    <audio ref={audioRef} autoplay>
                        <source src={music} type="audio/mp3"/>
                    </audio>

                    {
                        isLoading
                            ?
                            <h1>Loading...</h1>
                            :
                            <>
                                <div className="teacherBlock">
                                    {
                                        data.filter(tech => tech?.status === 'teacher').map((tech) => {
                                            return (
                                                <TeacherCard
                                                    key={tech?.id}
                                                    imgSrc={tech?.image}
                                                    title={tech?.surname}
                                                />
                                            )
                                        })
                                    }
                                </div>

                                <div className="studentBlock">
                                    {
                                        data.filter(stud => stud?.status === 'student').map(stud => {
                                            return (
                                                <StudentCard
                                                    key={stud?.id}
                                                    imgSrc={stud?.image}
                                                    title={stud?.surname}
                                                />
                                            )
                                        })
                                    }
                                </div>

                                <div className="disc">
                                </div>
                            </>
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default PhotoPage;