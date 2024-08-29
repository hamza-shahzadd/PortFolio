import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import Mentorly from '../../assets/Mentorly.png';
import Medicam from '../../assets/Medicam.avif';
import Encore from '../../assets/Encore.jpeg';
import Blockchain from '../../assets/Blockchain.png';
import Ride from '../../assets/Ride.jpeg';
import Tekken from '../../assets/Tekken.jpeg';
import Phishing from '../../assets/Phishing.png';
import Generative from '../../assets/Generative.jpeg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Mentorly}
          link="https://mentorly-peach.vercel.app/"
          h3="Mentorly"
          p="Mentorship Platform (MERN)"
        />
        <ProjectCard
          src={Medicam}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Medicam"
          p="Eccomerce(.Net + React)"
        />
        <ProjectCard
          src={Encore}
          link="https://github.com/hamza-shahzadd/Car-Dealership-Management-Sytem-using-JAVA-main"
          h3="Encore"
          p="Car Dealership(Java)"
        />
        <ProjectCard
          src={Blockchain}
          link="https://github.com/hamza-shahzadd/BloackChain_P2P_System-master"
          h3="Blockchain"
          p="P2P System-master(Go Lang)"
        />
        <ProjectCard
          src={Ride}
          link="https://github.com/hamza-shahzadd/Ride-Services-Gap-predictor-using-Machine-Learning-main"
          h3="Ride Services"
          p="Service gap predictor using ML"
        />
        <ProjectCard
          src={Tekken}
          link="https://github.com/hamza-shahzadd/Street-Fighter-Bot-Move-Predictor-from-Player-input-using-Machine-Learning-main"
          h3="Street Fighter"
          p="Bot mover using ML"
        />
        <ProjectCard
          src={Phishing}
          link="https://github.com/hamza-shahzadd/Phishing-Email-Detection"
          h3="Phishing"
          p="Phishing Email Detection"
        />
        <ProjectCard
          src={Generative}
          link="https://github.com/hamza-shahzadd/String-based-Text-Generation"
          h3="Text Generation"
          p="String Based Text Generation"
        />
      </div>
      <br/>
      <br/>
      <p className="sectionTitle" style={{ fontSize: '14px', marginTop: '20px' }}>
  Visit my 
  <a href="https://github.com/hamza-shahzadd" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#007bff', textDecoration: 'underline', marginLeft: '5px' }}>
    GitHub 
  </a>
   for more projects
</p>


    </section>
  );
}

export default Projects;
