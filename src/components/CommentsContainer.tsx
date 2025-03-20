import React from "react";

const commentData = [
  {
    name: "shahriar chowdhury",
    text: "my comment",
    replies: []
  },
  {
    name: "shahriar chowdhury",
    text: "my comment",
    replies: [
      {
        name: "shahriar chowdhury",
        text: "my comment",
        replies: [
          {
            name: "shahriar chowdhury",
            text: "my comment",
            replies: []
          }
        ]
      },
      {
        name: "shahriar chowdhury",
        text: "my comment",
        replies: [
          {
            name: "shahriar chowdhury",
            text: "my comment",
            replies: []
          }
        ]
      },
      {
        name: "shahriar chowdhury",
        text: "my comment",
        replies: [
          {
            name: "shahriar chowdhury",
            text: "my comment",
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: "shahriar chowdhury",
    text: "my comment",
    replies: []
  }
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 items-center bg-gray-200">
      <img
        className="w-8 h-8 rounded-lg"
        src="data:image/png;base64,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"
      />
      <div className="p-2">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((item, index) => (
    <div>
      <Comment data={item} />
      <div className="pl-5 border border-l-orange-800 ml-5">
        <CommentList comments={item.replies} />
      </div>
    </div>
  ));
};
function CommentsContainer() {
  return (
    <div className="m-2 p-2">
      <h1 className="font-bold text-3xl">Comments :</h1>
      <CommentList comments={commentData} />
    </div>
  );
}

export default CommentsContainer;
