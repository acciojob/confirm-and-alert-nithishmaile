//your JS code here. If required.

function confirmBox(){
	let confirmDialogBox=confirm("Do you want to proceed");

	if(confirmDialogBox){
		alert("You clicked OK. Proceeding...")
	}else{
		alert("You clicked Cancel. Exiting...")
	}
}

confirmBox()

