var surname = "Hussain";
var name = "Mazin";

var age = "2"+"0"; /*since both numbers are inside quotation marks the variable is considered a string 
and the numbers are considered as characters 
therefore when the + sign is placed in between them, both these characters are merged*/

var message = "Hi I am "+name+" "+surname+".";
message = message + " My age is: "+age; //age can also be an integer

message = message + ". I have to say, Isn\'t it hard to get things working?"; /*IT IS A MUST TO PUT \ BEFORE ' IN A STRING TO AVOID AN ERROR!!!!
This is because if we don't then the JavaScrip interpreter will incorrectly assume that the string ended at the point we put ' */

alert(message);