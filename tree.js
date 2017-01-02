hashVar = [];

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

function parseTree(root) {
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
                return parseTree(root.getChild(0));
                break;
            case 81:    // string
                return Data(Data.t_string, root.getChild(0).symbol.text);
                break;
			case 40:	//for_stmt
				var exprlistNode = root.getChild(1);
				var testlistNode = root.getChild(3);
				var suiteNode = root.getChild(5);
				
				var exprlistRes = getVariableName(exprlistNode);
				var testlistRes = parseTree(testlistNode);
				for(int i=0;i<testlistRes.length;i++)
				{
					hashVar[namespace+'for_'+exprlistRes] = testlistRes.val[i].val;
					parseTree(suiteNode+'for_');
				}
				return Data(Data.t_null,0);
			case 70:	//exprlist 只处理了只有一个star_expr的情况
				var star_exprNode = root.getChild(0);
				var star_exprRes = parseTree(star_exprNode);
				return star_exprRes;
			case 16:	//star_expr 直接去掉star
				var exprNode;
				if( n == 2 )
					exprNode = root.getChild(1);
				else
					exprNode = root.getChild(0);
				return parseTree(exprNode);
			case 71:	//testlist
				var testNode = root.getChild(0);
				var res = new Array();
				res.push(parseTree(testNode));
				for(var i = 2; i<n ; i+=2)
					res.push(parseTree(root.getChild(i)));
				return Data(Data.t_array,res);
			case  45:	//suite
				if( n == 1 ) return parseTree(root.getChild(0));
				else {
					for(var i=2; i<n-1; i++)
						parseTree(root.getChild(i)+'suite_');
					return Data(Data.t_null,0);
				}
			case 13:	//simple_stmt
				for(var i=0; i<n; i+=2)
					parseTree(root.getChild(i));	
				return Data(Data.t_null,0);
			case 14:	//small_stmt
				return parseTree(root.getChild(0));
			case 15:	//expr_stmt
				var testlist_star_exprNode = root.getChild(0);
				var testlist_star_exprRes = getVariableName(testlist_star_exprNode);
				for(var i=1; i<2;i++)
				{
					var node = root.getChild(i);
					var res;
					if( node.ruleIndex == 17 ) // augassign
					{
						var augassignRes = parseTree(node);
						var testlistRes = parseTree(root.getChild(i+1));
						switch(augassignRes)
						{
							case "+=":hashVar[testlist_star_exprRes]+=testlistRes.val;break;
							case "-=":hashVar[testlist_star_exprRes]-=testlistRes.val;break;
							case "*=":hashVar[testlist_star_exprRes]*=testlistRes.val;break;
							case "/=":hashVar[testlist_star_exprRes]/=testlistRes.val;break;
							case "%=":hashVar[testlist_star_exprRes]%=testlistRes.val;break;
							case "&=":hashVar[testlist_star_exprRes]&=testlistRes.val;break;
							case "|=":hashVar[testlist_star_exprRes]|=testlistRes.val;break;
							case "^=":hashVar[testlist_star_exprRes]^=testlistRes.val;break;
							case "<<=":hashVar[testlist_star_exprRes]<<=testlistRes.val;break;
							case ">>=":hashVar[testlist_star_exprRes]>>=testlistRes.val;break;
						}
						i+=2;
					} else {
						hashVar[testlist_star_exprRes] =  parseTree(root.getChild(i+1));
					}
				}
				return hashVar[testlist_star_exprRes];
        }
    }
}

function Data(type, val) {
    this.type = type;
    this.val = val;
}

Data.t_integer = 0;
Data.t_string = 1;
Data.t_null = 2;
Data.t_array = 3;
Data.t_error = 4;
Data.t_key = 5;

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
    
