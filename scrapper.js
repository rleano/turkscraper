
http://code.jquery.com/jquery-latest.min.js


function task_details(tab){
    first_name = $(tab).find(".capsulelink")[0].text
    first_url = $($(tab).find(".capsulelink")[1]).find("a")[0].href
    
    details = $($(tab).find("tr")[4]).find(".capsule_field_text")
    requester_name = $(details[0]).find("a").text()
    requester_url = $(details[0]).find("a")[0].href
    expiration_date = $(details[1]).text().trim()
    time_allotted = $(details[2]).text().trim()
    price = $(details[3]).text()
    available_HITs = $(details[4]).text()
    id = first_url.substring(first_url.indexOf("=") + 1)
  
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
    }
          
}

master_table = $("table")[6]
trs = $(master_table).children().children()

tasks = $(master_table).children().children()
var task_tables = $()
$.each(tasks, function(i,x) { 
    task_tables = task_tables.add($(tasks[i]).children().children())
})

var tasks_json = $()
$.each(task_tables, function(i,x) {
    tasks_json = tasks_json.add()
})