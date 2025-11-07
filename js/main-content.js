import { stories } from "./data.js";

export function displayStories() {
  let storyGallery = document.querySelector(".story-gallery");
  let i = 0;
  stories.forEach((item) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    let title = document.createElement("p");

    div.style.backgroundImage = `linear-gradient(transparent, rgb(0,0,0,0.4)), url('/assests/images/${item.posturl}')`;

    div.className = "story";
    if (i == 0) {
      image.src = `/images/upload.png`;
      image.className = "upload-story";
    } else {
      image.src = `/assests/images/${item.authorImg}`;
      image.className = "stories";
    }
    i++;
    title.innerText = item.author;
    div.appendChild(image);
    div.appendChild(title);
    storyGallery.appendChild(div);
  });
}
