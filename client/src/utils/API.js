import axios from "axios";

export default {
  // Gets all books
  getviewmatch: function () {
    return axios.get("/api2/a/");
  },
  getInfoById: function (id) {
    return axios.get("/api2/users/" + id);
  },
  getUsers: function () {
    return axios.get("/api2/users");
  },
  findYourUser: function (id, startAge, EndAge, Gender, Area) {
    return axios.get("/api2/users/" + id + "/" + startAge + "/" + EndAge + "/" + Gender + "/" + Area);

  },
  // Gets the book with the given id
  getUsersByid: function (id) {
    return axios.get("/api2/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function (id) {
    return axios.delete("/api2/users/" + id);
  },
  // Saves a book to the database
  saveUser: function (bookData) {
    return axios.post("/api2/users", bookData);
  },
  sendEamil: function (data) {
    return axios.post("/email", data);
  },
  save: function (id, saveid) {
    return axios.get("/api2/users/" + id + "/" + saveid);
  },

  remove: function (id, saveid) {
    return axios.get("/api2/users/remove/" + id + "/" + saveid);
  },

  allUsers: function () {
    return axios.get("/api3/users");
  },
  saveProfile:function(id,aboutMe,interestedIn,myLocation,myGender,myAge){
    // return axios.post('/api2/users/saveProfile/', {
    //   id: id,
    //   aboutMe: aboutMe,
    //   interestedIn: interestedIn,
    //   myLocation: myLocation,
    //   myGender: myGender,
    //   myAge: myAge,
    // });
    return axios.get("/api2/users/saveProfile/"+id+"/"+aboutMe+"/"+interestedIn+"/"+myLocation+"/"+myGender+"/"+myAge)
  }

};