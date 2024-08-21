import type { NextPage } from 'next';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Education  } from '../containers/Education';
import { Experience  } from '../containers/Experience';
import { Greetings } from '../containers/Greetings';
import { Proficiency } from '../containers/Proficiency';
import { Skills } from '../containers/Skills';
import { Projects } from '../containers/Projects';
import { GithubProfileCard } from '../components/GithubProfileCard';

const Home: NextPage = () => {
  return (
    <main className="w-full min-h-screen items-center">
      <div className="items-center min-h-screen py-2">
        <Greetings />
        <Skills />
        <Proficiency />
        <Education />
        <Experience />
        <Projects />
        <GithubProfileCard />
      </div>
    </main>
  );
};

export default Home;
