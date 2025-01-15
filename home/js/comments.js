const comments = Vue.createApp({
    data() {
      return {
        guestName: '',
        guestComment: '',
        comments: []
      };
    },
    methods: {
      addComment() {
        const newComment = {
          id: this.comments.length + 1,
          name: this.guestName,
          message: this.guestComment
        };
        this.comments.push(newComment);
        this.guestName = '';
        this.guestComment = '';
      }
    }
  });

  comments.mount('#comments');

