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
        document.getElementById("tree").innerHTML += root + "<br />";
    }
    for (i = 0; i < n; i++) {
        if (root.ruleIndex == 83)
            console.log(root.getChild(0).symbol);
        printTree(root.getChild(i), indent + 1);
    }
}

function parseTree(root,namespace) {
    if (!root) return;
    var n = root.getChildCount();
    if (n == 0) { // Leaf node

    }
    else {
        var ruleIndex = root.ruleIndex;
        switch (ruleIndex) {
            case 83:    // integer
                return Data(Data.t_integer, parseInt(root.getChild(0).symbol.text));
                break;
            case 82:    // number
                return parseTree(root.getChild(0),namespace);
                break;
            case 81:    // string
                return Data(Data.t_string, root.getChild(0).symbol.text);
                break;
			case 40:
				var exprlistNode = root.getChild(1);
				var testlistNode = root.getChild(3);
				var suiteNode = root.getChild(5);
				
				var exprlistRes = parseTree(exprlistNode);
				var testlistRes = parseTree(testlistNode);
				for(int i=0;i<testlistRes.length;i++)
				{
					hashVar[namespac+'for_'+exprlistRes.val] = testlistRes.val[i];
					parseTree(suiteNode,namespace+'for_');
				}
        }
    }
}

function Data(type, val) {
    this.type = type;
    this.val = val;
}

Data.t_integer = 0;
Data.t_string = 0;

var antlr4 = require('antlr4/index');
var FPython1Lexer = require('FPython1Lexer');
var FPython1Parser = require('FPython1Parser');
document.getElementById("parse").addEventListener("click", function(){
    var input = document.getElementById("code").value;
    input = SolveIndent(input);
    var chars = new antlr4.InputStream(input);
    var lexer = new FPython1Lexer.FPython1Lexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new FPython1Parser.FPython1Parser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.file_input();
    console.log(tree);
    printTree(tree,0);
    //parseTree(tree);
});
    
