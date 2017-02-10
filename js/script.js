
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

    return false;
};

$('#form-container').submit(loadData);

// Bypass form--just load directly
loadData();