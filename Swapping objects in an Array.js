var generals = new Array ("Oda Nobunaga","George S. Patton","Erwin Rommel","Bernard Montgomery","Tokugawa Ieyasu");
var rightIndex = generals.length-1;//get the last position

/*In the loop below we'll have 2 indexes.
One index (i) will point to the position we are currently viewing in the array as we access it from the left or 0th position
The 2nd index will point to the position that is opposite to the one we are viewing currently.*/

for(var i=0;i<rightIndex;i++)
{
	var temp; //create a variable to store values temporarily
	
	temp = generals[i];/*assign the value in the current possition to the temporary value variable
	This means that the 1st time the loop is run, the value in the 1st position is assigned.
	So temp = "Oda Nobunaga"*/
	
	generals[i]=generals[rightIndex];/*swap the value in the current position with it's opposing position on the right.
	For example: swapping the value in the 1st position with that of the last position
	Now the array looks like this: ("Tokugawa Ieyasu","George S. Patton","Erwin Rommel","Bernard Montgomery","Tokugawa Ieyasu")*/
	
	generals[rightIndex]=temp;/*Get the value in temp and assign it to the opposing position on the right
	This is because temp stored the original value that was in the current position
	Now the array looks like this:("Tokugawa Ieyasu","George S. Patton","Erwin Rommel","Bernard Montgomery",Oda Nobunaga")*/
	
	rightIndex=rightIndex-1;//Move the index on the right forward
}

var end = generals.length;

for(var i=0;i<end;i++)
{
	alert(generals[i]);
}

