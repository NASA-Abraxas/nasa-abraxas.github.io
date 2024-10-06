import { useState } from "react";
import { BottomGlobe } from "../../component/BottomGlobeZoomIn"
import ChapterChange from "../../component/ChapterChange"

const Ch2Page0Intro: React.FC = () => {
  const [zoomedIn, setZoomedIn] = useState(false);
  const handleZoomIn = () => {setZoomedIn(true)};

  return (
    <div className="page-container">
      <BottomGlobe zoomedIn={zoomedIn}/>
      <ChapterChange loadingText="LOADING..." chapterText="CH 2: What data does the satellite collect?" onClick={handleZoomIn} containerOffset={150}/>
    </div>
  )
}

export default Ch2Page0Intro;