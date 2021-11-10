import React, { useEffect, useRef } from 'react';
import Prism from "prismjs";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';

interface CodeHighlightProps {
    lang?: string
    style?: React.CSSProperties
    children: React.ReactNode
}

export const CodeHighlight = (props: CodeHighlightProps) => {

    const codeElement = useRef(null);

    useEffect(() => {
        if (Prism && codeElement.current != null) {
            Prism.highlightElement(codeElement.current);
        }
    }, []);

    return (
        <pre style={props.style}>
            <code ref={codeElement} className={`language-${props.lang}`}>
                {props.children}&nbsp;
                </code>
        </pre>
    );
}

