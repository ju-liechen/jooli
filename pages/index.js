import Image from "next/image"
import Link from "next/link"
import { useTheme } from 'contexts/ThemeContext'

import styles from './home.module.scss'


function Home() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={styles['home-wrapper']}>
      <div className={isDarkMode ? styles['block-dark'] : styles['block-light']} />
      <div className={styles['about-section']}>
        <Image src="/jooli_avatar.jpg" alt="avatar" width={400} height={500} className={styles['image']} />
        <div className={styles['about-section-body']}>
          <div className={styles['about-section-body-content']}>
            <h1 className={styles['about-section-body-content-heading']}>about</h1>
            <h2>Hi, it's me. Julie AKA Jooli.</h2>
            <span>
              I’m a full-stack web developer with a focus on building scalable backends and dynamic user experiences.
              I specialize in Django (REST and Ninja) for API development, and React (JavaScript/TypeScript) for crafting responsive, user-friendly interfaces.
            </span>
          </div>
          <div className={styles['about-section-body-links']}>
            <Link href="https://github.com/ju-liechen" target="_blank">github</Link>
            <Link href="https://linkedin.com/in/ju-liechen" target="_blank">linked in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.Layouts = ['MainLayout'];
export default Home;