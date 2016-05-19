/** JavaScript-Class-LOS-XVI-Assignment
Javascript Class assingment for Andela Bootcamp XVI 
Author: Lethalskillzz@gmail.com **/

function  NotesApplication(author) {
  
  //Inner properties author and notes 
  this.author  = author;
  this.notes = [];


  //This function takes the note content as the parameter and adds it to the notes list of the object.
  this.create = function(note_content) {
       this.notes.push(note_content);
       }


  //This function lists out each of the notes in the notes list.
  this.listNotes = function() {
       for(var i = 0; i<this.notes.length; i++) {
           console.log("Note ID: "+i+"\n");
           console.log(this.notes[i]+"\n\n\n" );
           console.log("By Author "+this.author+"\n");
    }
  }


  //This function takes a note_id which refers to the index of the 
  //note in the notes list and returns the content of that note as a string.
  this.get = function (note_id) {
       for(var i=0; i<=this.notes.length; i++) {
           if(note_id == i ) {

              return this.notes[i];
          }
       }
    }


  //This function take a search string, search_text and returns all the notes with that text within it.
  this.search  = function(search_text) {
         for(var i = 0; i<this.notes.length; i++) {
             console.log("Showing results for search"+search_text+"\n\n");
             if(search_text === this.notes[i] ) {
                console.log("Note ID: "+i+"\n");
                console.log(this.notes[i]+"\n\n\n" );
                console.log("By Author "+this.author+"\n");
                
                //return this.notes[i];
             }
         }
  }


  //This function deletes the note at the index note_id of the notes list.
  this.delete = function(note_id) {
         for(var i = 0; i<this.notes.length; i++) {
             if(note_id === i ) {
                delete this.notes[i];
            }
         }
   
  }

  //This function replaces the content in the note at note_id with new_content.
  this.edit = function(note_id, new_content) {
         for(var i = 0; i<this.notes.length; i++) {
             if(note_id === i ) {
                this.notes[i] = new_content;
            }
         }

  }


/*var n = new NotesApplication("Lethalskillzz");
n.create("This is my 1st Note Content");
n.create("This is my 2nd Note Content");
n.listNotes();
n.get(0);
n.get(1);*/

  
}