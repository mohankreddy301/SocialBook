import { shortcuts, importantLinks, events, onlineData } from "./data.js";

let leftSidebar = document.getElementById("left-sidebar");

let impLinks = leftSidebar.querySelector(".imp-link");
let shortcutsLinks = leftSidebar.querySelector(".shortcut-links");

addingImportantLinks();
addingShortcuts();
addEvents();
addOnlineList();
function addingImportantLinks() {
  importantLinks.forEach((item) => {
    let impLinksInnerText = impLinks.innerHTML;
    impLinksInnerText += `<a href="#"><img src="/images/${item.image}">${item.title}</a>`;
    impLinks.innerHTML = impLinksInnerText;
  });
  addingSeeMoreToLeftBar();
}

function addingSeeMoreToLeftBar() {
  let a = document.createElement("a");
  a.innerText = "See More";
  a.href = "#";
  impLinks.appendChild(a);
}

function addingShortcuts() {
  shortcuts.forEach((item) => {
    let impLinksInnerText = shortcutsLinks.innerHTML;
    impLinksInnerText += `<a href="#"><img src="/images/${item.image}">${item.title}</a>`;
    shortcutsLinks.innerHTML = impLinksInnerText;
  });
}

function addEvents() {
  let event = document.querySelector(".right-sidebar");
  let sidebartitle = document.querySelector(".events-bar");
  events.forEach((item) => {
    let div = document.createElement("div");
    div.className = "event";
    let eventInnerHTML = div.innerHTML;
    eventInnerHTML += `
    <div class = "event-bar">
        <div class="left-event">
          <h3>${item.date}</h3>
          <span>${item.Month}</span>
        </div>
        <div class="right-event">
          <h4>${item.eventName}</h4>
          <p><span class="material-symbols-outlined">
              location_on
            </span>${item.eventsPlace}</p>
          <a href="#">More Info</a>
        </div>
         </div>
        `;
    div.innerHTML = eventInnerHTML;
    event.insertBefore(div, sidebartitle);
  });
}

function addOnlineList() {
  let event = document.querySelector(".right-sidebar");

  onlineData.forEach((item) => {
    let onlineList = document.createElement("div");
    onlineList.className = "online-list";

    onlineList.innerHTML = `
        <div class="online">
          <img src="/images/${item.image}" alt="">
        </div>
        <p>${item.title}</p>`;
        
    event.appendChild(onlineList);
  });
}
