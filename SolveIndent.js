function SolveIndent(Input)
{
	var SpacesToIndent = 4;

	var IndentCount = 0;
	var Output = "";
	var lines = Input.split('\n');

	var spaces = 0;
	var indents;
	var str;

	for(var line = 0; line < lines.length; line++)
	{
		spaces = 0;
		str = lines[line]
		for(var i = 0; i<str.length; i++)
			if( str[i] == ' ' ) spaces++;
			else break;
		indents = spaces / SpacesToIndent;
		if( IndentCount < indents )
		{
			for(var i = 0; i<indents - IndentCount; i++)
				Output += '_indent_\n';
			IndentCount = indents;
		} else if( IndentCount > indents )
		{
			for(var i = 0; i<IndentCount - indents; i++)
				Output += '_dedent_\n';
			IndentCount = indents;
		}
		Output += str;
		Output += '\n';
	}
	return Output;
}
