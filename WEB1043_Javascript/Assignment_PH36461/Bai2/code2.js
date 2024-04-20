let a = prompt();

//console.log(a);

// if(isNaN(a))
// {
//     console.log("not a")
// }
switch(a)
{
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": 
    {
        console.log("Đây là số: " + a);
        break;
    }
    default:
        {
            console.log("Đây không phải một số");
            break;
        }
        

}