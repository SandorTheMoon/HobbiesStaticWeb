const ToggleButton = document.querySelector('.ToggleButton')
const DropdownMenu = document.querySelector('.DropdownMenu')

ToggleButton.onclick = function () {
  DropdownMenu.classList.toggle('open')
}