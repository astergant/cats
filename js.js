
let pages = new Map ([
    ["cats-object", "cats.html"],
    ["about-object", "about.html"],
    ["table-object", "table.html"],
    ["card-object", "card.html"],
    ["feedback-object", "feedback.html"],
    ["video-object", "video.html"],
])

const showPage = (key, value) => {
    deleteChild();
    let list = document.querySelector('.objects-list');
    let object = document.createElement('object');
    object.classList.add('object');
    list.appendChild(object);
    object.setAttribute('id', key);
    object.setAttribute('data', value) ;
}
function deleteChild() {
    var e = document.querySelector('.objects-list');
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

window.onload = function (){
    showPage("cats-object", "cats.html");
    for (let [key,value] of pages){
        let gotoButton = document.getElementById(key);
        if (!key){
            deleteChild();
            const image = document.createElement('img');
            image.src  = '/404.jpeg';
            document.querySelector('.objects-list').appendChild(image);
        }
        gotoButton.onclick = () => setTimeout( showPage, 200, key, value); 
        

    }
}

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));