import { useContext, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { BottomGlobe } from '../../component/BottomGlobe';
import DialogueBox from '../../component/DialogueBox';
import { DifficultyContext, DifficultyType } from '../../context/DifficultyContext';
import { useDialogue } from '../../hook/useDialogue';
import { useNavigateNextPage } from '../../hook/useNavigateNextPage';
import dialogueData from './Ch3Page3Dialogue.json';
import styles from './Ch3Page3Dialogue.module.css';

type DialogueData = {
    [key in DifficultyType]: {
        fullTextsDoctor: string[];
        fullTextsAlien: string[];
    }
}

export const Ch3Page3Dialogue = () => {
    const handleNext = useNavigateNextPage();
    const { difficulty } = useContext(DifficultyContext);
    const { fullTextsDoctor, fullTextsAlien } = (dialogueData as DialogueData)[difficulty];
    const dialogue = useDialogue(fullTextsAlien, fullTextsDoctor, 20);
    useEffect(() => {
        dialogue.startNextText();
    }, []);

    return (
        <div className={styles["globe-container"]}>
            <BottomGlobe />
            <div className={styles["dialogue-container"]}>
                {(dialogue.textIndex >= 0) && (<div className={styles['doctor-container']}>
                    <DialogueBox
                        imageSrc="/character_image/e626.png"
                        name="E-626"
                        text={dialogue.text1}
                    />
                </div>)}

                {(dialogue.textIndex >= 1) && (<div className={styles['alien-container']}>
                    <DialogueBox
                        imageSrc="/character_image/rodriguez.png"
                        name="Dr. Rodriguez"
                        text={dialogue.text2}
                    />
                </div>)}

                {(!dialogue.isAnimating) && (<div className={styles['button-container']}>
                    <Fade duration={1000}>
                        <button className="next-button" onClick={
                            dialogue.isDialogueEnded ?
                                handleNext :
                                dialogue.startNextText
                        }>NEXT</button>
                    </Fade>
                </div>)}
                <div className={styles["skip-button-container"]}>
                    <Fade delay={500} duration={1000}>
                        <button className={styles["skip-button"]} onClick={handleNext}>SKIP</button>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

