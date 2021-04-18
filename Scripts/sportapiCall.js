function getAPIData()
{
    var xhttp = new XMLHttpRequest();

    var key = '1';
    var searchValue = document.getElementById('search-text').value;
    console.log(searchValue);
    var url = 'https://www.thesportsdb.com/api/v1/json/1/searchevents.php' + key + '?e=' + searchValue;


    console.log(url);
    xhttp.open('GET', url);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            data = JSON.parse(this.responseText);
            console.log(data);

            document.getElementById('event').innerHTML = data.Name;
          //  document.getElementById('year').innerHTML = data.Year;
           // document.getElementById('plot').innerHTML = data.Plot;
           // document.getElementById('poster').src = data.Poster;

            /*document.write('<h1>' + data.Title + '</h1>');*/
            document.getElementById('search-text').value = null;
        }
    }
}


