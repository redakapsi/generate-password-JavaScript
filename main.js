function  generate()
{
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+[]{}<>?";
    let capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smalls = "abcdefghijklmnopqrstuvwxyz";
    let password="";
    let lenght = parseInt(document.getElementById("length").value);
    let isnumber = document.getElementById("numbers").checked;
    let issymbols = document.getElementById("symbols").checked;
    let iscapital = document.getElementById("capital_letters").checked;
    let issmall = document.getElementById("small_letters").checked;
    let all = "";
    if(isnumber) all += numbers;
    if(issymbols) all += symbols;
    if(iscapital) all += capitals;
    if(issmall) all += smalls;
    if(all==='')
    {
        alert("Error must include one at least");
        return;
    }
    for(let i=1;i<=lenght;i++)
    {
        let add = all[Math.floor(Math.random() * all.length)];
        password+=add;
    }
    document.getElementById("text").value=password;
    document.body.style.backgroundImage = "url(password.jpg)";
    
}