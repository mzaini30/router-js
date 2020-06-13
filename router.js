class Router {
 constructor(data){
  this.data = data
  localStorage.setItem("data_router", JSON.stringify(this.data))
  window.addEventListener("hashchange", this.jalankan)
  this.jalankan()
 }
 jalankan(){
  this.data == undefined ? this.data = JSON.parse(localStorage.data_router) : ""
  location.hash == "" ? location.href = "#/" : ""
  document.querySelector(this.data.el).innerHTML = document.querySelector(this.data.routes[location.hash.split("/")[0]]).innerHTML
  if (this.data.script){
   var x
   for (x of this.data.script){
    eval(x)
   }
  }
 }
}