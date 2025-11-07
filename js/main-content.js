import { stories, socailPosts, moreInstaPosts } from "./data.js";

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

export function displayPosts() {
  let posts = [...socailPosts,...moreInstaPosts, ];
  let writePostContainer = document.querySelector('.main-content');

if(! writePostContainer) return;

 posts.forEach((item) => {
const postContainer = document.createElement('div');
  postContainer.className = 'post-container';

  const tempImage = new Image()
  tempImage.src = item.imageLink;
  let hashtags = "";
         item.hashtags.forEach((value) => {
          hashtags += `<a href="#" style="text-decoration: none;">${value}</a>`;
         });
    hashtags  = `${item.description} + ${hashtags}`;

  let postText = `
        <div class="user-profile">
          <img src="${item.avatarLink}" alt="" />
          <div>
            <p>${item.authorName}</p>
            <span>${item.dateAdded}</span>
          </div>
        </div>
         <p class = "post-description">${hashtags}</p>
         <img src="${item.imageLink}" alt="" class ="post-image"/>`;
         

        

  postContainer.innerHTML = postText;
  writePostContainer.appendChild(postContainer);
 });

}



export function addUserProfile(profileImg,name,postDate) {
  const userProfile = document.createElement('div');
  userProfile.className = 'user-profile';
let profile = `<img src="/assests/images/${profileImg}"/>
          <div>
            <p>${name}</p>
            <span>${postDate}</span>
          </div>`;
          userProfile.innerHTML = profile;
     return userProfile;     

}