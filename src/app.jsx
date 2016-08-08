var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail-list');
var options = {
    thumbnailData: [
        {
            title:'Show Courses',
            number:120,
            header: 'Learn React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
            imageUrl:'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
        },
        {
            title:'Show Courses',
            number:25,
            header: 'Gulp',
            description: 'Lrem ipsumdolor sit amet, conectetur adipiicing elit. Qui ditiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
            imageUrl: 'http://brunch.io/images/others/gulp.png'
        },
    ]
}

var element = React.createElement(ThumbnailList, options);

ReactDOM.render(
    element,
    document.querySelector('.container')
);