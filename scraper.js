

function task_details(tab){
    var first_name = $(tab).find(".capsulelink")[0].text;
    var first_url = $($(tab).find(".capsulelink")[1]).find("a")[0].href;
    
    var details = $($(tab).find("tr")[4]).find(".capsule_field_text");
    var requester_name = $(details[0]).find("a").text();
    var requester_url = $(details[0]).find("a")[0].href;
    var expiration_date = $(details[1]).text().trim();
    var time_allotted = $(details[2]).text().trim();
    var price = $(details[3]).text();
    var available_HITs = $(details[4]).text();
    var id = first_url.substring(first_url.indexOf("=") + 1);
  
    return {
        "task_name":first_name,
        "task_url":first_url,
        "requester_name":requester_name,
        "requester_url":requester_url,
        "exp_date":expiration_date,
        "time_allot":time_allotted,
        "price":price,
        "avail_HITs":available_HITs,
        "id":id
    };
          
}

var master_table = $("table")[6];
var tasks = $(master_table).children().children();
var task_tables = $();
$.each(tasks, function(i,x) { 
    task_tables = task_tables.add($(tasks[i]).children().children());
});

var tasks_json = $();
$.each(task_tables, function(i,x) {
    tasks_json = tasks_json.add(task_details(task_tables[i]));
});