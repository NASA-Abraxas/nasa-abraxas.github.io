import { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { BottomGlobe } from '../../component/BottomGlobe';
import ChapterChange from '../../component/ChapterChange';
import DialogueBox from '../../component/DialogueBox';
import { DifficultyContext, DifficultyType } from '../../context/DifficultyContext';
import { useDialogue } from '../../hook/useDialogue';
import { useNavigateNextPage } from '../../hook/useNavigateNextPage';
import { useTextAnimation } from '../../hook/useTextAnimation';
import dialogueData from './Dialogue.json';
import styles from './Dialogue.module.css';
import { DialogueBoxLeft } from '../../component/DialogueBoxLeft';

type DialogueData = {
    [key in DifficultyType]: {
        fullTextsDoctor: string[],
        fullTextsAlien: string[]
    }
}

const DialogueComponent = () => {
    const [startVisible, setStartVisible] = useState(true);
    const [dialogueVisible, setDialogueVisible] = useState(true);

    const [toggleInt, setToggleInt] = useState(0);
    const animationT1 = useTextAnimation('CHAT REQUEST FROM NASA ARRIVED', 20, () => setToggleInt(1));
    const animationT2 = useTextAnimation('ACCEPT?', 20);
    const handleNextPage = useNavigateNextPage();

    const { difficulty } = useContext(DifficultyContext);
    const { fullTextsDoctor, fullTextsAlien } = (dialogueData as DialogueData)[difficulty];
    const dialogue = useDialogue(fullTextsDoctor, fullTextsAlien, 20);
    // console.log(dialogue.isAnimating);
    useEffect(() => {
        if (dialogue.isDialogueStarted)
            setStartVisible(false);
    }, [dialogue.isDialogueStarted]);


    useEffect(() => {
        animationT1.startAnimation();
    }, []);

    useEffect(() => {
        if (toggleInt === 1) {
            animationT2.startAnimation();
        }
    }, [toggleInt]);


    return (
        <div className={styles["globe-container"]}>

            {dialogueVisible && (<div className={styles["dialogue-container"]}>
                {startVisible && (<>
                    <div id={styles['t1']}>{animationT1.text}</div>
                    <div id={styles['t2']}>{animationT2.text}</div>
                    <div id={styles['button']}>
                        <Fade delay={2000} duration={1000}>
                            <button className={styles["accept-button"]} onClick={dialogue.startNextText}>YES</button>
                        </Fade>
                    </div>
                </>)}

                {(dialogue.textIndex >= 0) && (<div className={styles['doctor-container']}>
                    <DialogueBoxLeft
                        imageSrc="/character_image/rodriguez.png"
                        name="Dr. Rodriguez"
                        text={dialogue.text1}
                        fullText={dialogue.currentText1}
                    />
                </div>)}

                {(dialogue.textIndex >= 1) && (<div className={styles['alien-container']}>
                    <DialogueBoxLeft
                        imageSrc="/character_image/e626.png"
                        name="E-626"
                        text={dialogue.text2}
                        fullText={dialogue.currentText2}
                    />
                </div>)}

                {(!dialogue.isAnimating && !startVisible) && (<div className={styles['button-container']}>
                    <Fade duration={1000}>
                        <button className="next-button" onClick={
                            dialogue.isDialogueEnded ?
                                () => { setDialogueVisible(false); } :
                                dialogue.startNextText
                        }>NEXT</button>
                    </Fade>
                </div>)}

                <div className={styles["skip-button-container"]}>
                    <Fade delay={2000} duration={1000}>
                        <button className={styles["skip-button"]} onClick={() => setDialogueVisible(false)}>SKIP</button>
                    </Fade>
                </div>

            </div>)}

            {!dialogueVisible && (
                <div className={styles['loader-container']}>
                    <ChapterChange loadingText="CONNECTING TO EARTH..." chapterText="CH 1: What is PACE?" onClick={handleNextPage} containerOffset={-250} />
                </div>
            )}

            <BottomGlobe />
        </div>
    )
}

export default DialogueComponent;