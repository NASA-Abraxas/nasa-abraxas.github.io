import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import markdown from './test.md';

const MarkdownTest = () => {
  return (
    <div style={{ "overflowY": "scroll", "height": "100vh", "position": "absolute" }}>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  );
};

export default MarkdownTest;
