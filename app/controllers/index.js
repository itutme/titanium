var moment = require('alloy/moment');
//The this returns an object, with public properties and functions of momentjs
var projects = Alloy.Collections.projects;

projects.fetch();

$.index.open();

function transformFunction(model) {
    var transform = model.toJSON();
    // converts into JSON format so that we can work with it
    var people = transform.assigned_to;
    transform.start_dt = moment(transform.start_dt).format('ll');
    // return date in format of "Sep 17 2015"
    transform.end_dt = moment(transform.end_dt).format('ll');
    // return date in format of "Sep 17 2015"
    transform.assigned_to = people && people.length || 0;
    // checks if project is assigned to any one and retuns the count
    return transform;
    // returns the updated collection
}

function filterOpen(collection) {
    return collection.where({
        stage : 'open'
    });
}

function filterDone(collection) {
    return collection.where({
        stage : 'done'
    });
}