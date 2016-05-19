'use strict'

    var NotesApplication;

 // beforeEach(function() {
    NotesApplication = new NotesApplication("New Author");
    NotesApplication.create("note");

  //});


describe("NotesApplication create", function() {

  /*it("note c should be able to create note", function() {
    expect(NotesApplication.notes).toContain("note");
  });*/


  it("should be able to create note", function() {
    expect(NotesApplication.notes).toContain("note");
  });

});


/*describe("NotesApplication list", function() {

  it("should be able to list notes", function() {
    expect(NotesApplication.listNotes()).toEqual(1);
  });

});*/


describe("NotesApplication get", function() {

  it("arg0(note_id) should be a type number", function() {
     spyOn(NotesApplication, 'get');
     NotesApplication.get(0);
     expect(typeof NotesApplication.get.calls.argsFor(0)[0]).toEqual("number");
  });

  it("should be able to get notes", function() {
    expect(NotesApplication.get(0)).toEqual("note");
  });

});


describe("NotesApplication search", function() {

  it("arg0(search_text) should be a string", function() {
      spyOn(NotesApplication, 'search');
      NotesApplication.search("note");
      expect(typeof NotesApplication.search.calls.argsFor(0)[0]).toEqual("string");
  });

});
 

describe("NotesApplication delete", function() {
`
  it("arg0(note_id) should be a type number", function() {
    spyOn(NotesApplication, 'delete');
    NotesApplication.delete(0);
    expect(typeof NotesApplication.delete.calls.argsFor(0)[0]).toEqual("number");
  });

}); 


describe("NotesApplication edit", function() {

  it("should be able to replace the content in the note", function() {
    expect(NotesApplication.edit()).toEqual(1);
  }); 

});
