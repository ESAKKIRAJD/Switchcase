                     //Switch Case 1...

function myFriends () {
	 
	 var life;
	 var heart=document.getElementById('friends').value;

	 switch (heart) {

	 case "1":
                life = "M.Selvekumar";
                break;
     case "2":
                life = "S.karthick";
                break;
    case "3":
                life = "P.Esakkimuthu";
                break;           
    case "4":
                life = "E.Esakki";
                break;
    case "5":
                life = "Lakhman";
                break;
    case "6":
                life = "Raja";
                break;
    case "7":
                life = "Sham";
                break;
    case "8":
                life = "A.K.S.Janakiram";
                break;
    case "9":
                life = "M.Arun";
                break;
    case "10":
                life = "Masanam";
                break;
    case "11":
                life = "S.Ulaganathan";
                break;  
    default :
               life = "I need more friends";
                break;             

	 }
       document.getElementById('mdt').innerHTML= life;

}





                     //Switch Case 2...


 function myCollege () {
     
     var life;
     var heart=document.getElementById('department').value;

     switch (heart) {

     case "1":
                life = "Tamil";
                break;
     case "2":
                life = "Mathamatics";
                break;
    case "3":
                life = "Computer Science";
                break;           
    case "4":
                life = "English";
                break;
    case "5":
                life = "Physics";
                break;
        
    default :
               life = "Not avalable ";
                break;             

     }
       document.getElementById('mdthclg').innerHTML= life;

}






                     //Switch Case 3...


   function myFav () {
	 
	 var text;
	 var dis=document.getElementById('area').value;

	 switch (dis) {

	 case "1":
                text = "Thirunelveli";
                break;
     case "2":
                text = "Ramanathapuram";
                break;
    case "3":
                text = "Kanyakumari";
                break;              

    case "4":
                text = "Dharmapuri";
                break;
    case "5":
                text = "Madurai";
                break;
    case "6":
                text = "Puthukottai";
                break;
    case "7":
                text = "Coimbatore";
                break;
    case "8":
                text = "Thiruchi";
                break;
    case "9":
                text = "Thanjauoor";
                break;
    case "10":
                text = "Tirupour";
                break;
    case "11":
                text = "Thiruvannamalai";
                break;  
    default :
               text = "None of this";
                break;             

	 }
       document.getElementById('nadu').innerHTML= text;

}















