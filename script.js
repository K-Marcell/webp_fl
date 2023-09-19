function negyzet()
{
    document.write("<table class='matrix' cellpadding=0>")
    for( i=0 ; i<=15 ; i++ )
    {
    document.write("<tr>")
    for( j=0 ; j<=15 ; j++ )
    {
        document.write("<td>")
        if(1)
        {
        document.write("<div class='pont'></div>")
        }
        document.write("</td>")
    }
    document.write("</tr>")
    }
    document.write("</table>")
    
}


function negyzet_2()
{
    var length = 15;
    var h_length = Math.round(15/2);
    document.write("<table class='matrix' cellpadding=0>")
    for( i=0 ; i<=length ; i++ )
    {
    document.write("<tr>")
    for( j=0 ; j<=length ; j++ )
    {
        document.write("<td>")
        if((j != h_length && i != h_length) && (j != h_length-1 && i != h_length-1) )
        {
        document.write("<div class='pont'></div>")
        }
        document.write("</td>")
    }
    document.write("</tr>")
    }
    document.write("</table>")
}


function haromszog()
{
    document.write("<table class='matrix' cellpadding=0>")
    var o = 0;
    for( i=0 ; i<=15 ; i++ )
    {
    document.write("<tr>")
    for( j=0 ; j<=o ; j++ )
    {
        document.write("<td>")
        if(1)
        {
        document.write("<div class='pont'></div>")
        }
        document.write("</td>")
    }
    document.write("</tr>")
    o++;
    }
    document.write("</table>")
}

function haromszog_2()
{
    document.write("<table class='matrix' cellpadding=0>")
    for( i=0 ; i<=15 ; i++ )
    {
    document.write("<tr>")
    for( j=0 ; j<=15 ; j++ )
    {
        document.write("<td>")
        if(j != i && j != 15-i)
        {
        document.write("<div class='pont'></div>")
        }
        document.write("</td>")
    }
    document.write("</tr>")
    }
    document.write("</table>")
    
}
function haromszog_3()
{
    document.write("<table class='matrix' cellpadding=0>")
    for( i=0 ; i<=15 ; i++ )
    {
    document.write("<tr>")
    for( j=0 ; j<=15 ; j++ )
    {
        document.write("<td>")
        if(!(j != i && j != 15-i && j != i-1 && j != 15-i-1 && j != i+1 && j != 15-i+1 && j != i-2 && j != 15-i-2 && j != i+2 && j != 15-i+2))
        {
        document.write("<div class='pont'></div>")
        }
        document.write("</td>")
    }
    document.write("</tr>")
    }
    document.write("</table>")
    
}
function haromszog_4()
{
    document.write("<table class='matrix' cellpadding=0>")
    for( i=0 ; i<=15 ; i++ )
    {
    document.write("<tr>")
    for( j=0 ; j<=15 ; j++ )
    {
        document.write("<td>")
        if((j < i && j < 15-i) || (j > i && j > 15-i) || (i == Math.round(15/2) || i == Math.round(15/2)-1))
        {
        document.write("<div class='pont'></div>")
        }
        document.write("</td>")
    }
    document.write("</tr>")
    }
    document.write("</table>")
    
}
function haromszog_5()
{
    document.write("<table class='matrix' cellpadding=0>")
    var o = 8;
    var rev = false;
    for( i=0 ; i<=15 ; i++ )
    {
        if (!rev)
            o--;
        else
            o++;
        
        if (o == 0 || o == 8)
            rev = !rev;
    document.write("<tr>")
    for( j=0 ; j<=15 ; j++ )
    {
        document.write("<td>")
        if((!((j != 7 && i != 7) && (j != 7+1 && i != 7+1))) || !((j != o && i != o && ((j < o && i > o)  || (j > 15-o && i < 15-o) || (j < 15-o && i > 15-o) || (j > 15-o && i > 15-o))) && (j != 15-o && i != 15-o)))
        {
            console.log(`${i} - ${j} | ${o}`)
        document.write("<div class='pont'></div>")
        }
        document.write("</td>")
    }
    document.write("</tr>")
    }
    document.write("</table>")
}


function init() {
    document.getElementById('negyzet').addEventListener('click', function(event) {
        document.open();
        document.write('<link rel="stylesheet" href="style.css">')
        negyzet();
        document.close();
    });
    document.getElementById('negyzet2').addEventListener('click', function(event) {
        document.open();
        document.write('<link rel="stylesheet" href="style.css">')
        negyzet_2();
        document.close();
    });
    document.getElementById('haromszog').addEventListener('click', function(event) {
        document.open();
        document.write('<link rel="stylesheet" href="style.css">')
        haromszog();
        document.close();
    });
    document.getElementById('haromszog2').addEventListener('click', function(event) {
        document.open();
        document.write('<link rel="stylesheet" href="style.css">')
        haromszog_2();
        document.close();
    });
    document.getElementById('haromszog3').addEventListener('click', function(event) {
        document.open();
        document.write('<link rel="stylesheet" href="style.css">')
        haromszog_3();
        document.close();
    });
    document.getElementById('haromszog4').addEventListener('click', function(event) {
        document.open();
        document.write('<link rel="stylesheet" href="style.css">')
        haromszog_4();
        document.close();
    });
    document.getElementById('haromszog5').addEventListener('click', function(event) {
        document.open();
        document.write('<link rel="stylesheet" href="style.css">')
        haromszog_5();
        document.close();
    });
}
