

var table = $("#subtabs_and_searchbar").next().find("table")[1];
var td = $(table).children().children().children()[2];
var current_page = parseInt( $(td).clone().children().remove().end().text().trim(), 10);
var next_page = current_page + 1;
var link = $(td).children()[0].getAttribute("href");

// /mturk/viewhits?
// searchWords=
// &selectedSearchType=hitgroups
// &sortType=NumHITs:1
// &pageNumber=2
// &searchSpec=HITGroupSearch#T#1#10#-1#T#!#!NumHITs!1!#!

// /mturk/viewhits?
// searchWords=
// &selectedSearchType=hitgroups
// &sortType=NumHITs%3A1
// &pageNumber=2
// &searchSpec=HITGroupSearch%23T%231%2310%23-1%23T%23%21%23%21NumHITs%211%21%23%21

var link_new = link.replace("&pageNumber=" + current_page, "&pageNumber=" + next_page);
var html_new;
$.get(link_new, function(data){
    html_new = $("html");
});
