hashVar = {};

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
        if (root.ruleIndex == 64)
            console.log(root);
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
                return new Data(Data.t_integer, parseInt(root.getChild(0).symbol.text));
                break;
            case 82:    // number
                return parseTree(root.getChild(0));
                break;
            case 81:    // string
                return new Data(Data.t_string, root.getChild(0).symbol.text);
                break;
            case 75:    // argument no comp_for
                if (n == 1) {
                    return parseTree(root.getChild(0));
                }
                else if (n == 3) {    // assignment
                    var leftNode = root.getChild(0);
                    var left = getVariableName(leftNode);
                    var right = parseTree(root.getChild(2));
                    hashVar[left] = right;
                }
                break;
            case 74:    // arglist no star
                var res = new Array();
                for (var i = 0; i<root.getChildCount(); i++) {
                    var child = root.getChild(i);
                    if (child.symbol.text != ',')
                        res.push(parseTree(child));
                }
                return new Data(Data.t_array, res);
                break;
            case 71:    //testlist
                var testNode = root.getChild(0);
                var res = new Array();
                res.push(parseTree(testNode));
                for(var i = 2; i<n ; i+=2)
                    res.push(parseTree(root.getChild(i)));
                return new Data(Data.t_array,res);
            case 70:    //exprlist 只处理了只有一个star_expr的情况
                var star_exprNode = root.getChild(0);
                var star_exprRes = parseTree(star_exprNode);
                return star_exprRes;
            case 66:    // trailer
                var child0 = root.getChild(0);
                var ch = child0.symbol.text;
                switch (ch) {
                    case '(':
                        if (root.getChildCount() > 2) {
                            return parseTree(root.getChild(1));
                        }
                        break;
                    case '[':
                        return parseTree(root.getChild(1));
                        break;
                    case '.':
                        return parseTree(root.getChild(1));
                        break;
                }
                break;
            case 64:    // atom
                if (n == 1) {    // NAME, number, string, NONE, TRUE, FALSE
                    child = root.getChild(0);
                    var childN = child.getChildCount();
                    if (childN == 0) {    // child is a leaf, NAME, NONE, TRUE, FALSE
                        var literal = child.getChild(0).symbol.text;
                        switch (literal) {
                            case "True": return new Data(Data.t_bool, true); break;
                            case "False": return new Data(Data.t_bool, false); break;
                            case "None": return new Data(Data.t_bool, null); break;
                            default:
                                var data = hashVar[literal];
                                if (data) {
                                    return data;
                                }
                                else {
                                    alert("Undefined symbol");
                                }
                        }
                    }
                    else {
                        return parseTree(child);
                    }
                }
                else {
                    alert("Unimplemented atom");
                }
            case 63:    // power
                if (n == 2) {    // power: atom trailer
                    // function call
                    var atom = parseTree(root.getChild(0));
                    var trailer = parseTree(root.getChild(1));
                    return evalTrailer(atom, trailer);
                }
                else if (n == 3) {    // power: atom ** factor
                    var atom = parseTree(root.getChild(0));
                    var factor = parseTree(root.getChild(1));
                    var power = calcPower(atom, factor);
                    return new Data(Data.t_integer, power);
                }
                else if (n == 4) {    // power: atom trailer ** factor
                    var atom = parseTree(root.getChild(0));
                    var trailer = parseTree(root.getChild(1));
                    var factor = parseTree(root.getChild(3));
                    var evaled = evalTrailer(atom, trailer);
                    var power = calcPower(value, factor);
                    return new Data(Data.t_integer, power);
                }
                else {
                    alert("power arg n");
                }
                break;
            case 62:    // factor
                if (n == 1) {    // factor: power
                    return parseTree(root.getChild(0));
                }
                else if (n == 2) {    // factor: (+|-|~) factor
                    var sign = root.getChild(0).symbol.text;
                    var val = parseTree(root.getChild(1));
                    return signFactor(sign, val);
                }
                else {
                    alert("factor arg n");
                }
                break;
            case 54:    // star
                return parseTree(root.getChild(0));
            case 61:    // term
            case 60:    // arith
            case 59:    // shift
            case 58:    // and
            case 57:    // xor
            case 56:    // expr
            case 51:    // and_test
            case 50:    // or_test
                if (n == 1) {    // parent: child
                    return parseTree(root.getChild(0));
                }
                else if (n == 3) {    // parent: child op child
                    var val1 = parseTree(root.getChild(0));
                    var val2 = parseTree(root.getChild(2));
                    var operator = root.getChild(1).symbol.text;
                    return calc(val1, val2, operator);
                }
                else {
                    alert("calc arg number error");
                }
                break;
            case 55:    //star_expr 直接去掉star
                var exprNode;
                if( n == 2 )
                    exprNode = root.getChild(1);
                else
                    exprNode = root.getChild(0);
                return parseTree(exprNode);
            case 53:    // comparison
                if (n == 1) {    // parent: child
                    return parseTree(root.getChild(0));
                }
                else if (n == 3) {    // parent: child op child
                    var val1 = parseTree(root.getChild(0));
                    var val2 = parseTree(root.getChild(2));
                    var operator = root.getChild(1).symbol.text;
                    return comp(val1, val2, operator);
                }
                else {
                    alert("calc arg number error");
                }
                break;
            case 52:    // not test
                if (n == 1) {
                    return parseTree(root.getChild(0));
                }
                if (n == 2) {
                    var boolean = parseTree(root.getChild(1));
                    if (boolean.type == Data.t_bool) {
                        return new Data(Data.t_bool, !boolean.val);
                    }
                    else {
                        alert("Logic operation on non-bool value");
                    }
                }
                break;
            case 46:    // test no if else
                var child0 = root.getChild(0);
                if (child0.ruleIndex == 50) {
                    return parseTree(child0);
                }
                if (child0.ruleIndex == 48) {
                    return parseTree(child0);
                }
                break;
            case 45:   //suite
                if( n == 1 ) return parseTree(root.getChild(0));
                else {
                    for(var i=2; i<n-1; i++)
                        parseTree(root.getChild(i)+'suite_');
                    return new Data(Data.t_null,0);
                }
			case 40:     //for_stmt
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
				return new Data(Data.t_null,0);
            case 38:    // if_stmt no else
                var testNode = root.getChild(1);
                var suiteNode = root.getChild(3);

                var test = parseTree(testNode);
                if (test.val == true) {
                    return parseTree(suiteNode);
                }
                break;
            case 37:    // compound_stmt
                parseTree(root.getChild(0));
                break;
            case 16:    // testlist_star_expr
                var res = new Array();
                for (var i = 0; i<root.getChildCount(); i++) {
                    var child = root.getChild(i);
                    if (child.symbol.text != ',')
                        res.push(parseTree(child));
                }
                return new Data(Data.t_array, res);
                break;
            case 15:    //expr_stmt
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
                        =====这里有问题 需要修改
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
            case 14:    //small_stmt
                return parseTree(root.getChild(0));
            case 13:    //simple_stmt
                for(var i=0; i<n; i+=2)
                    parseTree(root.getChild(i));    
                return new Data(Data.t_null,0);
            case 12:    // stmt
                return parseTree(root.getChild(0));
                break;
        }
    }
}

function getVariableName(node) {
    var n = node.getChildCount();
    var child;
    while (n > 0) {    // 不考虑 a[3] = 4 这样的赋值语句
        child = node.getChild(0);
        n = child.getChildCount();
    }
    // now child is a leaf node
    return child.symbol.text;
}

function evalTrailer(atom, trailer) {
    var atomName = getVariableName(atom);
    var atomData = hashVar[atomName];
    if (atomData) {
        =====有待实现
        if (atomData.type == Data.t_func) {    // function
        }
        else if (atomData.type == Data.t_array) {    // array
        }
        else if (atomData.type == Data.t_object) {    // object
        }
    }
    else {
        alert("Undefined atom name");
    }
}

function calc(val1, val2, operator) {
    var res;
    if (val1.type == Data.t_integer && val2.type == Data.t_integer) {
        switch (operator) {
            case "&": res = val1.val & val2.val; break;
            case "^": res = val1.val ^ val2.val; break;
            case "|": res = val1.val | val2.val; break;
            case ">>": res = val1.val >> val2.val; break;
            case "<<": res = val1.val << val2.val; break;
            case "+": res = val1.val + val2.val; break;
            case "-": res = val1.val - val2.val; break;
            case "*": res = val1.val * val2.val; break;
            case "/": alert("Unimplemented division"); break;
            case "//": res = Math.floor(val1.val / val2.val); break;
            case "%": res = val1.val % val2.val; break;
            default: alert("Unknown arithmetic operator");
        }
        return new Data(Data.t_integer, res);
    }
    else if (val1.type == Data.t_bool && val2.type == Data.t_bool) {
        switch (operator) {
            case "and": res = val1.val && val2.val; break;
            case "or": res = val1.val || val2.val; break;
            default: alert("Unknown logic operator");
        }
        return new Data(Data.t_bool, res);
    }
    else {
        alert("calc type error");
    }
}

function comp(val1, val2, operator) {
    var res;
    if (val1.type == Data.t_integer && val2.type == Data.t_integer) {
        switch (operator) {
            case "<": res = val1.val < val2.val; break;
            case ">": res = val1.val > val2.val; break;
            case "==": res = val1.val == val2.val; break;
            case ">=": res = val1.val >= val2.val; break;
            case "<=": res = val1.val <= val2.val; break;
            case "!=": res = val1.val != val2.val; break;
            default: alert("Unimplemented");
        }
        return new Data(Data.t_bool, res);
    }
    else {
        alert("comp type error");
    }
}

function calcFactor(sign, factor) {
    if (factor.type == Data.t_integer) {
        switch (sign) {
            case "+":
                return new Data(Data.t_integer, factor.value);
            case "-":
                return new Data(Data.t_integer, -(factor.value));
            case "~":
                return new Data(Data.t_integer, ~(factor.value));
            default:
                alert("Unknown factor sign");
        }
    }
    else {
        alert("signFactor type error");
    }
}

function calcPower(atom, trailer) {
    if (atom.type == Data.t_integer && trailer.type == Data.t_integer) {
        var power = Math.pow(atom.val, trailer.val);
        return new Data(Data.t_integer, power)
    }
    else {
        alert("calcPower");
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

Data.t_bool = 10;
Data.t_func = 11;
Data.t_object = 12;

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
    printTree(tree,0);
    //parseTree(tree);
});
    
