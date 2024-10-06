// const checkbox = document.getElementById("checkbox-1");
//    const checkboxImage = document.querySelector(".checkbox-image");

//    checkbox.addEventListener("change", () => {
//      if (checkbox.checked) {
//        checkboxImage.src = "img/Radio_button_checked"; // Устанавливаем изображение "Отмечено"
//      } else {
//        checkboxImage.src = "img/Radio_button_unchecked.png"; // Устанавливаем изображение "Не отмечено"
//      }
//    });

const checkboxes = document.querySelectorAll(".checkbox");
console.log(checkboxes);

for(const checkbox of checkboxes) {
    const text = checkbox.parentElement.parentElement.querySelector(".task-frame");
    
    if (checkbox.checked) {
        text.classList.add("checked")
    } 

    checkbox.addEventListener("change", () => {
        text.classList.toggle("checked")
        
        })
} 

