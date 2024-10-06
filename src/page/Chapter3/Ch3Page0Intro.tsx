import { useEffect, useState } from "react";
import { BottomGlobe } from "../../component/BottomGlobeZoomOut";
import ChapterChange from "../../component/ChapterChange";
import { useNavigateNextPage } from "../../hook/useNavigateNextPage";

const Ch3Page0Intro: React.FC = () => {
  const handleNext = useNavigateNextPage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2500);
  }, []);

  return (
    <div className="page-container">
      <BottomGlobe />
      {show && (<ChapterChange loadingText="LOADING..." chapterText="CH 3: What can we do with these data?" onClick={handleNext} containerOffset={50}/>)}
    </div>
  )
}

export default Ch3Page0Intro;