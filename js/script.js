const updatePreview = () => {
 document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value);
};

const setDefault = () => {


 let defaultText = `# H1

## H2

[Link](https://www.freecodecamp.org/learn/)

## inline code
<dl>
 <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
 <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## code blocks
\`I am an inline code block\`

\`\`\`
const multiLineCodeBlock = () => {
 return "I am a multiline code block"
}
\`\`\`



- List Item 1
- List Item 2
- List Item 3

> Block Quote

**Bolded text**

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
 `;
 let editorField = document.getElementById("editor");
 let previewElement = document.getElementById("preview");
 editorField.value = defaultText;
 previewElement.innerHTML = marked(defaultText);
};