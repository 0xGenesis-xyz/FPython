function printTree(root, indent) {
    if (!root) return;
    for (var i = 0; i < indent; i++) {
        document.getElementById("tree").innerHTML += ".&nbsp";
    }
    var n = root.getChildCount();
    if (n == 0) {
        document.getElementById("tree").innerHTML += "<span class=\"leaf\">" + root + "</span><br />";
    }
    else {
        document.getElementById("tree").innerHTML += root.ruleIndex.toString() + "<br />";
    }
    for (i = 0; i < n; i++) {
        printTree(root.getChild(i), indent + 1);
    }
}

var antlr4 = require('antlr4/index');
var FPythonLexer = require('FPythonLexer');
var FPythonParser = require('FPythonParser');
document.getElementById("parse").addEventListener("click", function(){
    var input = document.getElementById("code").value;
    input = SolveIndent(input);
    var chars = new antlr4.InputStream(input);
    var lexer = new FPythonLexer.FPythonLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new FPythonParser.FPythonParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.file_input();
    console.log(tree);
    printTree(tree, 0);
});
    