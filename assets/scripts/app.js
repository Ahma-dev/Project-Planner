activePrjList = [];
finishedPrjList = [];

class Tooltip {}

class ProjectItem {
  constructor(prjItemId, activePrjList, finishedPrjList) {
    this.prjItem = document.getElementById(prjItemId);
    console.log(this.prjItem);
    this.addEvents();
  }

  addEvents() {
    this.button = this.prjItem.querySelector("button:not(.alt)");
    console.log(this.button);
    this.button.addEventListener("click", Handler.clickHandler.bind(this));
  }
}

class Handler extends ProjectItem {
    constructor () {
        super()
    }

    static clickHandler() {
        console.log(this);
        const clickedBtn = console.log(this.button.parentNode.id);
    
        const activePrjs = document.querySelector("#active-projects ul");
        const finishedPrjs = document.querySelector("#finished-projects ul");
    
        if (activePrjList.includes(this.button.parentNode.id)) {
          console.log(activePrjs.contains(this.button.parentNode));
          console.log("IN");
          activePrjs.removeChild(this.button.parentNode);
          finishedPrjs.appendChild(this.button.parentNode);
    
          activePrjList = activePrjList.filter(
            (item) => item !== this.button.parentNode.id
          );
          finishedPrjList.push(this.button.parentNode.id);
    
          this.button.textContent = "Activate";
        } else if (finishedPrjList.includes(this.button.parentNode.id)) {
          console.log("nei");
          console.log(activePrjs.contains(this.button.parentNode));
    
          finishedPrjs.removeChild(this.button.parentNode);
          activePrjs.appendChild(this.button.parentNode);
    
          finishedPrjList = finishedPrjList.filter(
            (item) => item !== this.button.parentNode.id
          );
          activePrjList.push(this.button.parentNode.id);
    
          this.button.textContent = "Finish";
        }
      }
}



class ProjectList {

  constructor(type) {
    this.prjItems = document.querySelectorAll(`#${type}-projects li`);
    this.parseItems(type);
  }

  parseItems(type) {
    for (const prj of this.prjItems) {
      if (type === "active") {
        activePrjList.push(prj.id);
        const prjItem = new ProjectItem(prj.id);
      } else if (type === "finished") {
        finishedPrjList.push(prj.id);
        const prjItem = new ProjectItem(prj.id);
      }
      console.log(activePrjList, finishedPrjList);
    }
  }
}

class App {
  static init() {
    const activePrjList = new ProjectList("active");
    const finishedPrjList = new ProjectList("finished");
  }
}

App.init();
