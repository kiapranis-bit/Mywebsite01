
document.addEventListener("DOMContentLoaded", function () {

  /* ================= PRODUCT AUTO SWITCH ================= */

  const products = document.querySelectorAll(".product");

  if (products.length > 0) {

    let index = 0;

    setInterval(function () {

      products[index].classList.remove("active");
      index = (index + 1) % products.length;
      products[index].classList.add("active");

    }, 5000);

  }


  /* ================= FABRIC DESIGNER ================= */

  if (typeof fabric !== "undefined") {

    const canvasElement = document.getElementById("tshirtCanvas");

    if (canvasElement) {

      const canvas = new fabric.Canvas("tshirtCanvas", {
        width: 400,
        height: 500
      });

      // Load T-shirt Background
      fabric.Image.fromURL("T-Shirt.webp", function (img) {
        img.scaleToWidth(400);
        img.selectable = false;
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
      });

      // Upload Design
      const uploadInput = document.getElementById("uploadDesign");

      if (uploadInput) {
        uploadInput.addEventListener("change", function (e) {

          if (!e.target.files[0]) return;

          const reader = new FileReader();

          reader.onload = function (event) {

            fabric.Image.fromURL(event.target.result, function (img) {

              img.set({
                left: 150,
                top: 150
              });

              img.scaleToWidth(150);
              img.lockUniScaling = true;

              canvas.add(img);
              canvas.setActiveObject(img);
              canvas.renderAll();

            });

          };

          reader.readAsDataURL(e.target.files[0]);

        });
      }

    }

  }

});

