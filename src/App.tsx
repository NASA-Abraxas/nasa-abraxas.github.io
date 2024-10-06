import './App.css'
import EarthGlobe from './page/Introduction/Globe';
import LoadingComponent from './page/Introduction/Loading';
import DialogueComponent from './page/Introduction/Dialogue';
import { OpacityTransitionAnimation } from './component/OpacityTransitionAnimation';
import { Ch1Page0WhatIsPace } from './page/Chapter1/Ch1Page0WhatIsPace';
import LogComponent from './page/Introduction/Log';
import { Ch1Page1Satellite } from './page/Chapter1/Ch1Page1Satellite';
import { Ch1Page2PaceDetail } from './page/Chapter1/Ch1Page2PaceDetail';
import { Ch1Page3Timeline } from './page/Chapter1/Ch1Page3Timeline';
import { Ch3Page2GlobePin } from './page/Chapter3/Ch3Page2GlobePin';
import Ch3Page0Intro from './page/Chapter3/Ch3Page0Intro';
import { Ch3Page1Dialogue } from './page/Chapter3/Ch3Page1Dialogue';
import { Chapter2RoutesTest } from './page/Chapter2/RoutesTest';
import { ColumnNavContainer } from './component/ColumnNavContainer';
import Ch2Intro from './page/Chapter2/Ch2Intro';
import { useState } from 'react';
import { DifficultyType, DifficultyContext } from './context/DifficultyContext';
import { Ch3Page3Dialogue } from './page/Chapter3/Ch3Page3Dialogue';
import { GamePage0Intro } from './page/Game/GamePage0Intro';
import GamePage1Start from './page/Game/GamePage1Start';
import GamePage2Start from './page/Game/GamePage2Start';
import { QuizProvider } from './page/Game/QuizContext';
import { QuizRoutes } from './page/Game/QuizRoutes';

function App() {
  const [difficulty, setDifficulty] = useState<DifficultyType>('senior');

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      <ColumnNavContainer>
        <OpacityTransitionAnimation>
          <LoadingComponent />
          <LogComponent />
          <EarthGlobe />
          <DialogueComponent />
          {/* Chapter 1 */}
          <Ch1Page0WhatIsPace />
          <Ch1Page1Satellite />
          <Ch1Page2PaceDetail />
          <Ch1Page3Timeline />
          {/* Chapter 2 */}
          <Ch2Intro />
          <Chapter2RoutesTest />
          {/* Chapter 3 */}
          <Ch3Page0Intro />
          <Ch3Page1Dialogue />
          <Ch3Page2GlobePin />
          <Ch3Page3Dialogue />
          {/* Game */}
          <GamePage0Intro />
          <GamePage1Start />
          <GamePage2Start />
          <QuizProvider>
            <QuizRoutes />
          </QuizProvider>
        </OpacityTransitionAnimation>
      </ColumnNavContainer>
    </DifficultyContext.Provider>
  );
}

export default App


