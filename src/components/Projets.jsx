import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Projets = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
            id="projets"
            whileInView={{opacity: 1, y: 0}}
            initial= {{opacity: 0, y: -100}}
            transition={{ duration: 0.7}}
            viewport={{ once: true }}
            className="my-32 text-center text-4xl">Projets</motion.h2>

        <div>{PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                    initial={{ opacity: 1, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1 }}}
                    viewport={{once: true}}
                    className="w-full lg:w-1/4 max-sm:flex justify-center">

                        <Link to={project.url} className="cursor-default">
                            <motion.img 
                                whileHover={{ scale: [null, 1.2, 1.1], transition: { duration: 0.5 } }}
                                src={project.image} 
                                width={150} 
                                height={150} 
                                alt={project.title}
                                className={`mb-6 rounded-2xl cursor-pointer`}/>
                        </Link>

                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x:0 }}
                    initial= {{opacity: 1, x:100 }}
                    transition={{ duration: 1}}
                    viewport= {{ once: true }}
                    className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold  max-sm:text-center ">{project.title}</h3>
                        <p className="mb-4 text-neutral-400 max-sm:text-center ">{project.description}</p>
                        <div className=" max-sm:w-full max-sm:flex max-sm:justify-center max-sm:flex-wrap">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
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

export default Projets