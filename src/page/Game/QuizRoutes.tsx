import { Route, Routes, useLocation } from "react-router-dom"
import Results from "./Results";
import Quiz from "./Quiz";
import CheckAnswers from "./CheckAnswers";

export const QuizRoutes = () => {
    const location = useLocation();
    return (<Routes location={location}>
        <Route path="/" element={
            <Quiz
                questionNumber={1}
                characterImage="/character_image/C-023.png"
                characterName="C-023 (Council Member)"
                questionText="What is the main objective of NASA's PACE mission that you learned about?"
                answers={[
                "A) To explore distant galaxies",
                "B) To study Earth's oceans and atmosphere",
                "C) To mine resources from asteroids",
                "D) To build colonies on Mars"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={1} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz2" element={
            <Quiz
                questionNumber={2}
                characterImage="/character_image/E-046.png"
                characterName="E-046 (Engineer)"
                questionText="Which primary instrument on PACE helps in measuring the properties of light from the ocean to study phytoplankton?"
                answers={[
                "A) SPEXone",
                "B) Radiator Shield",
                "C) Ocean Color Instrument (OCI)",
                "D) Solar Array"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={2} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz3" element={
            <Quiz
                questionNumber={3}
                characterImage="/character_image/S-529.png"
                characterName="S-529 (Scientist)"
                questionText="What are aerosols that PACE monitors in Earth's atmosphere?"
                answers={[
                "A) Tiny particles suspended in the air",
                "B) Large ocean currents",
                "C) Underground rock formations",
                "D) Types of clouds"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={0} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz4" element={
            <Quiz
                questionNumber={4}
                characterImage="/character_image/S-529.png"
                characterName="S-529 (Scientist)"
                questionText="Why is it important to study different types of phytoplankton using PACE's data?"
                answers={[
                "A) To improve underwater navigation systems",
                "B) To understand ocean health and climate impact",
                "C) To find new sources of minerals",
                "D) To enhance satellite communications"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={1} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz5" element={
            <Quiz
                questionNumber={5}
                characterImage="/character_image/S-529.png"
                characterName="S-529 (Scientist)"
                questionText="How do aerosols influence Earth's energy balance?"
                answers={[
                "A) By absorbing or reflecting sunlight",
                "B) By changing Earth's orbit",
                "C) By generating geothermal energy",
                "D) By affecting ocean tides"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={0} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz6" element={
            <Quiz
                questionNumber={6}
                characterImage="/character_image/E-046.png"
                characterName="E-046 (Engineer)"
                questionText="Which instrument on PACE measures the Degree of Linear Polarization (DoLP) of sunlight to study aerosols?"
                answers={[
                "A) HARP2",
                "B) Bus",
                "C) SPEXone",
                "D) OCI"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={2} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz7" element={
            <Quiz
                questionNumber={7}
                characterImage="/character_image/S-529.png"
                characterName="S-529 (Scientist)"
                questionText="What does 'water-leaving radiance' refer to in PACE's ocean studies?"
                answers={[
                "A) Heat emitted by the ocean",
                "B) Light reflected from the ocean surface",
                "C) Sound waves traveling through water",
                "D) Movements of tectonic plates underwater"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={1} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz8" element={
            <Quiz
                questionNumber={8}
                characterImage="/character_image/C-023.png"
                characterName="C-023 (Council Member)"
                questionText="How does PACE help in detecting Harmful Algal Blooms (HABs)?"
                answers={[
                "A) By increasing water temperatures",
                "B) By measuring specific light absorption patterns of phytoplankton",
                "C) By altering ocean currents",
                "D) By sampling ocean water directly"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={1} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz9" element={
            <Quiz
                questionNumber={9}
                characterImage="/character_image/S-529.png"
                characterName="S-529 (Scientist)"
                questionText="What types of aerosols does PACE study to understand air quality and climate?"
                answers={[
                "A) Only dust aerosols",
                "B) All types, including carbon, sulfate, dust, sea salt, and nitrate aerosols",
                "C) Only sea salt aerosols",
                "D) Only man-made aerosols"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={1} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz10" element={
            <Quiz
                questionNumber={10}
                characterImage="/character_image/C-023.png"
                characterName="C-023 (Council Member)"
                questionText="How can the data collected by PACE lead to economic benefits?"
                answers={[
                "A) By improving weather forecasts for better crop planning",
                "B) By finding hidden treasures in the ocean",
                "C) By mining precious metals from asteroids",
                "D) By creating new currencies"
                ]}
                onAnswerSelected={(answer) => console.log("Selected Answer:", answer)}
                correctAnswer={0} // starts from 0
                answerCharacterImage="/character_image/e626.png"
            />
        }/>
        <Route path="/quiz11" element={<CheckAnswers/>}/>
        <Route path="/results" element={<Results/>}/>
    </Routes>)
}