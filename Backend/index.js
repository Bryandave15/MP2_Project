//MVC - model, view, controller design pattern
const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.urlencoded({ extended:true })) //for form submission
app.use(express.json()) //json response
app.use(
    cors(
        { origin : "http://localhost:3000" }  //front end
    )
)


//CRUD  create, read, update, delete
const profileDB = [
    {
        id:1,
        firstname : "James",
        lastname : "Bond",
        phone : "97987",
        address : "New York USA",
        email : "james@yahoo.com",
    },
    {   
        id:2,
        firstname : "Peter",
        lastname : "Pan",
        phone : "97987",
        address : "California USA",
        email : "peter@yahoo.com",
    },
    {
        id:3,
        firstname : "Michael",
        lastname : "Jordan",
        phone : "97987",
        address : "California USA",
        email : "mic@google.com",
    },
    {
        id:4,
        firstname : "Vic",
        lastname : "Saints",
        phone : "9742342987",
        address : "CDO Mindanao",
        email : "vic@google.com",
    },
];


const userDB = [
    {
        id: 1,
        username: "admin",
        password: "password123",
        status: 1,
        email: "myTest@yahoo.com"
    },
    {
        id: 2,
        username: "staff",
        password: "123",
        status: 0,
        email: "staff@google.com"
    }

]


// for login
app.post('/login-validation/', (req, res)=>{
    let username_login = req.body.username;
    let password_login = req.body.password;

   const user = userDB.find(
        (ob)=>{
          return ob.username === username_login && ob.password === password_login 
        }
    );
    
    if (user) {

        const myReturn = { code: "success", msg : "Username and Password matched a record", loginUser : user }

        res.status(200).json(myReturn);

    } else {
       res.status(401).json({ code: "failed", msg:"Incorrect Username and Password"}) 
    }


})

// my data base for inspection
const inspectionDatabase = [
    {
        id: 1,
        inspectionName: " First inspection name ",
        inspectionCode: " Inspection-001",
        itemDescription:" First Inspection description",
        trade: "Trade 1" ,
        inspectionDate: "02/12/24",
        location: "GroundFloor > Lobby",
        contractor:"Contractor 1",
        inspector: "Inspector 1 ",
        dateClosed: "2/12/24",
        uploadFiles: "Fke path for the File"
},
{
        id: 2,
        inspectionName: " Second Inspection name ",
        inspectionCode: " Inspection-002",
        itemDescription:" Second Inspection description",
        trade: "Trade 2" ,
        inspectionDate: "02/12/24",
        location: "Second Floor > Unit-A",
        contractor:"Contractor 2",
        inspector: "Inspector 2 ",
        dateClosed: "2/12/24",
        uploadFiles: "Fke path for the File"
},
{
        id: 3,
        inspectionName: " Third Inspection name ",
        inspectionCode: " Inspection-003",
        itemDescription:" Third Inspection description",
        trade: "Trade 3" ,
        inspectionDate: "02/12/24",
        location: "Third Floor > Unit-A",
        contractor:"Contractor 3",
        inspector: "Inspector 3 ",
        dateClosed: "2/12/24",
        uploadFiles: "Fke path for the File"
},
{
        id: 4,
        inspectionName: " Fourth Inspection name ",
        inspectionCode: " Inspection-004",
        itemDescription:" Fourth Inspection description",
        trade: "Trade 4" ,
        inspectionDate: "02/12/24",
        location: "Fourth Floor > Unit-A",
        contractor:"Contractor 4",
        inspector: "Inspector 4 ",
        dateClosed: "2/12/24",
        uploadFiles: "Fke path for the File"
},
{
        id: 5,
        inspectionName: " Fifth Inspection name ",
        inspectionCode: " Inspection-005",
        itemDescription:" Fifth Inspection description",
        trade: "Trade 5" ,
        inspectionDate: "02/12/24",
        location: "Fifth Floor > Unit-A",
        contractor:"Contractor 5",
        inspector: "Inspector 5 ",
        dateClosed: "2/12/24",
        uploadFiles: "Fke path for the File"
},


 ];
 // create 
app.post('/save-todo', (req, res) => {

    let inspectionName = req.body.inspectionName;
    let inspectionCode = req.body.inspectionCode;
    let itemDescription = req.body.ItemDescription;
    let trade = req.body.trade;
    let inspectionDate = req.body.inspectionDate;
    let location = req.body.location;
    let contractor = req.body.contractor;
    let inspector = req.body.inspector;
    let dateClosed = req.body.dateClosed;
    let uploadFiles = req.body.uploadFiles;


    const newTodo = {
        id: inspectionDatabase.length + 1,
        inspectionName: inspectionName,
        inspectionCode: inspectionCode,
        itemDescription: itemDescription,
        trade: trade,
        inspectionDate: inspectionDate,
        location: location,
        contractor: contractor,
        inspector: inspector,
        dateClosed: dateClosed,
        uploadFiles: uploadFiles,
    }

   if ( inspectionDatabase.push(newTodo) ) {
        res.status(200).json( {code:'success', msg:'done saving'} )
   } else {
        res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
   }

})
// update
app.put('/update-todo/:todoId', (req, res)=>{
    const todo_id = req.params.todoId;

    let inspectionName = req.body.inspectionName;
    let inspectionCode = req.body.inspectionCode;
    let itemDescription = req.body.ItemDescription;
    let trade = req.body.trade;
    let inspectionDate = req.body.inspectionDate;
    let location = req.body.location;
    let contractor = req.body.contractor;
    let inspector = req.body.inspector;
    let dateClosed = req.body.dateClosed;
    let uploadFiles = req.body.uploadFiles;
    

    const updateTodoRecord = {
        id: todo_id,
        inspectionName: inspectionName,
        inspectionCode: inspectionCode,
        itemDescription: itemDescription,
        trade: trade,
        inspectionDate: inspectionDate,
        location: location,
        contractor: contractor,
        inspector: inspector,
        dateClosed: dateClosed,
        uploadFiles: uploadFiles,
    }

   const indexOfTodo =  inspectionDatabase.findIndex( (obj) => obj.id == todo_id );

   inspectionDatabase[indexOfTodo] = updateTodoRecord;

   if (inspectionDatabase) {
        res.json(
            {
                code : "success",
                msg : "Update Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while updating"
        }
      )
   }

})
       
// read
app.get('/get-todo-data', (req, res) => {
    res.json(inspectionDatabase);  
})

// update
app.get('/get-todo/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    console.log(todoId)
    console.log(inspectionDatabase);
    const itemFound = inspectionDatabase.find( (item) => {  return todoId === item.id } ) 

     if (itemFound){
         res.status(200).json(itemFound);
     } else {
         res.status(400).json("Invalid Id")
     }

})
// let myArr = [}
// delete
app.delete('/delete-todo/:todoId', (req, res)=>{
    const todo_id = req.params.todoId;
    const indexValue =  inspectionDatabase.findIndex( (obj) => obj.id == todo_id );
    inspectionDatabase.splice(indexValue, 1); // 1, 1

    if (inspectionDatabase) {
        res.json(
            {
                code : "success",
                msg : "Delete Todo Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while deleting todo"
        }
      )
   }
    
})

// PARA SA inspection register
const inspectionDB = [];

app.post('/add-inspection', (req, res) => {
    let activityName = req.body.activityName;
    let inspectionCode  = req.body.inspectionCode;
    let description = req.body.description;
    let trade = req.body.trade;
    let inspectionDate = req.body.inspectionDate;
    let location = req.body.location;
    let contractor = req.body.contractor;
    let inspector = req.body.inspector;
    let dateClosed = req.body.dateClosed;
    let file1 = req.body.file1;

    idCount = inspectionDB.length + 1;
    const newRecord = {
        id: idCount,
        activityName: activityName,
        inspectionCode: inspectionCode,
        description: description,
        trade: trade,
        inspectionDate: inspectionDate,
        location: location,
        contractor: contractor,
        inspector: inspector,
        dateClosed: dateClosed,
        file1: file1,
    }

    const saveStatus = inspectionDB.push(newRecord);
    if (saveStatus) {
        res.status(200).json(
            { code: "success", msg: "Inspection Added", regInspection: inspectionDB }
        );
    } else {
        res.status(400).json(
            { code: "failed", msg: "Something is wrong" }
        );
    }
});                                                                                                                                                

app.get('/search-profiles', (req, res) => {
    const searchTerm = req.query.searchTerm.toLowerCase(); // Assuming searchTerm is passed as a query parameter
    const filteredProfiles = profileDB.filter(profile => {
        // Perform case-insensitive search on firstname, lastname, and email fields
        return (
            profile.firstname.toLowerCase().includes(searchTerm) ||
            profile.lastname.toLowerCase().includes(searchTerm) ||
            profile.email.toLowerCase().includes(searchTerm)
        );
    });
    res.json(filteredProfiles);
});

app.get('/search-inspections', (req, res) => {
    const searchTerm = req.query.searchTerm.toLowerCase(); // Assuming searchTerm is passed as a query parameter
    const filteredInspections = inspectionDatabase.filter(inspection => {
        // Add null check to ensure inspection is defined before accessing its properties
        return (
            (inspection.activityName && inspection.activityName.toLowerCase().includes(searchTerm)) ||
            (inspection.description && inspection.description.toLowerCase().includes(searchTerm)) ||
            (inspection.location && inspection.location.toLowerCase().includes(searchTerm)) ||
            (inspection.contractor && inspection.contractor.toLowerCase().includes(searchTerm))
        );
    });
    res.json(filteredInspections);
});

//meeting BACKEND Start
const meetingDatabase = [
    
    {
    id:1,
    title: "First meeting",
    overview: "Meeting overview / description 1" ,
    date: "02/13/24",
    location: "Conference Room",
    agenda: "Valentines Day",
    mom: " To be announce"
},
{
    id:2,
    title: "Second Meeting",
    overview: "Meeting overview / description 2" ,
    date: "02/13/24",
    location: "Kantu",
    agenda: "Inuman",
    mom: " Ambagan"
},
{
    id:3,
    title: "Third Meeting",
    overview: "Meeting overview / description 3" ,
    date: "02/14/24",
    location: "Roofdeck",
    agenda: "Sino unang tatalon",
    mom: " Mga single"
},
{
    id:4,
    title: "Fourth Meeting",
    overview: "Meeting overview / description 4" ,
    date: "02/15/24",
    location: "ATM",
    agenda: "Sahod",
    mom: "Pera"
},
{
    id:5,
    title: "Panglimang Meeting",
    overview: "Meeting overview / description 5" ,
    date: "02/16/24",
    location: "Sa inyo",
    agenda: "Diko alam",
    mom: "Minutes nalang"
},
{
    id:6,
    title: "Second Meeting",
    overview: "Meeting overview / description 2" ,
    date: "02/13/24",
    location: "Kantu",
    agenda: "Inuman",
    mom: " Ambagan"
},
{
    id:7,
    title: "Third Meeting",
    overview: "Meeting overview / description 3" ,
    date: "02/14/24",
    location: "Roofdeck",
    agenda: "Sino unang tatalon",
    mom: " Mga single"
},
{
    id:8,
    title: "Fourth Meeting",
    overview: "Meeting overview / description 4" ,
    date: "02/15/24",
    location: "ATM",
    agenda: "Sahod",
    mom: "Pera"
},
{
    id:9,
    title: "Panglimang Meeting",
    overview: "Meeting overview / description 5" ,
    date: "02/16/24",
    location: "Sa inyo",
    agenda: "Diko alam",
    mom: "Minutes nalang"
},

];
// create 
app.post('/save-meeting', (req, res) => {

   let title = req.body.title;
   let overview = req.body.overview;
   let date = req.body.date;
   let location = req.body.location;
   let agenda = req.body.agenda;
   let mom = req.body.mom;
  

   const newMeeting = {
       id: meetingDatabase.length + 1,
       title: title,
       overview: overview,
       date: date,
       location: location,
       agenda: agenda,
       mom: mom,
   }

  if ( meetingDatabase.push(newMeeting) ) {
       res.status(200).json( {code:'success', msg:'done saving'} )
  } else {
       res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
  }

})
// update
app.put('/update-meeting/:meetingId', (req, res)=>{
   const meeting_id = req.params.meetingId;

   let title = req.body.title;
   let overview = req.body.overview;
   let date = req.body.date;
   let location = req.body.location;
   let agenda = req.body.agenda;
   let mom = req.body.mom;
  
   

   const updateMeetingRecord = {
       id: meeting_id,
       title: title,
       overview: overview,
       date: date,
       location: location,
       agenda: agenda,
       mom: mom,
   }

  const indexOfMeeting =  meetingDatabase.findIndex( (obj) => obj.id == meeting_id );

  meetingDatabase[indexOfMeeting] = updateMeetingRecord;

  if (meetingDatabase) {
       res.json(
           {
               code : "success",
               msg : "Update Done"
           }
       )
  } else {
     res.status(400).json(
       {
           code : "failed",
           msg : "Error encountered while updating"
       }
     )
  }

})
      
// read
app.get('/get-meeting-data', (req, res) => {
   res.json(meetingDatabase);  
})

// update
app.get('/get-meeting/:id', (req, res) => {
   const meetingId = parseInt(req.params.id);
   console.log(meetingId)
   console.log(meetingDatabase);
   const itemFound = meetingDatabase.find( (item) => {  return meetingId === item.id } ) 

    if (itemFound){
        res.status(200).json(itemFound);
    } else {
        res.status(400).json("Invalid Id")
    }

})
// let myArr = [}
// delete
app.delete('/delete-meeting/:meetingId', (req, res)=>{
   const meeting_id = req.params.meetingId;
   const indexValue =  meetingDatabase.findIndex( (obj) => obj.id == meeting_id );
   meetingDatabase.splice(indexValue, 1); // 1, 1

   if (meetingDatabase) {
       res.json(
           {
               code : "success",
               msg : "Delete Meeting Done"
           }
       )
  } else {
     res.status(400).json(
       {
           code : "failed",
           msg : "Error encountered while deleting todo"
       }
     )
  }
   
})

// Structural Batabse
const structuralDatabase = [
    {
    id:1,
    drawingTitle: " First Structural title",
    drawingCode: "Drawing-001",
    drawingLocation: "69th Floor > Unit 69",
    trade: "Architectural"
    },
    {
    id:2,
    drawingTitle: " Second Structural title",
    drawingCode: "Drawing-002",
    drawingLocation: "69th Floor > Unit A",
    trade: "Mechanical"
    },
    {
    id:3,
    drawingTitle: " Third Structural title",
    drawingCode: "Drawing-003",
    drawingLocation: "50th Floor > Unit A",
    trade: "Electrical"
    },
    {
    id:4,
    drawingTitle: " Fourth Structural title",
    drawingCode: "Drawing-004",
    drawingLocation: "50th Floor > Unit D",
    trade: "Civil Works"
    },
    {
    id:5,
    drawingTitle: " Fifth Structural title",
    drawingCode: "Drawing-005",
    drawingLocation: "50th Floor > Unit D",
    trade: "Sanitary"
    },     
    {
    id:6,
    drawingTitle: " Third Structural title",
    drawingCode: "Drawing-003",
    drawingLocation: "50th Floor > Unit A",
    trade: "Electrical"
    },
    {
    id:7,
    drawingTitle: " Fourth Structural title",
    drawingCode: "Drawing-004",
    drawingLocation: "50th Floor > Unit D",
    trade: "Civil Works"
    },
    {
    id:8,
    drawingTitle: " Fifth Structural title",
    drawingCode: "Drawing-005",
    drawingLocation: "50th Floor > Unit D",
    trade: "Sanitary"
    },  


];
// create 
app.post('/save-structural', (req, res) => {

   let drawingTitle = req.body.drawingTitle;
   let drawingCode = req.body.drawingCode;
   let drawingLocation = req.body.drawingLocation;
   let trade = req.body.trade;
   let uploadFiles = req.body.uploadFiles;


   const newDrawing = {
       id: structuralDatabase.length + 1,
       drawingTitle: drawingTitle,
       drawingCode: drawingCode,
       drawingLocation: drawingLocation,
       trade: trade,
       uploadFiles: uploadFiles,
   }

  if ( structuralDatabase.push(newDrawing) ) {
       res.status(200).json( {code:'success', msg:'done saving'} )
  } else {
       res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
  }

})
// update
app.put('/update-structural/:structuralId', (req, res)=>{
   const structural_id = req.params.structuralId;

   let drawingTitle = req.body.drawingTitle;
   let drawingCode = req.body.drawingCode;
   let drawingLocation = req.body.drawingLocation;
   let trade = req.body.trade;
   let uploadFiles = req.body.uploadFiles;

   const updateStructuralRecord = {
       id: structural_id,
       drawingTitle: drawingTitle,
       drawingCode: drawingCode,
       drawingLocation: drawingLocation,
       trade: trade,
       uploadFiles: uploadFiles,
   }

  const indexOfStructural =  structuralDatabase.findIndex( (obj) => obj.id == structural_id );

  structuralDatabase[indexOfStructural] = updateStructuralRecord;

  if (structuralDatabase) {
       res.json(
           {
               code : "success",
               msg : "Update Done"
           }
       )
  } else {
     res.status(400).json(
       {
           code : "failed",
           msg : "Error encountered while updating"
       }
     )
  }

})
      
// read
app.get('/get-structural-data', (req, res) => {
   res.json(structuralDatabase);  
})

// update
app.get('/get-structural/:id', (req, res) => {
   const structuralId = parseInt(req.params.id);
   console.log(structuralId)
   console.log(structuralDatabase);
   const itemFound = structuralDatabase.find( (item) => {  return structuralId=== item.id } ) 

    if (itemFound){
        res.status(200).json(itemFound);
    } else {
        res.status(400).json("Invalid Id")
    }

})
// let myArr = [}
// delete
app.delete('/delete-structural/:structuralId', (req, res)=>{
   const structural_id = req.params.structuralId;
   const indexValue =  structuralDatabase.findIndex( (obj) => obj.id == structural_id );
   structuralDatabase.splice(indexValue, 1); // 1, 1

   if (structuralDatabase) {
       res.json(
           {
               code : "success",
               msg : "Delete Todo Done"
           }
       )
  } else {
     res.status(400).json(
       {
           code : "failed",
           msg : "Error encountered while deleting todo"
       }
     )
  }
   
})


//schedule BACKEND Start
const scheduleDatabase = [
    
        {
        id:1,
        scheduleTitle: "My first schedule",
        taskName: "First Task Name",
        startDate: "2/23/24",
        finishDate: "2/25/25",
        status: "On going"
    },
    {
        id:2,
        scheduleTitle: "My second schedule",
        taskName: "Second Task Name",
        startDate: "2/23/24",
        finishDate: "2/25/25",
        status: "On going"
    },
    {
        id:3,
        scheduleTitle: "My third schedule",
        taskName: "Third Task Name",
        startDate: "2/23/24",
        finishDate: "2/25/25",
        status: "Pending"
    },
    {
        id:4,
        scheduleTitle: "My fourth schedule",
        taskName: "pang apat na Task Name",
        startDate: "2/23/24",
        finishDate: "2/25/25",
        status: "Done"
    },
    {
        id:5,
        scheduleTitle: "My panglimang schedule",
        taskName: "Fifth na Task Name",
        startDate: "2/23/24",
        finishDate: "2/25/25",
        status: "Im done!"
    },
    {
        id:6,
        scheduleTitle: "My second schedule",
        taskName: "Second Task Name",
        startDate: "2/23/24",
        finishDate: "2/25/25",
        status: "On going"
    },
    {
        id:7,
        scheduleTitle: "My third schedule",
        taskName: "Third Task Name",
        startDate: "2/23/24",
        finishDate: "2/25/25",
        status: "Pending"
    },
    {
        id:8,
        scheduleTitle: "My fourth schedule",
        taskName: "pang apat na Task Name",
        startDate: "2/23/24",
        finishDate: "2/25/25",
        status: "Done"
    },
    {
        id:9,
        scheduleTitle: "My panglimang schedule",
        taskName: "Fifth na Task Name",
        startDate: "2/23/24",
        finishDate: "2/25/25",
        status: "Im done!"
    },
    
    ];
    // create 
    app.post('/save-schedule', (req, res) => {
    
       let scheduleTitle = req.body.scheduleTitle;
       let taskName = req.body.taskName;
       let startDate = req.body.startDate;
       let finishDate = req.body.finishDate;
       let status = req.body.status;
       
      
    
       const newSchedule = {
           id: scheduleDatabase.length + 1,
           scheduleTitle: scheduleTitle,
           taskName: taskName,
           startDate: startDate,
           finishDate: finishDate,
           status: status,
           
       }
    
      if ( scheduleDatabase.push(newSchedule) ) {
           res.status(200).json( {code:'success', msg:'done saving'} )
      } else {
           res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
      }
    
    })
    // update
    app.put('/update-schedule/:scheduleId', (req, res)=>{
       const schedule_id = req.params.scheduleId;
    
       let scheduleTitle = req.body.scheduleTitle;
       let taskName = req.body.taskName;
       let startDate = req.body.startDate;
       let finishDate = req.body.finishDate;
       let status = req.body.status;
      
       
    
       const updateScheduleRecord = {
           id: schedule_id,
           scheduleTitle: scheduleTitle,
           taskName: taskName,
           startDate: startDate,
           finishDate: finishDate,
           status: status,
       }
    
      const indexOfschedule =  scheduleDatabase.findIndex( (obj) => obj.id == schedule_id );
    
      scheduleDatabase[indexOfschedule] = updateScheduleRecord;
    
      if (scheduleDatabase) {
           res.json(
               {
                   code : "success",
                   msg : "Update Done"
               }
           )
      } else {
         res.status(400).json(
           {
               code : "failed",
               msg : "Error encountered while updating"
           }
         )
      }
    
    })
          
    // read
    app.get('/get-schedule-data', (req, res) => {
       res.json(scheduleDatabase);  
    })
    
    // update
    app.get('/get-schedule/:id', (req, res) => {
       const scheduleId = parseInt(req.params.id);
       console.log(scheduleId)
       console.log(scheduleDatabase);
       const itemFound = scheduleDatabase.find( (item) => {  return scheduleId === item.id } ) 
    
        if (itemFound){
            res.status(200).json(itemFound);
        } else {
            res.status(400).json("Invalid Id")
        }
    
    })
    // let myArr = [}
    // delete
    app.delete('/delete-schedule/:scheduleID', (req, res)=>{
       const schedule_id = req.params.scheduleID;
       const indexValue =  scheduleDatabase.findIndex( (obj) => obj.id == schedule_id );
       scheduleDatabase.splice(indexValue, 1); // 1, 1
    
       if (scheduleDatabase) {
           res.json(
               {
                   code : "success",
                   msg : "Delete Meeting Done"
               }
           )
      } else {
         res.status(400).json(
           {
               code : "failed",
               msg : "Error encountered while deleting"
           }
         )
      }
       
    })

// Structural Batabse
const archiDatabase = [
    {
    id:1,
    drawingTitle: " First Architectural title",
    drawingCode: "Drawing-001",
    drawingLocation: "44th Floor > Unit 69",
    trade: "Architectural"
    },
    {
    id:2,
    drawingTitle: " Second Architectural title",
    drawingCode: "Drawing-002",
    drawingLocation: "69th Floor > Unit A",
    trade: "Masonary"
    },
    {
    id:3,
    drawingTitle: " Third Architectural title",
    drawingCode: "Drawing-003",
    drawingLocation: "50th Floor > Unit A",
    trade: "Finishes"
    },
    {
    id:4,
    drawingTitle: " Fourth Architectural title",
    drawingCode: "Drawing-004",
    drawingLocation: "50th Floor > Unit D",
    trade: "Civil Works"
    },
    {
    id:5,
    drawingTitle: " Fifth Architectural title",
    drawingCode: "Drawing-005",
    drawingLocation: "50th Floor > Unit D",
    trade: "Sanitary"
    },    
    {
    id:6,
    drawingTitle: " Fourth Architectural title",
    drawingCode: "Drawing-004",
    drawingLocation: "50th Floor > Unit D",
    trade: "Civil Works"
    },
    {
    id:7,
    drawingTitle: " Fifth Architectural title",
    drawingCode: "Drawing-005",
    drawingLocation: "50th Floor > Unit D",
    trade: "Sanitary"
    },    

];
// create 
app.post('/save-archi', (req, res) => {

   let drawingTitle = req.body.drawingTitle;
   let drawingCode = req.body.drawingCode;
   let drawingLocation = req.body.drawingLocation;
   let trade = req.body.trade;
   let uploadFiles = req.body.uploadFiles;


   const newDrawing = {
       id: archiDatabase.length + 1,
       drawingTitle: drawingTitle,
       drawingCode: drawingCode,
       drawingLocation: drawingLocation,
       trade: trade,
       uploadFiles: uploadFiles,
   }

  if ( archiDatabase.push(newDrawing) ) {
       res.status(200).json( {code:'success', msg:'done saving'} )
  } else {
       res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
  }

})
// update
app.put('/update-archi/:archiId', (req, res)=>{
   const archi_id = req.params.archiId;

   let drawingTitle = req.body.drawingTitle;
   let drawingCode = req.body.drawingCode;
   let drawingLocation = req.body.drawingLocation;
   let trade = req.body.trade;
   let uploadFiles = req.body.uploadFiles;

   const updatearchiRecord = {
       id: archi_id,
       drawingTitle: drawingTitle,
       drawingCode: drawingCode,
       drawingLocation: drawingLocation,
       trade: trade,
       uploadFiles: uploadFiles,
   }

  const indexOfarchi =  archiDatabase.findIndex( (obj) => obj.id == archi_id );

  archiDatabase[indexOfarchi] = updatearchiRecord;

  if (archiDatabase) {
       res.json(
           {
               code : "success",
               msg : "Update Done"
           }
       )
  } else {
     res.status(400).json(
       {
           code : "failed",
           msg : "Error encountered while updating"
       }
     )
  }

})
      
// read
app.get('/get-archi-data', (req, res) => {
   res.json(archiDatabase);  
})

// update
app.get('/get-archi/:id', (req, res) => {
   const archilId = parseInt(req.params.id);
   console.log(archiId)
   console.log(archiDatabase);
   const itemFound = archiDatabase.find( (item) => {  return archiId=== item.id } ) 

    if (itemFound){
        res.status(200).json(itemFound);
    } else {
        res.status(400).json("Invalid Id")
    }

})
// let myArr = [}
// delete
app.delete('/delete-archi/:archiId', (req, res)=>{
   const archi_id = req.params.archiId;
   const indexValue =  archiDatabase.findIndex( (obj) => obj.id == archi_id );
   archiDatabase.splice(indexValue, 1); // 1, 1

   if (structuralDatabase) {
       res.json(
           {
               code : "success",
               msg : "Delete Todo Done"
           }
       )
  } else {
     res.status(400).json(
       {
           code : "failed",
           msg : "Error encountered while deleting todo"
       }
     )
  }
   
})

// asbuilt Batabse
const asbuiltDatabase = [
    {
    id:1,
    drawingTitle: " First asbuilt title",
    drawingCode: "Drawing-001",
    drawingLocation: "69th Floor > Unit 69",
    trade: "Architectural"
    },
    {
    id:2,
    drawingTitle: " Second asbuilt title",
    drawingCode: "Drawing-002",
    drawingLocation: "69th Floor > Unit A",
    trade: "Mechanical"
    },
    {
    id:3,
    drawingTitle: " Third asbuilt title",
    drawingCode: "Drawing-003",
    drawingLocation: "50th Floor > Unit A",
    trade: "Electrical"
    },
    {
    id:4,
    drawingTitle: " Fourth asbuilt title",
    drawingCode: "Drawing-004",
    drawingLocation: "50th Floor > Unit D",
    trade: "Civil Works"
    },
    {
    id:5,
    drawingTitle: " Fifth asbuilt title",
    drawingCode: "Drawing-005",
    drawingLocation: "50th Floor > Unit D",
    trade: "Sanitary"
    },      
        {
    id:6,
    drawingTitle: " Second asbuilt title",
    drawingCode: "Drawing-002",
    drawingLocation: "69th Floor > Unit A",
    trade: "Mechanical"
    },
    {
    id:7,
    drawingTitle: " Third asbuilt title",
    drawingCode: "Drawing-003",
    drawingLocation: "50th Floor > Unit A",
    trade: "Electrical"
    },
    {
    id:8,
    drawingTitle: " Second asbuilt title",
    drawingCode: "Drawing-002",
    drawingLocation: "69th Floor > Unit A",
    trade: "Mechanical"
    },
    {
    id:9,
    drawingTitle: " Third asbuilt title",
    drawingCode: "Drawing-003",
    drawingLocation: "50th Floor > Unit A",
    trade: "Electrical"
    },


];
// create 
app.post('/save-asbuilt', (req, res) => {

   let drawingTitle = req.body.drawingTitle;
   let drawingCode = req.body.drawingCode;
   let drawingLocation = req.body.drawingLocation;
   let trade = req.body.trade;
   let uploadFiles = req.body.uploadFiles;


   const newDrawing = {
       id: asbuiltDatabase.length + 1,
       drawingTitle: drawingTitle,
       drawingCode: drawingCode,
       drawingLocation: drawingLocation,
       trade: trade,
       uploadFiles: uploadFiles,
   }

  if ( asbuiltDatabase.push(newDrawing) ) {
       res.status(200).json( {code:'success', msg:'done saving'} )
  } else {
       res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
  }

})
// update
app.put('/update-asbuilt/:asbuiltId', (req, res)=>{
   const asbuilt_id = req.params.asbuiltId;

   let drawingTitle = req.body.drawingTitle;
   let drawingCode = req.body.drawingCode;
   let drawingLocation = req.body.drawingLocation;
   let trade = req.body.trade;
   let uploadFiles = req.body.uploadFiles;

   const updateasbuiltRecord = {
       id: asbuilt_id,
       drawingTitle: drawingTitle,
       drawingCode: drawingCode,
       drawingLocation: drawingLocation,
       trade: trade,
       uploadFiles: uploadFiles,
   }

  const indexOfasbuilt =  asbuiltDatabase.findIndex( (obj) => obj.id == asbuilt_id );

  asbuiltDatabase[indexOfasbuilt] = updateasbuiltRecord;

  if (asbuiltDatabase) {
       res.json(
           {
               code : "success",
               msg : "Update Done"
           }
       )
  } else {
     res.status(400).json(
       {
           code : "failed",
           msg : "Error encountered while updating"
       }
     )
  }

})
      
// read
app.get('/get-asbuilt-data', (req, res) => {
   res.json(asbuiltDatabase);  
})

// update
app.get('/get-asbuilt/:id', (req, res) => {
   const asbuiltId = parseInt(req.params.id);
   console.log(asbuiltId)
   console.log(asbuiltDatabase);
   const itemFound = asbuiltDatabase.find( (item) => {  return asbuiltId=== item.id } ) 

    if (itemFound){
        res.status(200).json(itemFound);
    } else {
        res.status(400).json("Invalid Id")
    }

})
// let myArr = [}
// delete
app.delete('/delete-asbuilt/:asbuiltId', (req, res)=>{
   const asbuilt_id = req.params.asbuiltId;
   const indexValue =  asbuiltDatabase.findIndex( (obj) => obj.id == asbuilt_id );
   asbuiltDatabase.splice(indexValue, 1); // 1, 1

   if (asbuiltDatabase) {
       res.json(
           {
               code : "success",
               msg : "Delete Todo Done"
           }
       )
  } else {
     res.status(400).json(
       {
           code : "failed",
           msg : "Error encountered while deleting todo"
       }
     )
  }
   
})

    // mefps Batabse
    const mefpsDatabase = [
        {
        id:1,
        drawingTitle: " First mefps title",
        drawingCode: "Drawing-001",
        drawingLocation: "69th Floor > Unit 69",
        trade: "Electrical"
        },
        {
        id:2,
        drawingTitle: " Second mefps title",
        drawingCode: "Drawing-002",
        drawingLocation: "69th Floor > Unit A",
        trade: "Mechanical"
        },
        {
        id:3,
        drawingTitle: " Third mefps title",
        drawingCode: "Drawing-003",
        drawingLocation: "50th Floor > Unit A",
        trade: "Fire Protection"
        },
        {
        id:4,
        drawingTitle: " Fourth mefps title",
        drawingCode: "Drawing-004",
        drawingLocation: "50th Floor > Unit D",
        trade: "Mechanical-HVAC"
        },
        {
        id:5,
        drawingTitle: " Fifth mefps title",
        drawingCode: "Drawing-005",
        drawingLocation: "50th Floor > Unit D",
        trade: " Mechanical-Ventilation"
        },  
        {
            id:6,
            drawingTitle: " Panganim mefps title",
            drawingCode: "Drawing-005",
            drawingLocation: "50th Floor > Unit D",
            trade: " Mechanical-Ventilation"
            },      


    ];
    // create 
    app.post('/save-mefps', (req, res) => {

    let drawingTitle = req.body.drawingTitle;
    let drawingCode = req.body.drawingCode;
    let drawingLocation = req.body.drawingLocation;
    let trade = req.body.trade;
    let uploadFiles = req.body.uploadFiles;


    const newDrawing = {
        id: mefpsDatabase.length + 1,
        drawingTitle: drawingTitle,
        drawingCode: drawingCode,
        drawingLocation: drawingLocation,
        trade: trade,
        uploadFiles: uploadFiles,
    }

    if ( mefpsDatabase.push(newDrawing) ) {
        res.status(200).json( {code:'success', msg:'done saving'} )
    } else {
        res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
    }

    })
    // update
    app.put('/update-mefps/:mefpsId', (req, res)=>{
    const mefps_id = req.params.mefpsId;

    let drawingTitle = req.body.drawingTitle;
    let drawingCode = req.body.drawingCode;
    let drawingLocation = req.body.drawingLocation;
    let trade = req.body.trade;
    let uploadFiles = req.body.uploadFiles;

    const updatemefpsRecord = {
        id: mefps_id,
        drawingTitle: drawingTitle,
        drawingCode: drawingCode,
        drawingLocation: drawingLocation,
        trade: trade,
        uploadFiles: uploadFiles,
    }

    const indexOfmefps =  mefpsDatabase.findIndex( (obj) => obj.id == mefps_id );

    mefpsDatabase[indexOfmefps] = updatemefpsRecord;

    if (mefpsDatabase) {
        res.json(
            {
                code : "success",
                msg : "Update Done"
            }
        )
    } else {
        res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while updating"
        }
        )
    }

    })
        
    // read
    app.get('/get-mefps-data', (req, res) => {
    res.json(mefpsDatabase);  
    })

    // update
    app.get('/get-mefps/:id', (req, res) => {
    const mefpsId = parseInt(req.params.id);
    console.log(mefpsId)
    console.log(mefpsDatabase);
    const itemFound = mefpsDatabase.find( (item) => {  return mefpsId=== item.id } ) 

        if (itemFound){
            res.status(200).json(itemFound);
        } else {
            res.status(400).json("Invalid Id")
        }

    })
    // let myArr = [}
    // delete
    app.delete('/delete-mefps/:mefpsId', (req, res)=>{
    const mefps_id = req.params.mefpsId;
    const indexValue =  mefpsDatabase.findIndex( (obj) => obj.id == mefps_id );
    mefpsDatabase.splice(indexValue, 1); // 1, 1

    if (mefpsDatabase) {
        res.json(
            {
                code : "success",
                msg : "Delete Todo Done"
            }
        )
    } else {
        res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while deleting todo"
        }
        )
    }
    
    })



    


app.listen(5000)
console.log('Server is running in port 5000')