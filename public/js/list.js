let boardId = document.querySelector('input[name="boardId"]');
document.querySelectorAll('.board-tr').forEach(function (v, i) {
  v.addEventListener('click', function () {
    location.href = '/board/view/' + this.dataset['id'];
  });
});
