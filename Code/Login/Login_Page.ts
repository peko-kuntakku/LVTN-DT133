class Login_Page
{
    login()
    {
        var a = 0;
        var txtuname = (<HTMLTextAreaElement>(document.getElementById('txtuname'))).value;
        var txtpwd = (<HTMLTextAreaElement>(document.getElementById('Pwd'))).value;

        if (txtuname.length != 0 && txtpwd.length != 0) {
            var connection = new ActiveXObject("ADODB.Connection");
            var connectionstring = "Data Source=MCNDESKTOP20;Initial Catalog=EmpDetail;uid=sa;pwd=password@123;Provider=SQLOLEDB";
            connection.Open(connectionstring);
            var rs = new ActiveXObject("ADODB.Recordset");
            rs.Open("select * from Login_Info where Emp_Name='" + txtuname + "' and Passwrd='" + txtpwd + "'", connection);
            while (!rs.eof)
            {
                window.location.assign('WelcomePage.html');
                a = 1;
                rs.MoveNext();
            }
            if (a == 0)
            {
                alert("Invalid UserName and Password");
            }

            rs.close();
            connection.close();
        }
        else
        {
            alert("Please Enter Values in Textbox ");
        }


        
    }
    cancelLogin()
    {
        document.getElementById('txtuname').innerText = "";
        document.getElementById('Pwd').innerText = "";
    }

}

window.onload = () =>
{
    var bttn = document.getElementById("login");
    var obj = new Login_Page();
    bttn.onclick = function ()
    {
        obj.login();
    }
    var bttncancel = document.getElementById("cancel");
    bttncancel.onclick = function ()
    {
        obj.cancelLogin();
    }
};