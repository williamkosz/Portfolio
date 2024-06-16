import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial= {{opacity: 0, y: -100}}
        transition={{ duration: 1}}
        viewport={{ once: true }}
        className="my-32 text-center text-4xl ">Formations</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center text-justify">
                    <motion.div 
                        whileInView={{ opacity: 1, x:0 }}
                        initial= {{opacity: 1, x:-100 }}
                        transition={{ duration: 1}}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400 max-sm:text-center">{experience.year}</p>                    
                    </motion.div>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 1, x: 100 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-xl lg:w-3/4 flex flex-wrap"
                    >
                        <h3 className="mb-2 font-semibold max-sm:text-center">
                            {experience.role} - <span> {experience.company}</span>
                        </h3>
                        <p className="mb-4 text-neutral-400 text-justify max-sm:text-center">
                            {experience.description}
                        </p>
                        <div className="max-sm:w-full max-sm:flex max-sm:justify-center max-sm:flex-wrap">
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}
  

export default Experiences