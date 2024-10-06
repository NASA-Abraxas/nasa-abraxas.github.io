// // Results.tsx
// import { useContext } from 'react';
// import { QuizContext } from './QuizContext';

// const Results = () => {
//   const { results } = useContext(QuizContext);
//   console.log(results);
//   const correctCount = results.filter((result) => result).length;

//   return (
//     <div>
//       <h2>Quiz Results</h2>
//       <p>
//         You answered {correctCount} out of {results.length} quizzes correctly.
//       </p>
//     </div>
//   );
// };

// export default Results;





import React, { useEffect } from 'react';
import styles from './Results.module.css';  // Importing the CSS Module
import { QuizContext } from './QuizContext';  // Importing the QuizContext
import { useContext } from 'react';  // Importing the useContext hook
import { useNavigate } from 'react-router-dom';
import { useTextAnimation } from '../../hook/useTextAnimation';
import { Fade } from 'react-awesome-reveal';

const Results: React.FC = () => {
  const handleNavigate = useNavigate();
  const { results } = useContext(QuizContext);
  console.log(results);
  const correctCount = results.filter((result) => result).length;

  if (correctCount < 3) {

    const [case1, setCase1] = React.useState(true);
    const [case2, setCase2] = React.useState(false);

    const textAnimation1 = useTextAnimation("E-626 returns with limited knowledge. The Aquaferian Council attempts to address the environmental crises but lacks crucial information. Without understanding the importance of aerosols, phytoplankton, and the data collected by missions like PACE, their efforts fall short.", 30);
    const textAnimation2 = useTextAnimation("The oceans continue to deteriorate, harmful algal blooms devastate marine life, and air quality worsens. The planet faces irreversible damage, and hope dwindles among its inhabitants.", 30);
    useEffect(() => {
      setTimeout(() => {
        textAnimation1.startAnimation();
      }, 2000);
    }, []);

    return (
      <div className={styles.resultsContainer}>
        <div className={styles.summary}>
          <div className={styles.score}>
            Correct Answers: {correctCount} / 10
          </div>
          <div className={styles.details}>
            {case1 && <div className={styles.detailsText}>{textAnimation1.text}</div>}
            {case2 && <div className={styles.detailsText}>{textAnimation2.text}</div>}
          </div>
        </div>
        <div className={styles.failureMessage}>Aquaferia Failed to Recover</div>
        <div className={styles.planetContainer}>
          <Fade delay={1000} duration={1000}><img src="/character_image/stage1.png" alt="Planet Image" className={styles.planetImage} /></Fade>
        </div>
        <div className={styles.actions}>
          {textAnimation2.isFinished &&(<button className={styles.tryAgainButton} onClick={() => {handleNavigate('/page14')}}>TRY AGAIN</button>)}
          {textAnimation2.isFinished && (<button className={styles.finishButton} onClick={() => {handleNavigate('/page2')}}>FINISH</button>)}
          {case1 && textAnimation1.isFinished && (<button className={styles.finishButton} onClick={() => {setCase2(true); setCase1(false); textAnimation2.startAnimation();}}>NEXT</button>)}
        </div>
      </div>
    );
  } 
  else if (correctCount < 6) {
    const [case1, setCase1] = React.useState(true);
    const [case2, setCase2] = React.useState(false);

    const textAnimation1 = useTextAnimation("E-626 provides some useful insights, sparking initial efforts to tackle environmental issues. The Aquaferians begin basic monitoring of their oceans and atmosphere. They see small improvements, such as slight reductions in pollution and better responses to environmental hazards.", 30);
    const textAnimation2 = useTextAnimation("However, without a comprehensive understanding, significant challenges remain. The recovery is slow, and while there's a glimmer of hope, much work is needed to restore Aquaferia fully.", 30);
    useEffect(() => {
      setTimeout(() => {
        textAnimation1.startAnimation();
      }, 2000);
    }, []);

    return (
      <div className={styles.resultsContainer}>
        <div className={styles.summary}>
          <div className={styles.score}>
            Correct Answers: {correctCount} / 10
          </div>
          <div className={styles.details}>
            {case1 && <div className={styles.detailsText}>{textAnimation1.text}</div>}
            {case2 && <div className={styles.detailsText}>{textAnimation2.text}</div>}
          </div>
        </div>
        <div className={styles.failureMessage}>Aquaferia Recovered a Little Bit</div>
        <div className={styles.planetContainer}>
          <Fade delay={1000} duration={1000}><img src="/character_image/stage2.png" alt="Planet Image" className={styles.planetImage} /></Fade>
        </div>
        <div className={styles.actions}>
        {textAnimation2.isFinished &&(<button className={styles.tryAgainButton} onClick={() => {handleNavigate('/page14')}}>TRY AGAIN</button>)}
          {textAnimation2.isFinished && (<button className={styles.finishButton} onClick={() => {handleNavigate('/page2')}}>FINISH</button>)}
          {case1 && textAnimation1.isFinished && (<button className={styles.finishButton} onClick={() => {setCase2(true); setCase1(false); textAnimation2.startAnimation();}}>NEXT</button>)}
        </div>
      </div>
    );
  } 
  else if (correctCount < 9) {
    const [case1, setCase1] = React.useState(true);
    const [case2, setCase2] = React.useState(false);

    const textAnimation1 = useTextAnimation("Armed with valuable knowledge, E-626 helps the Aquaferians implement advanced monitoring systems inspired by PACE. They accurately track aerosols and phytoplankton, predicting and preventing harmful events like algal blooms.", 30);
    const textAnimation2 = useTextAnimation("The oceans become healthier, supporting a resurgence of marine life. Air quality improves, leading to better health for the population. Sustainable practices are adopted across industries. Aquaferia experiences a significant recovery, setting a course toward a prosperous and sustainable future.", 30);
    useEffect(() => {
      setTimeout(() => {
        textAnimation1.startAnimation();
      }, 2000);
    }, []);

    return (
      <div className={styles.resultsContainer}>
        <div className={styles.summary}>
          <div className={styles.score}>
            Correct Answers: {correctCount} / 10
          </div>
          <div className={styles.details}>
            {case1 && <div className={styles.detailsText}>{textAnimation1.text}</div>}
            {case2 && <div className={styles.detailsText}>{textAnimation2.text}</div>}
          </div>
        </div>
        <div className={styles.failureMessage}>Aquaferia Recovered Sufficiently</div>
        <div className={styles.planetContainer}>
          <Fade delay={1000} duration={1000}><img src="/character_image/stage3.png" alt="Planet Image" className={styles.planetImage} /></Fade>
        </div>
        <div className={styles.actions}>
        {textAnimation2.isFinished &&(<button className={styles.tryAgainButton} onClick={() => {handleNavigate('/page14')}}>TRY AGAIN</button>)}
          {textAnimation2.isFinished && (<button className={styles.finishButton} onClick={() => {handleNavigate('/page2')}}>FINISH</button>)}
          {case1 && textAnimation1.isFinished && (<button className={styles.finishButton} onClick={() => {setCase2(true); setCase1(false); textAnimation2.startAnimation();}}>NEXT</button>)}
        </div>
      </div>
    );
  } else {
    const [case1, setCase1] = React.useState(true);
    const [case2, setCase2] = React.useState(false);

    const textAnimation1 = useTextAnimation("E-626 returns as a hero, sharing comprehensive and precise information. The Aquaferians fully grasp the importance of studying aerosols, clouds, and ocean ecosystems. They develop cutting-edge technologies and policies that mirror the successes of Earth's PACE mission.", 30);
    const textAnimation2 = useTextAnimation("Environmental issues are systematically addressed and resolved. The oceans thrive with diverse marine life, the atmosphere is clean, and the climate stabilizes. Aquaferia transforms into a beacon of environmental stewardship, showcasing how knowledge and action can heal a planet. The society flourishes, and the future is bright for all Aquaferians.", 30);
    useEffect(() => {
      setTimeout(() => {
        textAnimation1.startAnimation();
      }, 2000);
    }, []);

    return (
      <div className={styles.resultsContainer}>
        <div className={styles.summary}>
          <div className={styles.score}>
            Correct Answers: {correctCount} / 10
          </div>
          <div className={styles.details}>
            {case1 && <div className={styles.detailsText}>{textAnimation1.text}</div>}
            {case2 && <div className={styles.detailsText}>{textAnimation2.text}</div>}
          </div>
        </div>
        <div className={styles.failureMessage}>Aquaferia Recovered Fully</div>
        <div className={styles.planetContainer}>
          <Fade delay={1000} duration={1000}><img src="/character_image/stage4.png" alt="Planet Image" className={styles.planetImage} /></Fade>
        </div>
        <div className={styles.actions}>
          {textAnimation2.isFinished &&(<button className={styles.tryAgainButton} onClick={() => {handleNavigate('/page14')}}>TRY AGAIN</button>)}
          {textAnimation2.isFinished && (<button className={styles.finishButton} onClick={() => {handleNavigate('/page2')}}>FINISH</button>)}
          {case1 && textAnimation1.isFinished && (<button className={styles.finishButton} onClick={() => {setCase2(true); setCase1(false); textAnimation2.startAnimation();}}>NEXT</button>)}
        </div>
      </div>
    );
  }
};

export default Results;
