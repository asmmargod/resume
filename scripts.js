//shows the 1st hidden div
function showHidden1() {
  var x = document.getElementById("hidden-div-1");
  if (x.style.transform === "translateY(0)") {
    x.style.transform = "translateY(100%)";
  } else {
    x.style.transform = "translateY(0)";
  }
}
//moves the 1st div out of the way
function hideHidden1() {
  document.getElementById("hidden-div-1").style.transition = "all .5s";
  document.getElementById("hidden-div-1").style.transform = "translateY(100%)";
}

//bring the 2nd div's content into view
function showHidden2() {
  var x = document.getElementById("hidden-div-2");
  if (x.style.transform === "translateY(0)") {
    x.style.transform = "translateY(-275%)";
  } else {
    x.style.transform = "translateY(0)";
  }
}
//moves the 2nd div out of the way
function hideHidden2() {
  document.getElementById("hidden-div-2").style.transform = "translateY(-275%)";
  document.getElementById("hidden-div-2").style.transition = "all .5s";
}

//shows the 3rd div
function showHidden3() {
  var x = document.getElementById("hidden-div-3");
  if (x.style.transform === "scale(1)") {
    x.style.transform = "scale(0)";
  } else {
    x.style.transform = "scale(1)";
  }
}
//hides the 3rd div
function hideHidden3() {
  document.getElementById("hidden-div-3").style.transform = "scale(0)";
  document.getElementById("hidden-div-3").style.transition = "all .5s";
}

//shows the 4th div
function showHidden4() {
  var x = document.getElementById("hidden-div-4");
  if (x.style.transform === "scale(1)") {
    x.style.transform = "scale(0)";
  } else {
    x.style.transform = "scale(1)";
  }
}
//hides the 3rd div
function hideHidden4() {
  document.getElementById("hidden-div-4").style.transform = "scale(0)";
  document.getElementById("hidden-div-4").style.transition = "all .5s";
}
//slider with pages shots

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".portofolio__item--1-hidden-slider-slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

// We add the click event listener to the next button
// When the button is clicked, we get the width value of one slide
// We increase the scrollLeft property of the slidesContainer by the slideWidth.
nextButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

///scroll on view script for skills progress bars

const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("active", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
document.querySelectorAll(".skill").forEach((el) => Obs.observe(el));

//scroll trigger for data set and counter for the number next to tool/skill

var a = 0;
$(window).scroll(function () {
  var oTop = $("#counters").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".various__item--skills-quantity").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 8000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

////counters in fun facts section

//scroll trigger for data set and counter for the number next to fun facts

var b = 0;
$(window).scroll(function () {
  var oTop = $("#fun-facts").offset().top - window.innerHeight;
  if (b == 0 && $(window).scrollTop() > oTop) {
    $(".various__item--facts-item-number").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 15000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    b = 1;
  }
});
///Toggles in education
document.getElementById("toggleBtn").onclick = function () {
  var secondDiv = document.getElementById("content-1");
  if (secondDiv.style.display === "block") {
    secondDiv.style.display = "none";
  } else {
    secondDiv.style.display = "block";
  }
};

document.getElementById("toggleBtnTwo").onclick = function () {
  var secondDiv = document.getElementById("content-2");
  if (secondDiv.style.display === "block") {
    secondDiv.style.display = "none";
  } else {
    secondDiv.style.display = "block";
  }
};

document.getElementById("toggleBtnThree").onclick = function () {
  var secondDiv = document.getElementById("content-3");
  if (secondDiv.style.display === "block") {
    secondDiv.style.display = "none";
  } else {
    secondDiv.style.display = "block";
  }
};

document.getElementById("toggleBtnFour").onclick = function () {
  var secondDiv = document.getElementById("content-4");
  if (secondDiv.style.display === "block") {
    secondDiv.style.display = "none";
  } else {
    secondDiv.style.display = "block";
  }
};
