function printTree(root, indent=0) {
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
        if (root.ruleIndex == 52)
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
                return Data(Data.t_integer, parseInt(root.getChild(0).symbol.text));
                break;
            case 82:    // number
                return parseTree(root.getChild(0));
                break;
            case 81:    // string
                return Data(Data.t_string, root.getChild(0).symbol.text);
                break;
            case 63:    // power
                var childN = root.getChildCount();
                if (childN == 2) {    // power: atom trailer
                    // function call
                    var atom = parseTree(root.getChild(0));
                    var trailer = parseTree(root.getChild(1));
                    return evalTrailer(atom, trailer);
                }
                else if (childN == 3) {    // power: atom ** factor
                    var atom = parseTree(root.getChild(0));
                    var factor = parseTree(root.getChild(1));
                    var power = calcPower(atom, factor);
                    return Data(Data.t_integer, power);
                }
                else if (childN == 4) {    // power: atom trailer ** factor
                    var atom = parseTree(root.getChild(0));
                    var trailer = parseTree(root.getChild(1));
                    var factor = parseTree(root.getChild(3));
                    var evaled = evalTrailer(atom, trailer);
                    var power = calcPower(value, factor);
                    return Data(Data.t_integer, power);
                }
                else {
                    alert("power arg n");
                }
                break;
            case 62:    // factor
                var childN = root.getChildCount();
                if (childN == 1) {    // factor: power
                    return parseTree(root.getChild(0));
                }
                else if (childN == 2) {    // factor: (+|-|~) factor
                    var sign = root.getChild(0).symbol.text;
                    var val = parseTree(root.getChild(1));
                    return signFactor(sign, val);
                }
                else {
                    alert("factor arg n");
                }
                break;
            case 61:    // term
            case 60:    // arith
            case 59:    // shift
            case 58:    // and
            case 57:    // xor
            case 56:    // expr
            case 51:    // and_test
            case 50:    // or_test
                var childN = root.getChildCount();
                if (childN == 1) {    // parent: child
                    return parseTree(root.getChild(0));
                }
                else if (childN == 3) {    // parent: child op child
                    var val1 = parseTree(root.getChild(0));
                    var val2 = parseTree(root.getChild(2));
                    var operator = root.getChild(1).symbol.text;
                    return calc(val1, val2, operator);
                }
                else {
                    alert("calc arg number error");
                }
                break;
            case 53:    // comparison
                var childN = root.getChildCount();
                if (childN == 1) {    // parent: child
                    return parseTree(root.getChild(0));
                }
                else if (childN == 3) {    // parent: child op child
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
                var childN = root.getChildCount();
                if (childN == 1) {
                    return parseTree(root.getChild(0));
                }
                if (childN == 2) {
                    var boolean = parseTree(root.getChild(1));
                    if (boolean.type == Data.t_bool) {
                        return Data(Data.t_bool, !boolean.val);
                    }
                    else {
                        alert("Logic operation on non-bool value");
                    }
                }
                break;
        }
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
        return Data(Data.t_integer, res);
    }
    else if (val1.type == Data.t_bool && val2.type == Data.t_bool) {
        switch (operator) {
            case "and": res = val1.val && val2.val; break;
            case "or": res = val1.val || val2.val; break;
            default: alert("Unknown logic operator");
        }
        return Data(Data.t_bool, res);
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
        return Data(Data.t_bool, res);
    }
    else {
        alert("comp type error");
    }
}

function calcFactor(sign, factor) {
    if (factor.type == Data.t_integer) {
        switch (sign) {
            case "+":
                return Data(Data.t_integer, factor.value);
            case "-":
                return Data(Data.t_integer, -(factor.value));
            case "~":
                return Data(Data.t_integer, ~(factor.value));
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
        return Data(Data.t_integer, power)
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
Data.t_bool = 10;

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
    printTree(tree);
    //parseTree(tree);
});
    