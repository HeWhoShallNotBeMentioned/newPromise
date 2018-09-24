function sleep(waitTime) {
  return new Promise ((resolve, reject) => {
    setTimeout(function(){ 
      console.log("Hello") 
    }, waitTime);
  });
}
