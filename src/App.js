import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css'; // Import the updated CSS

const App = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to My Cool Markdown Previewer!

## Sub-heading with Style

Here's something interesting:

Inline code example: \`<span>Hello, World!</span>\`

\`\`\`javascript
// Multi-line code with some style
function displayMessage() {
  console.log("Welcome to Markdown Previewer!");
}
\`\`\`

Want to see **bold** or *italic* text? We can also do **_both_**!

~~Strikethroughs~~ are fun to use too.

> \"Markdown makes writing fun and easy!\" - Someone famous

Check out this [awesome link](https://www.openai.com)!

### Lists are great:
- This is a bullet point
  - Nested bullet for emphasis
- Markdown is flexible

1. Numbered lists? Sure!
2. Easy to add items.
3. Markdown is awesome!

| Feature       | Benefit           | Example            |
|---------------|-------------------|--------------------|
| Easy to use   | Simple formatting | Write beautifully  |
| Versatile     | Many options      | Lists, links, etc. |

**Don't forget:** Creativity is key!
`);

  return (
    <div id="container" style={{ textAlign: 'center', paddingTop: '20px' }}>
      <h1 style={{ color: '#0056b3', fontSize: '2.5em' }}>Welcome to My Styled Markdown Previewer!</h1>
      <div id="editor-container" style={{ margin: '20px auto', width: '60%' }}>
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          style={{ width: '100%', height: '200px', padding: '10px', border: '2px solid #8baac7', borderRadius: '10px' }}
        />
      </div>
      <div id="preview-container" style={{ margin: '20px auto', width: '60%', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          style={{ textAlign: 'left', color: '#333', lineHeight: '1.6' }}
        />
      </div>
    </div>
  );
};

export default App;
