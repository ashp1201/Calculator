let string = "";
let buttons = document.body.querySelectorAll('.buttons');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'C') {
            string = '';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML=="Sqrt"){
            string = eval(Math.sqrt((string)));
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML == 'x') {
            var exp = document.querySelector('input').value;
            string= exp.substring(0, exp.length - 1);
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML == '=' ) {
            try {
                if (document.querySelector('input').value != '') {
                    string = eval(document.querySelector('input').value);
                }
                else {
                    string = eval(string);
                }
                document.querySelector('input').value = string;
            }
            catch (Err) 
            {
                string = "Invalid input";
                document.querySelector('input').value = string;
            }
        }
        else {
            console.log(e.target); //it targeting button
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
document.addEventListener("keypress", (e) => {
    if (e.key == "=")
 {
        try {
            if (document.querySelector('input').value != '') {
                string = eval(document.querySelector('input').value);
            }
            else {
                string = eval(string);
            }
            document.querySelector('input').value = string;

        }
        catch (Err) {
            string = "Invalid input";
            document.querySelector('input').value = string;
        }
        
 }
});

