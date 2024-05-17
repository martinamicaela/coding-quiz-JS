const questions = [
    {
        question: "What is the difference between an HTML element and an HTML tag?",
        answers: [
            { text: "An element is a complete structure, while a tag is a part of it.", correct: true },
            { text: "An element is a tag without attributes.", correct: false },
            { text: "An element is the closing tag only.", correct: false },
            { text: "An element is always invisible in the browser.", correct: false }
        ]
    },
    {
        question: "What are HTML attributes?",
        answers: [
            { text: "Styles applied to HTML tags.", correct: false },
            { text: "Additional information about an HTML element.", correct: true },
            { text: "Tags used within other tags.", correct: false },
            { text: "Comments within the HTML code.", correct: false }
        ]
    },
    {
        question: "What is the purpose of the <!DOCTYPE> declaration in HTML?",
        answers: [
            { text: "To link external CSS files.", correct: false },
            { text: "To declare the document type and HTML version.", correct: true },
            { text: "To include JavaScript files.", correct: false },
            { text: "To comment out sections of HTML.", correct: false }
        ]
    },
    {
        question: "What is the difference between block-level and inline elements?",
        answers: [
            { text: "Block-level elements can contain only text, while inline elements can contain other elements.", correct: false },
            { text: "Block-level elements start on a new line, while inline elements do not.", correct: true },
            { text: "Inline elements can only be used inside forms.", correct: false },
            { text: "Block-level elements are only used for lists.", correct: false }
        ]
    },
    {
        question: "What is the purpose of the alt attribute in an <img> tag?",
        answers: [
            { text: "To set the image dimensions.", correct: false },
            { text: "To provide alternative text for the image if it cannot be displayed.", correct: true },
            { text: "To link the image to another URL.", correct: false },
            { text: "To define the image format.", correct: false }
        ]
    },
    {
        question: "How do you create a hyperlink in HTML?",
        answers: [
            { text: "<link href='url'>Link Text</link>", correct: false },
            { text: "<a href='url'>Link Text</a>", correct: true },
            { text: "<url link='url'>Link Text</url>", correct: false },
            { text: "<hyperlink src='url'>Link Text</hyperlink>", correct: false }
        ]
    },
    {
        question: "What does the id attribute do in HTML?",
        answers: [
            { text: "It styles the element with a unique CSS class.", correct: false },
            { text: "It uniquely identifies an element within an HTML document.", correct: true },
            { text: "It specifies the element’s type.", correct: false },
            { text: "It links the element to an external resource.", correct: false }
        ]
    },
    {
        question: "What is the difference between <div> and <span> tags?",
        answers: [
            { text: "<div> is for inline content, <span> is for block content.", correct: false },
            { text: "<div> is for block-level elements, <span> is for inline elements.", correct: true },
            { text: "<div> is only used for forms, <span> is used for tables.", correct: false },
            { text: "<div> is used for headers, <span> is used for footers.", correct: false }
        ]
    },
    {
        question: "How do you add a comment in HTML?",
        answers: [
            { text: "<!-- Comment -->", correct: true },
            { text: "// Comment", correct: false },
            { text: "/* Comment */", correct: false },
            { text: "# Comment", correct: false }
        ]
    },
    {
        question: "What is the purpose of the <head> tag in HTML?",
        answers: [
            { text: "To contain the main content of the page.", correct: false },
            { text: "To include meta-information about the document.", correct: true },
            { text: "To create a header section.", correct: false },
            { text: "To link to external JavaScript files.", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a numbered list?",
        answers: [
            { text: "<ul>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<li>", correct: false },
            { text: "<dl>", correct: false }
        ]
    },
    {
        question: "What does the <meta> tag do?",
        answers: [
            { text: "It defines metadata about an HTML document.", correct: true },
            { text: "It includes external CSS files.", correct: false },
            { text: "It embeds multimedia content.", correct: false },
            { text: "It creates a form element.", correct: false }
        ]
    },
    {
        question: "How can you open a link in a new tab/window?",
        answers: [
            { text: "<a href='url' target='new'>Link Text</a>", correct: false },
            { text: "<a href='url' newtab='true'>Link Text</a>", correct: false },
            { text: "<a href='url' target='_blank'>Link Text</a>", correct: true },
            { text: "<a href='url' open='new'>Link Text</a>", correct: false }
        ]
    },
    {
        question: "What is the correct way to insert an image in HTML?",
        answers: [
            { text: "<img href='image.jpg'>", correct: false },
            { text: "<image src='image.jpg'>", correct: false },
            { text: "<img src='image.jpg' alt='Description'>", correct: true },
            { text: "<img link='image.jpg'>", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            { text: "<style>", correct: true },
            { text: "<css>", correct: false },
            { text: "<stylesheet>", correct: false },
            { text: "<link>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        answers: [
            { text: "<h6>", correct: false },
            { text: "<header>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<head>", correct: false }
        ]
    },
    {
        question: "How do you create a table in HTML?",
        answers: [
            { text: "<table><tr><td>Content</td></tr></table>", correct: true },
            { text: "<tbl><tr><td>Content</td></tr></tbl>", correct: false },
            { text: "<tab><row><data>Content</data></row></tab>", correct: false },
            { text: "<table><row><column>Content</column></row></table>", correct: false }
        ]
    },
    {
        question: "What does the action attribute in an HTML form tag do?",
        answers: [
            { text: "It specifies the URL where form data should be submitted.", correct: true },
            { text: "It defines the method of data submission.", correct: false },
            { text: "It styles the form.", correct: false },
            { text: "It validates the form data.", correct: false }
        ]
    },
    {
        question: "Which input type defines a slider control in HTML?",
        answers: [
            { text: "<input type='range'>", correct: true },
            { text: "<input type='slider'>", correct: false },
            { text: "<input type='number'>", correct: false },
            { text: "<input type='text'>", correct: false }
        ]
    },
    {
        question: "How do you make a checkbox in HTML?",
        answers: [
            { text: "<input type='check'>", correct: false },
            { text: "<input type='checkbox'>", correct: true },
            { text: "<input type='radio'>", correct: false },
            { text: "<input type='option' >", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    

}