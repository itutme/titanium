// referance to our collection 'projects'
var Projects = Alloy.Collections.projects;

// new model object
var project = Alloy.createModel('projects', { 
   name : 'Event Management webapp', 
   description: 'A cross-platform event management app with tabbed interface.',
   end_dt: '12/11/2015',
   assigned_to: 'Lorgh Zulor, Kian Boral',
   stage: "open"
});

Projects.add(project); // Add the project to the collection
project.save(); // save it to the database

$.index.open();