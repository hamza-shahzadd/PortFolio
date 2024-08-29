import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hamza.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import InstagramLight from '../../assets/instagram-dark.svg';
import Instagram from '../../assets/instagram.svg';
import CV from '../../assets/Hamza Shahzad Web Developer.pdf'
import { useTheme } from '../../common/ThemeContext';
import resume from '../../assets/Hamza.pdf';
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme ==='light'? InstagramLight:Instagram;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Hamza Shahzad"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Muhammad
          <br />
          Hamza
          <br />
          Shahzad
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://www.instagram.com/hamza_shahzad10/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/hamza-shahzadd?tab=repositories" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/hamza-shahzad-011800250/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for full stack development using various stacks.
        </p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className="hover">Resume</button>
        </a>
        </div>
    </section>
  );
}

export default Hero;
