import { motion } from 'framer-motion'

export const Section = (props) => {
    const { children, mobileTop } = props

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className={`
        min-h-screen w-full p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center
        ${mobileTop ? 'justify-start pt-24 md:justify-center md:pt-0' : ''}
      `}
        >
            {children}
        </motion.section>
    )
}
