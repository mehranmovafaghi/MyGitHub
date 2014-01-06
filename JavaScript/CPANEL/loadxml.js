function loadXMLDoc(dname) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", dname, false);
    xhttp.send();
    return xhttp.responseXML;
}
xmlDoc = loadXMLDoc("context.xml");
$article_title = xmlDoc.getElementsByTagName("article_title");
$article_content = xmlDoc.getElementsByTagName("article_content");
//w = xmlDoc.getElementsByTagName("article_author");
//z = xmlDoc.getElementsByTagName("article_date");

function mycontent() {
    for (i = 0; i < $article_title.length; i++) {
        document.write("<div class='container'><div class='titlebox'><h2>" + $article_title[i].childNodes[0].nodeValue + "</h2>" + "</div>");
        document.write("<div class='contentbox'><p>" + $article_content[i].childNodes[0].nodeValue + "</p></div></div>");
    }
}
mycontent();
