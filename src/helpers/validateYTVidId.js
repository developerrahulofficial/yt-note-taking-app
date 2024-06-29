export function validVideoId(id) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.src = "http://img.youtube.com/vi/" + id + "/mqdefault.jpg";
    img.onload = function () {
      resolve(checkThumbnail(this.width));
    };
    img.onerror = function () {
      resolve(false); // Resolve with false if image fails to load
    };
  });
}

function checkThumbnail(width) {
  if (width === 120) {
    return false;
  }
  return true;
}
