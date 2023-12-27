//  Get The Paragraph Element //

const Paragraph = document.getElementById("my-paragraph");

// Split The Text Content Into Any Array Of Words  //

const Words = Paragraph.textContent.split(" ") ;

for(let i = 0 ; i < Words.length ; i++ ) {
    if(Words[i].length > 8 ) {

        // Wrap The Word In A Span Element //

        Words[i] = " <span style = ' background : yellow ' > " + Words[i] + "</span>" ;
    }
}

// Join The Words Back into a String and Set It as the New Content of The Paragraph Element //

Paragraph.innerHTML = Words.join(" ");
