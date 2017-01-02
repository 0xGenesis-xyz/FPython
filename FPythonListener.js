// Generated from FPython.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FPythonParser.
function FPythonListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FPythonListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FPythonListener.prototype.constructor = FPythonListener;

// Enter a parse tree produced by FPythonParser#single_input.
FPythonListener.prototype.enterSingle_input = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#single_input.
FPythonListener.prototype.exitSingle_input = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#file_input.
FPythonListener.prototype.enterFile_input = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#file_input.
FPythonListener.prototype.exitFile_input = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#eval_input.
FPythonListener.prototype.enterEval_input = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#eval_input.
FPythonListener.prototype.exitEval_input = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#decorator.
FPythonListener.prototype.enterDecorator = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#decorator.
FPythonListener.prototype.exitDecorator = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#decorators.
FPythonListener.prototype.enterDecorators = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#decorators.
FPythonListener.prototype.exitDecorators = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#decorated.
FPythonListener.prototype.enterDecorated = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#decorated.
FPythonListener.prototype.exitDecorated = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#funcdef.
FPythonListener.prototype.enterFuncdef = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#funcdef.
FPythonListener.prototype.exitFuncdef = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#parameters.
FPythonListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#parameters.
FPythonListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#typedargslist.
FPythonListener.prototype.enterTypedargslist = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#typedargslist.
FPythonListener.prototype.exitTypedargslist = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#tfpdef.
FPythonListener.prototype.enterTfpdef = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#tfpdef.
FPythonListener.prototype.exitTfpdef = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#varargslist.
FPythonListener.prototype.enterVarargslist = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#varargslist.
FPythonListener.prototype.exitVarargslist = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#vfpdef.
FPythonListener.prototype.enterVfpdef = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#vfpdef.
FPythonListener.prototype.exitVfpdef = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#stmt.
FPythonListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#stmt.
FPythonListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#simple_stmt.
FPythonListener.prototype.enterSimple_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#simple_stmt.
FPythonListener.prototype.exitSimple_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#small_stmt.
FPythonListener.prototype.enterSmall_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#small_stmt.
FPythonListener.prototype.exitSmall_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#expr_stmt.
FPythonListener.prototype.enterExpr_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#expr_stmt.
FPythonListener.prototype.exitExpr_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#testlist_star_expr.
FPythonListener.prototype.enterTestlist_star_expr = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#testlist_star_expr.
FPythonListener.prototype.exitTestlist_star_expr = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#augassign.
FPythonListener.prototype.enterAugassign = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#augassign.
FPythonListener.prototype.exitAugassign = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#del_stmt.
FPythonListener.prototype.enterDel_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#del_stmt.
FPythonListener.prototype.exitDel_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#pass_stmt.
FPythonListener.prototype.enterPass_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#pass_stmt.
FPythonListener.prototype.exitPass_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#flow_stmt.
FPythonListener.prototype.enterFlow_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#flow_stmt.
FPythonListener.prototype.exitFlow_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#break_stmt.
FPythonListener.prototype.enterBreak_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#break_stmt.
FPythonListener.prototype.exitBreak_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#continue_stmt.
FPythonListener.prototype.enterContinue_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#continue_stmt.
FPythonListener.prototype.exitContinue_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#return_stmt.
FPythonListener.prototype.enterReturn_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#return_stmt.
FPythonListener.prototype.exitReturn_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#yield_stmt.
FPythonListener.prototype.enterYield_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#yield_stmt.
FPythonListener.prototype.exitYield_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#raise_stmt.
FPythonListener.prototype.enterRaise_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#raise_stmt.
FPythonListener.prototype.exitRaise_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#import_stmt.
FPythonListener.prototype.enterImport_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#import_stmt.
FPythonListener.prototype.exitImport_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#import_name.
FPythonListener.prototype.enterImport_name = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#import_name.
FPythonListener.prototype.exitImport_name = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#import_from.
FPythonListener.prototype.enterImport_from = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#import_from.
FPythonListener.prototype.exitImport_from = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#import_as_name.
FPythonListener.prototype.enterImport_as_name = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#import_as_name.
FPythonListener.prototype.exitImport_as_name = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#dotted_as_name.
FPythonListener.prototype.enterDotted_as_name = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#dotted_as_name.
FPythonListener.prototype.exitDotted_as_name = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#import_as_names.
FPythonListener.prototype.enterImport_as_names = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#import_as_names.
FPythonListener.prototype.exitImport_as_names = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#dotted_as_names.
FPythonListener.prototype.enterDotted_as_names = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#dotted_as_names.
FPythonListener.prototype.exitDotted_as_names = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#dotted_name.
FPythonListener.prototype.enterDotted_name = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#dotted_name.
FPythonListener.prototype.exitDotted_name = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#global_stmt.
FPythonListener.prototype.enterGlobal_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#global_stmt.
FPythonListener.prototype.exitGlobal_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#nonlocal_stmt.
FPythonListener.prototype.enterNonlocal_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#nonlocal_stmt.
FPythonListener.prototype.exitNonlocal_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#assert_stmt.
FPythonListener.prototype.enterAssert_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#assert_stmt.
FPythonListener.prototype.exitAssert_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#compound_stmt.
FPythonListener.prototype.enterCompound_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#compound_stmt.
FPythonListener.prototype.exitCompound_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#if_stmt.
FPythonListener.prototype.enterIf_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#if_stmt.
FPythonListener.prototype.exitIf_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#while_stmt.
FPythonListener.prototype.enterWhile_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#while_stmt.
FPythonListener.prototype.exitWhile_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#for_stmt.
FPythonListener.prototype.enterFor_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#for_stmt.
FPythonListener.prototype.exitFor_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#try_stmt.
FPythonListener.prototype.enterTry_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#try_stmt.
FPythonListener.prototype.exitTry_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#with_stmt.
FPythonListener.prototype.enterWith_stmt = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#with_stmt.
FPythonListener.prototype.exitWith_stmt = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#with_item.
FPythonListener.prototype.enterWith_item = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#with_item.
FPythonListener.prototype.exitWith_item = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#except_clause.
FPythonListener.prototype.enterExcept_clause = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#except_clause.
FPythonListener.prototype.exitExcept_clause = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#suite.
FPythonListener.prototype.enterSuite = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#suite.
FPythonListener.prototype.exitSuite = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#test.
FPythonListener.prototype.enterTest = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#test.
FPythonListener.prototype.exitTest = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#test_nocond.
FPythonListener.prototype.enterTest_nocond = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#test_nocond.
FPythonListener.prototype.exitTest_nocond = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#lambdef.
FPythonListener.prototype.enterLambdef = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#lambdef.
FPythonListener.prototype.exitLambdef = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#lambdef_nocond.
FPythonListener.prototype.enterLambdef_nocond = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#lambdef_nocond.
FPythonListener.prototype.exitLambdef_nocond = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#or_test.
FPythonListener.prototype.enterOr_test = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#or_test.
FPythonListener.prototype.exitOr_test = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#and_test.
FPythonListener.prototype.enterAnd_test = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#and_test.
FPythonListener.prototype.exitAnd_test = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#not_test.
FPythonListener.prototype.enterNot_test = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#not_test.
FPythonListener.prototype.exitNot_test = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#comparison.
FPythonListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#comparison.
FPythonListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#comp_op.
FPythonListener.prototype.enterComp_op = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#comp_op.
FPythonListener.prototype.exitComp_op = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#star_expr.
FPythonListener.prototype.enterStar_expr = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#star_expr.
FPythonListener.prototype.exitStar_expr = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#expr.
FPythonListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#expr.
FPythonListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#xor_expr.
FPythonListener.prototype.enterXor_expr = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#xor_expr.
FPythonListener.prototype.exitXor_expr = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#and_expr.
FPythonListener.prototype.enterAnd_expr = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#and_expr.
FPythonListener.prototype.exitAnd_expr = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#shift_expr.
FPythonListener.prototype.enterShift_expr = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#shift_expr.
FPythonListener.prototype.exitShift_expr = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#arith_expr.
FPythonListener.prototype.enterArith_expr = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#arith_expr.
FPythonListener.prototype.exitArith_expr = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#term.
FPythonListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#term.
FPythonListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#factor.
FPythonListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#factor.
FPythonListener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#power.
FPythonListener.prototype.enterPower = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#power.
FPythonListener.prototype.exitPower = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#atom.
FPythonListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#atom.
FPythonListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#testlist_comp.
FPythonListener.prototype.enterTestlist_comp = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#testlist_comp.
FPythonListener.prototype.exitTestlist_comp = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#trailer.
FPythonListener.prototype.enterTrailer = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#trailer.
FPythonListener.prototype.exitTrailer = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#subscriptlist.
FPythonListener.prototype.enterSubscriptlist = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#subscriptlist.
FPythonListener.prototype.exitSubscriptlist = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#subscript.
FPythonListener.prototype.enterSubscript = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#subscript.
FPythonListener.prototype.exitSubscript = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#sliceop.
FPythonListener.prototype.enterSliceop = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#sliceop.
FPythonListener.prototype.exitSliceop = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#exprlist.
FPythonListener.prototype.enterExprlist = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#exprlist.
FPythonListener.prototype.exitExprlist = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#testlist.
FPythonListener.prototype.enterTestlist = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#testlist.
FPythonListener.prototype.exitTestlist = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#dictorsetmaker.
FPythonListener.prototype.enterDictorsetmaker = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#dictorsetmaker.
FPythonListener.prototype.exitDictorsetmaker = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#classdef.
FPythonListener.prototype.enterClassdef = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#classdef.
FPythonListener.prototype.exitClassdef = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#arglist.
FPythonListener.prototype.enterArglist = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#arglist.
FPythonListener.prototype.exitArglist = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#argument.
FPythonListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#argument.
FPythonListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#comp_iter.
FPythonListener.prototype.enterComp_iter = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#comp_iter.
FPythonListener.prototype.exitComp_iter = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#comp_for.
FPythonListener.prototype.enterComp_for = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#comp_for.
FPythonListener.prototype.exitComp_for = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#comp_if.
FPythonListener.prototype.enterComp_if = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#comp_if.
FPythonListener.prototype.exitComp_if = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#yield_expr.
FPythonListener.prototype.enterYield_expr = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#yield_expr.
FPythonListener.prototype.exitYield_expr = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#yield_arg.
FPythonListener.prototype.enterYield_arg = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#yield_arg.
FPythonListener.prototype.exitYield_arg = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#string.
FPythonListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#string.
FPythonListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#number.
FPythonListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#number.
FPythonListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by FPythonParser#integer.
FPythonListener.prototype.enterInteger = function(ctx) {
};

// Exit a parse tree produced by FPythonParser#integer.
FPythonListener.prototype.exitInteger = function(ctx) {
};



exports.FPythonListener = FPythonListener;