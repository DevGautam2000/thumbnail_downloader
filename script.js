const urlField = document.querySelector(".field input"),
  previewArea = document.querySelector(".preview-area"),
  imgTag = previewArea.querySelector(".thumbnail"),
  hiddenInput = document.querySelector(".hidden-input"),
  button = document.querySelector(".download-btn");

const setPreview = (imgUrl) => {
  let vidId = imgUrl.split("v=")[1].substring(0, 11);
  let ytImgUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
  imgTag.src = ytImgUrl;
};

// on key up event
urlField.onkeyup = () => {
  let imgUrl = urlField.value; //get the input value
  previewArea.classList.add("active");

  button.style.pointerEvents = "auto"; //cursor pointer

  if (imgUrl.indexOf("https://www.youtube.com/watch?v=") != -1) {
    //for youtube videos if link if coopied from the address bar
    setPreview(imgUrl);
  } else if (imgUrl.indexOf("https://youtu.be/") != -1) {
    //for youtube videos if link is copoied form shared link
    setPreview(imgUrl);
  } else if (imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
    //use regex to check these extensions in the url
    imgTag.src = imgUrl;
  } else {
    //if not a valid link
    imgTag.src = "";
    button.style.pointerEvents = "none";
    previewArea.classList.remove("active");
  }
  hiddenInput.value = imgTag.src; //hidden input for sending the input url
};
