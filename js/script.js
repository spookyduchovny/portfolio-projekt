document.querySelector('.menu-btn').addEventListener('click', function() {
  document.querySelector('.bottom-header').classList.toggle('open');
});

document.querySelectorAll('.cv-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.cv-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.cv-tab-content').forEach(content => content.style.display = 'none');
    document.getElementById(tab.dataset.tab).style.display = 'block';
  });
});

document.getElementById('back-btn').addEventListener('click', function(e) {
  e.preventDefault();
  history.back();
});