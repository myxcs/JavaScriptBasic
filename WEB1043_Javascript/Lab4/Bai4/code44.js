function opn() {
    
    // var windowFeatures = "toolbar=yes,menubar=yes";
    // var windowSize = "width=" + (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) + ",height=" + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    // var newWindow = window.open("", "_blank", windowFeatures + "," + windowSize);
  }
  
  function cls() {
    
    if (newWindow && !newWindow.closed) {
      newWindow.close();
    }
  }
  
  function check() {
    
    if (newWindow && newWindow.closed) {
      alert("Cửa số mới đã được đóng.");
    } else {
      alert("Cửa số mới chưa được đóng.");
    }
  }
  