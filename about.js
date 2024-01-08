// search//
var pages = [
    { name: "muslim blog", url: "Muslim Page.html" },
    { name: "hindu blog", url: "Hindu Page.html" },
    { name: "christian blog", url: "Christian.html" },
    { name: "sikh blog", url: "Sikh Page.html" },
    { name: "about", url: "about.html" },
    { name: "contact us", url: "cont.html" },
    { name: "gallery", url: "gallery.html" }
  ];
  
  function search() {
    var input = document.getElementById('searchBar').value;
    for (var i = 0; i < pages.length; i++) {
      if (input.toLowerCase() === pages[i].name.toLowerCase()) {
        window.location.href = pages[i].url;
        return;
      }
    }
    alert('Page not found!'); // Alert if page is not found
  }
  // search//