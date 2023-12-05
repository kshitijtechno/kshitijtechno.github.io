import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CodeSnippet = ({ language, code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div>
      <SyntaxHighlighter language={language} style={dracula} showLineNumbers wrapLines={true}>
        {code}
      </SyntaxHighlighter>
      <div>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button>
            {isCopied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CodeSnippet;
