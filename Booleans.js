
	var doorclosed = true;
	var catcanleave = false;
	
	if(doorclosed) //evaluates whether the doorclosed boolean is true
	{
		
		alert("Door is closed and the cat is going to starve"); //display this message if the condition is met
		
		catcanleave = true; //This doesn't change things at all.
	}
	else if(catcanleave)//evaluates whether the catcanleave boolean is true
	{
		alert("Door is open and the cat can leave!");
	}
	else 
	{
		alert("Nothing happens because there is no cat or door. Might want to call the cops?");
	}
	