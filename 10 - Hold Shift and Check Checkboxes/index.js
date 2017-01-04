const checkboxes = document.querySelectorAll('.inbox input[ type="checkbox" ]');

let lastChecked;

function handleCheck(e){
  // check if the shift key is down & something is being 'checked' in the list
  let inBetween = false;
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
      }

      if(inBetween){
        checkbox.checked = true; 
      }
    });
  }
  lastChecked = this; 
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));