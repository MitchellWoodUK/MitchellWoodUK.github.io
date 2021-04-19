function getAPIData()
{
    var xhttp = new XMLHttpRequest();
    var searchValue = document.getElementById('search-text').value;
    console.log(searchValue);
    var url = 'https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e=' + searchValue;


    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            data = JSON.parse(this.responseText);

            console.log(data)

            document.getElementById('search-text').value = null;

            document.getElementById('search-items').remove();

            var divNode = document.createElement("DIV");

            divNode.id = 'search-items';

            document.getElementById("results-items").appendChild(divNode);

            for (var i in data.event)
            {
                    var node = document.createElement("H3");
                    var textnode = document.createTextNode('Sport: ' + data.event[i].strSport + ',' + ' League: ' + data.event[i].strLeague + ',' +' Event: ' + data.event[i].strEvent + ',' + ' Date: ' + data.event[i].dateEvent + ',' + ' Time: ' + data.event[i].strTime + '.');

                    node.appendChild(textnode);
                    node.style.color = 'white';
                    document.getElementById("search-items").appendChild(node);
            }
        }
    }
}