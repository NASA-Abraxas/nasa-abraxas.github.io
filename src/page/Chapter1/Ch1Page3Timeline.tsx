import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { DialogueBoxRight } from "../../component/DialogueBoxRight";
import { NextButton } from "../../component/NextButton";
import { DifficultyContext, DifficultyType } from "../../context/DifficultyContext";
import { useTextAnimation } from "../../hook/useTextAnimation";
import { useWindowSize } from "../../hook/useWindowSize";
import details from "./Ch1Page3Timeline.json";
import styles from "./Ch1Page3Timeline.module.css";

interface Details {
  [key: string]: {
    title: string,
    description: {
      [key in DifficultyType]?: string
    }
  }
}

export const Ch1Page3Timeline = () => {
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(false);

  const dimension = useWindowSize();
  const { difficulty } = useContext(DifficultyContext);

  const fullText = "This is history of our Earth observing project! Click on the images to learn more about each satellite.";
  const { text, startAnimation } = useTextAnimation(fullText);
  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const [selected, setSelected] = useState<string>("");

  const [startInfo, setStartInfo] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [endInfo, setEndInfo] = useState({ x: 10, y: 10, width: 10, height: 10 });
  const endRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => {
      if (endRef.current && selected && endRef.current.offsetWidth) {
        const info = {
          x: endRef.current.offsetLeft,
          y: endRef.current.offsetTop,
          width: endRef.current.offsetWidth,
          height: endRef.current.offsetHeight
        };
        // console.log("end", info);
        setEndInfo(info);
      }
    }, 0)
  },
    [
      selected,
      endRef.current?.offsetLeft,
      endRef.current?.offsetTop,
      endRef.current?.offsetWidth,
      endRef.current?.offsetHeight
    ]);


  const handleImageClick = (e: any) => {
    setSelected(e.target.alt);
    const info = {
      x: e.target.offsetLeft
        + e.target.parentElement.parentElement.offsetLeft
        + e.target.parentElement.parentElement.parentElement.offsetLeft
        + e.target.parentElement.parentElement.parentElement.parentElement.offsetLeft,
      y: e.target.offsetTop
        + e.target.parentElement.parentElement.offsetTop
        + e.target.parentElement.parentElement.parentElement.offsetTop
        + e.target.parentElement.parentElement.parentElement.parentElement.offsetTop,
      width: e.target.offsetWidth,
      height: e.target.offsetHeight
    };
    // console.log("start", info);
    setStartInfo(info);
  }
  const handleReset = () => {
    setSelected("");
    setIsNextButtonVisible(true);
  }

  const [isAnimating, setIsAnimating] = useState(false);
  const duration = 0.5;
  useEffect(() => {
    if (selected) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, duration * 1000);
    }
  }, [selected]);

  if (isAnimating && selected) {
    return (
      <div className="page-container" style={{ display: !(isAnimating && selected) ? 'none' : undefined }}>
        <div className={styles["selected-container"]}>
          <div className={styles["selected-image"]} style={{ position: "absolute" }}>
            <motion.img src={`satellite_history_image/${selected.toLowerCase()}.jpg`} alt={selected}
              initial={{ position: "absolute", top: startInfo.y, left: startInfo.x, width: startInfo.width, height: startInfo.height }}
              animate={{ position: "absolute", top: endInfo.y, left: endInfo.x, width: endInfo.width, height: endInfo.height }}
              transition={{ duration }}
            />
          </div>
          <div className={styles["selected-image"]} style={{ visibility: "hidden" }} >
            <img src={`satellite_history_image/${selected.toLowerCase()}.jpg`} alt={selected || "none"} ref={endRef} />
          </div>
          <motion.div className={styles["selected-description"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration * 0.3, delay: duration * 0.7 }}
          >
            <h1>{(details as Details)[selected]?.title}</h1>
            <p>
              {(details as Details)[selected]?.description[difficulty]}
              {selected === "PACE" &&
                <img src="hover_here.png" alt="Hover Here" />
              }
            </p>
          </motion.div>

        </div>
      </div >
    )
  }

  // when .selected-description>p hover, give .comparison-container display:flex
  // when .comparison-container:hover, give display:flex



  return (
    <div className="page-container" style={{ display: (isAnimating && selected) ? 'none' : undefined }}>
      {
        !selected
          ? <>
            <div className={styles['dialogue-container']}>
              <DialogueBoxRight imageSrc="character_image/rodriguez.png" name="Dr. Rodriguez" text={text} fullText={fullText} />
            </div>
            <div className={styles["container"]}>
              <div className={styles["timeline"]}>

                <div className={`${styles["event"]} }`}>
                  <div className={styles["label"]}>CZCS</div>
                  <div className={styles["image"]} style={{ height: dimension.height * 0.25 }}>
                    <img src="satellite_history_image/czcs.jpg" alt="CZCS" onClick={handleImageClick} />
                  </div>
                  <div className={styles["year"]}>1978</div>
                  <div className={styles["hidden"]}>
                    <div className={styles["image"]} style={{ height: dimension.height * 0.25 }}>
                      <img src="satellite_history_image/czcs.jpg" alt="CZCS" onClick={handleImageClick} />
                    </div>
                    <div className={styles["label"]}>CZCS</div>
                  </div>
                </div>


                <div className={`${styles["event"]} ${styles["event-reverse"]}`}>
                  <div className={styles["label"]}>SeaWiFS</div>
                  <div className={styles["image"]} style={{ height: dimension.height * 0.25 }}>
                    <img src="satellite_history_image/seawifs.jpg" alt="SeaWiFS" onClick={handleImageClick} />
                  </div>
                  <div className={styles["year"]}>1997</div>
                  <div className={styles["hidden"]}>
                    <div className={styles["image"]} style={{ height: dimension.height * 0.25 }}>
                      <img src="satellite_history_image/seawifs.jpg" alt="SeaWiFS" onClick={handleImageClick} />
                    </div>
                    <div className={styles["label"]}>SeaWiFS</div>
                  </div>
                </div>


                <div className={`${styles["event"]} }`}>
                  <div className={styles["label"]}>VIIRS</div>
                  <div className={styles["image"]} style={{ height: dimension.height * 0.25 }}>
                    <img src="satellite_history_image/viirs.jpg" alt="VIIRS" onClick={handleImageClick} />
                  </div>
                  <div className={styles["year"]}>2011</div>
                  <div className={styles["hidden"]}>
                    <div className={styles["image"]} style={{ height: dimension.height * 0.25 }}>
                      <img src="satellite_history_image/viirs.jpg" alt="VIIRS" onClick={handleImageClick} />
                    </div>
                    <div className={styles["label"]}>VIIRS</div>
                  </div>
                </div>


                <div className={`${styles["event"]} ${styles["event-reverse"]}`}>
                  <div className={styles["label"]}>PACE</div>
                  <div className={styles["image"]} style={{ height: dimension.height * 0.25 }}>
                    <img src="satellite_history_image/pace.jpg" alt="PACE" onClick={handleImageClick} />
                  </div>
                  <div className={styles["year"]}>2024</div>
                  <div className={styles["hidden"]}>
                    <div className={styles["image"]} style={{ height: dimension.height * 0.25 }}>
                      <img src="satellite_history_image/pace.jpg" alt="PACE" onClick={handleImageClick} />
                    </div>
                    <div className={styles["label"]}>PACE</div>
                  </div>
                </div>
              </div>
            </div>
            {isNextButtonVisible && <NextButton delay={1000} />}
          </>
          : <>
            <div className={styles["selected-container"]}>
              <div className={styles["selected-image"]}>
                <img src={`satellite_history_image/${selected.toLowerCase()}.jpg`} alt={selected} />
              </div>
              <div className={styles["selected-description"]}>
                <h1>{(details as Details)[selected].title}</h1>
                <p
                  onMouseOver={() => {
                    if (selected !== "PACE") return;
                    const comparison = document.querySelector(`.${styles["comparison-container"]}`);
                    if (comparison) comparison.classList.add(styles["comparison-container-active"]);
                  }}
                  onMouseOut={() => {
                    if (selected !== "PACE") return;
                    const comparison = document.querySelector(`.${styles["comparison-container"]}`);
                    if (comparison) comparison.classList.remove(styles["comparison-container-active"]);
                  }}
                >
                  {(details as Details)[selected].description[difficulty]}
                  {selected === "PACE" &&
                    <img src="hover_here.png" alt="Hover Here" />
                  }
                </p>
              </div>
              <div className={styles["button-container"]}>
                <button onClick={handleReset}>BACK TO TIMELINE</button>
              </div>

              <div className={styles["comparison-container"]}>
                <div>
                  <div>
                    <img src="ch1page3/figure1.png" alt="Figure 1" />
                  </div>
                  <div>
                    <img src="ch1page3/figure2.png" alt="Figure 2" />
                  </div>
                </div>
                <p>{(details as Details)["Comparison"].description[difficulty]}</p>
              </div>
            </div>
          </>
      }
    </div>
  )
}