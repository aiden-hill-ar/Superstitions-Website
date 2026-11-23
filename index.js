const doc = document;

const codeLineParent = doc.querySelector("ol.code");

Array.from(codeLineParent.children).forEach(child => {
   let target;
   let timeout;
   child.addEventListener("mouseenter", e => {
      target = e.target;
      const activeChild = codeLineParent.querySelector(".active");
      if (!!activeChild && activeChild !== target) {
         activeChild.classList.remove("active");
      };
      target.classList.add("active");
      clearTimeout(timeout);
   });
   child.addEventListener("mouseleave", e => {
      target = e.target;
      if (!codeLineParent.children[0]) {
         target.classList.remove("active");
      };
   });
});

const ulListElms = Array.from(doc.querySelectorAll("ul li"));

ulListElms.forEach(list => {
   const deg = Math.floor(Math.random() * 360);
   const colorVari = Math.floor(Math.random() * 40) + 80;
   list.style.setProperty("--rotateDeg", deg + "deg");
   list.style.setProperty("--brightness", colorVari + "%")
   console.log(colorVari)
});