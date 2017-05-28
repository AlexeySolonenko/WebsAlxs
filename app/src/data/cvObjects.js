
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */

var bio = {
  
  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  
	"name" : "Alexey Solonenko",
	"skills" : 
	  [
      {"name" : "HTML", "level" : "+"  },
      {"name" : "JS", "level" : "+"	},
      {"name" : "CSS", "level" : "++"	},
      {"name" : "Git", "level" : "" },
      {"name" : "Grunt", "level" : "" },
      {"name" : "Responsive", "level" : "" },
      {"name" : "jQuery", "level" : "" },
      {"name" : "Bootstrap", "level" : "" },
      {"name" : "Industrial HMI background", "level" : "" }
	  ],
    "commitsBio":[
      {"title":"bla", "date":"2007","detailShort":"some detail"}
    ],
    "commitsBioTitle":"Alexey['commits'].display() - my bio in few words.",
	  "statement" : "Engineer Transiting to Front-End Web Development",
    "photoUrlSmall" : "http://tab4lioz.beget.tech/wp-content/uploads/src/img/Alexey-Solonenko-Photo-mir.jpg",
	  "photoUrlLarge" : "http://tab4lioz.beget.tech/wp-content/uploads/src/img/Alexey-Solonenko-Photo.jpg",
    "photoUrlAlt" :"Profile photo. Baltic grey haired male around 30. Medium weight. 190 cm or 6.23 feet. Fragile build. Checkered shirt. Black and white photo. ",
    "photoTooltip" :
      "Responsive images using art direction and srcset.&#13;&#10;"+
      "Change window size (if your browser supports) or use dev tools to test.&#13;&#10;"+
      "Also I am using proven framework media-queries &#13;&#10;"+
      "based tools for older browsers. Grunt automated &#13;&#10; "+
      "processing and optimization.",
	  "contacts" : {
			"country" : "Malta, EU",
			"skype" : "alexey_solonenko",
      "mobile" : {'primary':'+35699703115','secondary':'+35699503677'},
      "email" : ['ot2@bk.ru','tab4@live.com'],
      "website" : "http://tab4lioz.beget.tech",
      "city" : "L-Imsida"
		},
	  "metrics": null,
	  "origin" : "Russia",
    "targetRole" : "Front End Developer",
	
  /* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
  
  "display" : function(objectBio){
      var formattedHTML = "";
      
      
      /* NAME     */
      objectBio.name.length > 2 ? (
        formattedHTML = HTMLheaderNameSmall.replace("%data%",objectBio["name"]),
        $(".start-page-id-name-small").append(formattedHTML),
        console.log(formattedHTML),
        formattedHTML = " ",
        formattedHTML = HTMLheaderNameBig.replace("%data%",objectBio["name"]),
        $(".start-page-id-name-big").append(formattedHTML),
        console.log(formattedHTML)
				):(
					console.log("No name specified")
        );
        formattedHTML = "";
        
      /* SHORT CONTACT INFO */
      formattedHTML = objectBio["contacts"]["email"][0] + ', ( ' +
        objectBio["contacts"]["mobile"]["primary"] + ' )';
      formattedHTML = HTMLcontactShort.replace("%data%",formattedHTML);
      $(".start-page-id-intro").prepend(formattedHTML);
      formattedHTML = "";
        
      /* INTRO */   
      formattedHTML = objectBio["targetRole"] + ' : ';
      objectBio["skills"].forEach(function(skill){
        skill["name"].length > 1 ? (
          formattedHTML = formattedHTML + (skill["name"])+', '
        ):(
          console.log("This skill is not defined")
        );
      });
      formattedHTML = formattedHTML.slice(0,(formattedHTML.length-2));
      formattedHTML = formattedHTML + ".";
      $(".start-page-id-intro").append(formattedHTML);
      
      /* PROFILE PHOTO */      
      formattedHTML = " ";
      objectBio.photoUrlSmall.length > 2 ? (
       formattedHTML = HTMLbioPicSmall.replace("%data%",objectBio["photoUrlSmall"]),
       formattedHTML = formattedHTML.replace("%data-tooltip%",objectBio["photoTooltip"])
				):(
					console.log("No small bio photo specified")
        );
      objectBio.photoUrlLarge.length > 2 ? (
       formattedHTML = formattedHTML + HTMLbioPicLarge.replace("%data%",objectBio["photoUrlLarge"])
				):(
					console.log("No large bio photo specified")
        )
      ;
        
      formattedHTML = formattedHTML + HTMLbioPicDefault.replace("%data%",objectBio["photoUrlLarge"]);
       
      objectBio.photoUrlAlt.length > 2 ? (
        formattedHTML = formattedHTML + HTMLbioPicAlt.replace("%data%",objectBio["photoUrlAlt"])
        ):(
					console.log("No alt text specified specified")
        )
      ;
      console.log(formattedHTML);
      console.log(formattedHTML);
      $(".start-page-id-CVphoto").append(formattedHTML);
               
  },
  
  "displayCommits":function(objectBio){
    // collapsible button text
    var formattedHTML = "";
    objectBio["commitsBioTitle"].length > 2 ? (
      formattedHTML = HTMLcommitsBioCollapseButton.replace("%data%",objectBio["commitsBioTitle"])
    ):(
      console.log("Header for collapse commits bio button is not provided") 
    );
    $(".start-page-commitsBioShort").append(formattedHTML);
    formattedHTML = "";
    
  }
}


/* PORTFOLIO OBJECT */  /* PORTFOLIO OBJECT */
/* PORTFOLIO OBJECT */  /* PORTFOLIO OBJECT */
/* PORTFOLIO OBJECT */  /* PORTFOLIO OBJECT */

var portfolio = {
  
/* ~~~~~ DATA-PROPERTIES ~~~~~~ */
/* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  "collapseHeader" : "  My beginner portfolio. + a real website used by a client!",    
  "shortStatement" : "I define a motto and a tactics to follow for each project. There is no single golden rule for all projects.&#13;&#10;"+
  "Discipline and automation first! <a href='https://github.com/AlexeySolonenko/WebsAlxs/tree/startpage' target='_blank'><b>Check my GitHub repo for project tree, Grunt and version control.</b></a> (note an art-direction with a portfolio photo). Since it is a small and academic project, there are no many commits, but version control is a wonderful thing saving time and facilitating collaboration!&#13;&#10;"+
  "Metrics of this site are shameful yet, but I am hard-headed during my every step to build a way to lightningize it by the time of my graduation project.",
  "portfolio" : [
    {
      "title" : "Real-world used promotion website",
      "url" : "http://studysnami.ru/index.php/ru/",
      "desc" : "Real working website promoting studying English in Malta to Russians. English version is under work. I get to like Joomla a lot while working on this website. W3 css theme.",
      "motto": "Better an egg today than a hen tomorrow.",
      "descShort" : "Langugage courses promotion website. Joomla. W3schools framework - built-in joomla template. My first, 'just get it work now' project. Which surprised me with visitors positive feedback and ignite to give a Front End a professional try. Thanks W3schools for their amazing work.",
      "tooltip": ""
    },
    {
      "title" : "My portfolio webiste. v1.0.1.",
      "url" : "http://tab4lioz.beget.tech/",
      "desc" : "Portfolio, skills and techniques I am learning at my Front End Development course. A tooltip-rich responsive website that I continuously developing and improving.) ",
      "motto": "'Do it right' is the shortest road.",
      "descShort" : "Portfolio, skills and techniques I am learning at my Front End Development course. I set my mind to try to enter IT occupational world due to family reasons. My goal is to build solid professional skills set, learn best practices and conquer standards. Wordpress. Bootstrap. A tooltip-rich responsive website that I continuously developing and improving.)",
      "tooltip": ""
    }
  ],

/* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
/* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
  "displayShort" : function(portfolio){
    
    // collapsible button text
    var formattedHTML = "";
    portfolio["collapseHeader"].length > 2 ? (
      formattedHTML = HTMLportfolioShortCollapseButton.replace("%data%",portfolio["collapseHeader"])
    ):(
      console.log("Header for collapse portfolio short button is not provided") 
    );
    $(".start-page-portfolio-short").append(formattedHTML);
    formattedHTML = "";
    
    //short intro statement
    formattedHTML = HTMLportfolioShortEntryStatement.replace("%data%",portfolio["shortStatement"]);
    $(".start-page-portfolio-short-collapse").append(formattedHTML);
    formattedHTML = "";
    
    // content
    portfolio["portfolio"].forEach(function(localItem){
      formattedHTML =  HTMLportfolioShortEntryTitleUrl.replace("%data%",localItem["url"])+
        HTMLportfolioShortEntryTitle.replace("%data%",localItem["title"]) +
        HTMLportfolioShortEntryMotto.replace("%data%", localItem["motto"]) +
        HTMLportfolioShortEntryDescShort.replace("%data%",localItem["descShort"]);
      formattedHTML = HTMLportfolioShortEntryBox.replace("%data%",formattedHTML);
      $(".start-page-portfolio-short-collapse").append(formattedHTML);
      formattedHTML = "";      
    }); 
    
    
  }
    
  
}


/* WORK OBJECT */
/* WORK OBJECT */

var work = {
	"jobs" : [ 
		{
			"status" : "current",
			"position" : "Electrical and Instrument Engineer",
			"employer" : "AIM Enterprises \n",
			"years" : "08.2015 - current",
			"location" : "Paola, Malta\n"
		},

		{
			"status" : "former",
			"position" : "Senior Maintenance Electrical Engineer",
			"employer" : "Total SA",
			"years" : "03.2013 - 08.2015",
			"location" : "Kharyaga, Arctic, Russia"
		},

		{
			"status" : "former",
			"position" : "Commissioning Lead Electrical Engineer",
			"employer" : "Dietsmann Technologies Ltd.",
			"years" : "04.2011 - 11.2012",
			"location" : "Kharyaga, Arctic, Russia"
		},

		{
			"status" : "current",
			"position" : "Instrumentation Engineer",
			"employer" : "Inzhener Ltd.",
			"years" : "07.2009 - 03.2011",
			"location" : "Krasnoyarsk, Russia"
		},

		{
			"status" : "current",
			"position" : "Automation Technician",
			"employer" : "MT-Tekhno Ltd.",
			"years" : "12.2007 - 03.2009",
			"location" : "Krasnoyarsk, Russia"
		}
	]
}

/* EDUCATION OBJECT */
/* EDUCATION OBJECT */

var education = {
	"CPD" : [
		{
			"name" : "Udacity",
			"major" : "Front-End Web Developer",
			"years" : "04.2017 - current",
			"city" : "Web"
		},
		
		{
			"name" : "George Brown College",
			"major" : "PLC Technician, certificate",
			"years" : "2012",
			"city" : "Toronto"
		}
	],
	
	"schools" : [
		{
			"name" : "Siberian Federal University",
			"major" : "Industrial Control Systems",
			"years" : "2002-2007",
			"location" : "Krasnoyarsk"
		},

		{
			"name" : "Siberian Federal University",
			"major" : "English Language Translator",
			"years" : "2003-2007",
			"location" : "Krasnoyarsk"
		},
		
		{
			"name" : "Siberian Federal University",
			"major" : "Reserve Army Officer, munitions.",
			"years" : "2003-2007",
			"location" : "Krasnoyarsk"
		}
	]
	
}

/* PROJECT OBJECT */
/* PROJECT OBJECT */
/* PROJECT OBJECT */


var projects = {
	"records" : [
		{
			"title" : "Language school website",
			"dates" : "",
			"description" : "Website that I made myself",
			"image" : "NA",
			"url" : ""
		},
		
		{
			"title" : "Kharyaga Phase 4",
			"dates" : "",
			"description" : "30 MW expansion of a 30kbpd oil&gas facility",
			"image" : "NA",
			"url" : ""
		},
		
		{
			"title" : "Kharyaga Phase 3",
			"dates" : "",
			"description" : "Commissioned of electrical systems of a remote 10 kbpd pad",
			"image" : "NA",
			"url" : ""
		}
	
	],
	
	"display" : function(objectProjects){
			
		objectProjects.records.forEach(function(project){
			
			$("#main").append(HTMLprojectStart);
			var formattedHTML = HTMLprojectTitle.replace("%data%",project.title);
			$("#projects").append(formattedHTML);
			formattedHTML = HTMLprojectDates.replace("%data%",project.dates);
			$("#projects").append(formattedHTML);
			formattedHTML = HTMLprojectDescription.replace("%data%",project.description);
			$("#projects").append(formattedHTML);
			
			project.image.length > 2 ? (
					formattedHTML = HTMLprojectImage.replace("%data%",project.image),
					$("#projects").append(formattedHTML)	
				):(
					console.log("No image specified")
				);
			});
	}
	

}


	
/* SKILLS */
/* SKILLS */
/* SKILLS */




