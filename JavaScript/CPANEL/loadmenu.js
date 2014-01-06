function loadXMLDoc_2(dname) {
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
xmlDoc = loadXMLDoc_2("menu.xml");

w = xmlDoc.getElementsByTagName("title");
z = xmlDoc.getElementsByTagName("href");
