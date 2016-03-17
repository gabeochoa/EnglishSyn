var pos = require('pos');
var $ = require('jquery');

var walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
        );

var node;
var textNodes = [];

while(node = walker.nextNode()) {
    textNodes.push(node);
}
console.log(textNodes);
function hiliter(word, element) {
    var rgxp = new RegExp(word, 'g');
    var repl = '<span class="myClass">' + word + '</span>';
    element.innerHTML = element.innerHTML.replace(rgxp, repl);
}

for (var i = 0; i < textNodes.length; i++) {
    var node = textNodes[i];
    //hiliter(node.data, node.ownerDocument.activeElement);
    console.log(node.data);
}




$('body').each(function() {
        if( $(this).nodeType === 3)
        {
            var fileName = $(this).text();
            $(this).css('color', 'red');
            console.log(fileName);
        }
});


//var words = new pos.Lexer().lex("This is some sample text. This text can contain multiple sentences.");
//var taggedWords = new pos.Tagger().tag(words);
//for (i in taggedWords) {
    //var taggedWord = taggedWords[i];
    //var word = taggedWord[0];
    //var tag = taggedWord[1];
    //console.log(word + " /" + tag);
//}





