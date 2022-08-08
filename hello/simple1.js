function LikeButton() {
  const [liked, setLiked] = React.useState();
  const text = liked ? '좋아요 취소' : '좋아요';
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text
  );
}

const domContainer1 = document.querySelector('#root1');
ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton)
  ),
  domContainer1
);

const domContainer2 = document.querySelector('#root2');
ReactDOM.render(React.createElement(LikeButton), domContainer2);

const domContainer3 = document.querySelector('#root3');
ReactDOM.render(React.createElement(LikeButton), domContainer3);
