function search(e, container_id) {
  let searched = e.trim();

  if (searched !== "") {
    let text = document.getElementById(container_id).innerHTML;
    let regex = new RegExp(searched, 'gi');
    let new_text = text.replace(regex, '<mark>' + searched + '</mark>');

    document.getElementById(container_id).innerHTML = new_text;
  }
}
