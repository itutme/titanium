var moment = require('alloy/moment');
var Projects = Alloy.Collections.projects;

Projects.fetch();

$.index.open();

function filterFunction(collection) {
   	return collection.where({stage: 'open'});
   }

function transformFunction(model) {
    var transform = model.toJSON();
    var people = transform.assigned_to;
	transform.end_dt = moment(transform.end_dt).format('ll');
    transform.assigned_to = people && people.length;
    return transform;
}

function refreshTable(e) {
	Projects.fetch();
}