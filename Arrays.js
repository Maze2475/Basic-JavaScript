var Mecha = new Array("Vilkiss","Enryugo","Hysterica");//How to define an array

/*To modify the array we will use the splice method. 
The splice method signature is: 

ArrayName.splice(index to start from, how many values to remove, the new values to add)

The splice method 1st access the index entered as it's starting point.
Then it looks at how many values it should remove from that index onwards
Finally it adds the new values specified to the values after the specified index
It should be noted that ANY number of new values can be specified to be added with this method
*/

var Modification = Mecha.splice(3,0,"Takemikazuchi","Gundam GP-01","Star Winning Gundam");
/*In this instance new values are added to the array at the end of it

Firstly the 3rd index (Arrays start from 0!) of the array is accessed because it's the last index of the array. In other words the end of it. 

No values are removed. The first new value is added which will be placed in the 3rd index.
The 2nd new value is placed in the 4th index and the 3rd new value is placed in the 5th index.

The array now looks like: ("Vilkiss","Enryugo","Hysterica","Takemikazuchi","Gundam GP-01","Star Winning Gundam")*/

Modification = Mecha.splice(1,0,"Wing Zero");
/*In this instance a new value is added into the middle of the array.

Firstly the 1st index (Arrays start from 0!) of the array is accessed.

No values are removed. 

One new value is added which will be placed in the 1st index.

The values after the 1st index are shifted to the indexes next to them. 
The array now looks like: ("Vilkiss", "Wing Zero","Enryugo","Hysterica","Takemikazuchi","Gundam GP-01","Star Winning Gundam")*/

Modification = Mecha.splice(2,1,"Shiranui","Evangelion Unit 0");
/*In this instance 1 value is deleted and replaced with 2 new values

Firstly the index of the value we want to delete is accessed which in this case is the 2nd index

Since we specified to delete only 1 value, we only lose the value that was in the 2nd index which was "Enryugo"
The array now looks like: ("Vilkiss", "Wing Zero","Hysterica","Takemikazuchi","Gundam GP-01","Star Winning Gundam")

Now the 1st new value is added into the 2nd index which is "Shiranui"
Then the 2nd new value is added into the 3rd index which is "Evangelion Unit 0"

The values from the 3rd index onwards are shifted to the right to the next index respectively
The array now looks like: ("Vilkiss", "Wing Zero","Shiranui","Evangelion Unit 0","Hysterica","Takemikazuchi","Gundam GP-01","Star Winning Gundam")*/

Modification = Mecha.splice(4,1);
/* In this instance we simply delete a value from the array

Firstly the index of the value we want to delete is accessed which in this case is the 4th index

Since we specified to delete only 1 value, we only lose the value that was in the 4th index which was "Hysterica"

The array now looks like: ("Vilkiss", "Wing Zero","Shiranui","Evangelion Unit 0","Takemikazuchi","Gundam GP-01","Star Winning Gundam")*/

alert(Mecha[4]);//accessing an array index and displaying it