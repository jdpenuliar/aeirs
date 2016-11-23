angular.module('AEIRS').factory('sectionFactory', function($http){

	var sections=[];
	var factory={};

	factory.assignFacultyToSection=function(info, callback){
		console.log('assign faculty to section factory-----------\n',info);
		$http.post('/assignFacultyTosection',info).then(function(data){
			console.log('made it back from backend this is the new section data\n',data)
			callback(data);
		});
	};
	
	factory.addSection=function(info, callback){
		console.log('made it to sectionFactory addSection data-----------\n',info);
		$http.post('/new_section',info).then(function(data){
			console.log('made it back from backend this is the new section data\n',data)
			callback(data);
		});
	};

	factory.getSections=function(GL_ID, callback){
		console.log('made it to gradeLevels factory getSections');
		$http.get('/GL/'+GL_ID).then(function(section){
			console.log('made it back from backend this is all sections ', section);
			sections=section.data;
			callback(sections);
		});
	};

	factory.getSection=function(sectionID, callback){
		$http.get('/section/'+sectionID).then(function(section){
			console.log('made it back from backend this is the section we are looking for ', section);
			callback(section);
		})
	};

	factory.getStudentsFromSection=function(sectionID, callback){
		$http.get('/section/' + sectionID + '/show_students').then(function(student){
			console.log('made it back from backend this is one student ', student);
			callback(student);
		})
	}
	factory.getSectionFaculty=function(userID, callback){
		console.log('hhahaf actoryadfs--\n',userID);
		$http.get('/faculty/' + userID + '/sections').then(function(student){
			console.log('made it back from backend this is one student ', student);
			callback(student);
		})
	}

	factory.getFaculty=function(sectionID, callback){
		console.log('made it to section factory getFaculty');
		console.log('this is sectionID ',sectionID);
		$http.get('/section/'+sectionID+'/assign_faculty').then(function(faculty){
			console.log('made it back from backend this is all faculty ', faculty);
			faculty_list=faculty.data;
			callback(faculty_list);
		});
	};

	

	return factory;
})