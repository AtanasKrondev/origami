const postService = {
    load: function (id) {
        return fetch('http://localhost:9999/api/origami/')
            .then((res) => res.json());
    }
};

export default postService;