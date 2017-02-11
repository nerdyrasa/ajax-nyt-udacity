
function loadData() {

    // JQuery objects

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;


    if (!streetStr && !cityStr) {
        address = "Memphis, TN";
    }

    $greeting.text('So, you want to live at ' + address + '?');


    // load streetview
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '&key=AIzaSyD9V4_Pg6d2LE8l4laim8arZ3rJeWcxDkI">');


    // what if nothing is returned?

    // picture is low quality--looks bad!

    // load nytimes
    
    // YOUR CODE GOES HERE!

    loadNewYorkTimeStories();

    return false;
};

$('#form-container').submit(loadData);

// Bypass form--just load directly
loadData();

function loadNewYorkTimeStories() {

    /*Use filters to narrow the scope of your search. You can specify the fields and the values that your query will be filtered on.

      Filter query uses standard Lucene syntax; separate the filter field name and value with a colon, and surround multiple values with parentheses: field-name:("value1" "value2" ... "value n"). The default connector for values in parentheses is OR. If you declare an explicit boolean value, it must be capitalized.

      You can filter on multiple values and fields: field-nameA:("value1") AND field-nameB:("value2" "value3"). For a list of all fields you can filter on, see the Filter Query Fields table.*/




    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    // with url above I was getting paid death notices--not something I want to include

    //var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    url += '?' + $.param({
          'api-key': "f90c93cca93a4c9aa26ad68ad7a5c7de"
          //'q': "Memphis,TN",
    });

    //url += '?fq:section_name:("Travel")';

    url += '&type_of_material:("News")&q="Memphis,TN';

    http://api.nytimes.com/svc/search/v2/articlesearch.json?facet_field=source&facet_filter=true&begin_date=20130105&end_date=20130105&api-key=sample-key')


    console.log("url = ", url);

    $.getJSON( url, function( data ) {
        var items = [];

        console.log("data = ", data);
        //console.log("data.results = ", data.results);
        ////
        //var stories = data.results;
        ////
        //$.each( stories, function( key, val ) {
        //    console.log("key,value = ", key, val.title);
        //});


    });

}