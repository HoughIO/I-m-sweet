var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/good/gi, 'sweet');

            replacedText = replacedText.replace(/no thank you/gi, 'I\'m sweet');

            replacedText = replacedText.replace(/true/gi, 'tru');

            replacedText = replacedText.replace(/no thanks/gi, 'I\'m sweet');

            replacedText = replacedText.replace(/no, thanks/gi, 'I\'m sweet');

            replacedText = replacedText.replace(/no, thank you/gi, 'I\'m sweet');

            replacedText = replacedText.replace(/Lexington/gi, 'Mexington');

            replacedText = replacedText.replace(/work/gi, '\"work\"');

            replacedText = replacedText.replace(/Giraffe/gi, 'Long horse');

            replacedText = replacedText.replace(/Giraffes/gi, 'Long horses');

            replacedText = replacedText.replace(/cinnamon/gi, 'cinnamonononon');

            replacedText = replacedText.replace(/snapchat/gi, 'snatchat');

            replacedText = replacedText.replace(/she/gi, 'you');

            replacedText = replacedText.replace(/She/gi, 'You');

            replacedText = replacedText.replace(/he/gi, 'you');

            replacedText = replacedText.replace(/He/gi, 'You');

            replacedText = replacedText.replace(/Bernie Sanders/gi, 'Sandie Burners');
            
            replacedText = replacedText.replace(/Zack Thompson/gi, 'Bae 😍');

            replacedText = replacedText.replace(/Bernie Sanders/gi, 'Sandie Burners');

            
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

        }
    }
}
