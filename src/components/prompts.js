document.getElementById('commentButton').addEventListener('click', function() {
    document.getElementById('commentSection').classList.toggle('hidden');
});

document.getElementById('commentInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        document.getElementById('publishButton').click();
    }
});

document.getElementById('publishButton').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const comment = commentInput.value.trim();


    if (comment) {
        const commentsDisplay = document.getElementById('commentsDisplay');
        const newComment = document.createElement('div');
        newComment.classList.add('p-2', 'border', 'rounded', 'mb-2');
        newComment.textContent = comment;
        commentsDisplay.appendChild(newComment);
        commentInput.value = '';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const commentButton = document.getElementById('commentButton');

    commentButton.addEventListener('click', function() {
        if (!usuarioAutenticado) {
            window.location.href = 'login_singin_index.php';
        } else {
            document.getElementById('commentSection').classList.toggle('hidden');
        }
    });
});