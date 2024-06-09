document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blogList');
    const blogContent = document.getElementById('blogContent');
    const blogImage = document.getElementById('blogImage');
    const authorName = document.getElementById('authorName');

    // List of blog files and their corresponding names
    const blogs = [
        { filename: 'GSoC Week 2 Summary.md', name: 'GSoC Week 2 Summary' },
        { filename: 'GSoC Week 1 Summary.md', name: 'GSoC Week 1 Summary' },
        { filename: 'GSoC Community Bonding.md', name: 'GSoC Community Bonding' },
        
    ];
    const blogImages = ['blogs/agl2.png','blogs/agl2.png', 'blogs/agl2.png'];

    // Function to load a blog
    function loadBlog(index) {
        fetch(`blogs/${blogs[index].filename}`)
            .then(response => response.text())
            .then(text => {
                blogImage.src = blogImages[index];
                authorName.textContent = "Anuj Solanki";
                blogContent.innerHTML = marked.parse(text);
                document.querySelectorAll('a').forEach(link => {
                    link.target = '_blank';
                });
            });
    }

    // Populate the blog list
    blogs.forEach((blog, index) => {
        const li = document.createElement('li');
        li.textContent = blog.name;
        li.addEventListener('click', () => {
            // Remove 'active' class from previously selected item
            const activeItem = document.querySelector('.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }

            // Add 'active' class to the selected item
            li.classList.add('active');

            // Load the selected blog
            loadBlog(index);
        });
        blogList.appendChild(li);
    });

    // Load the first blog by default
    loadBlog(0);
});
