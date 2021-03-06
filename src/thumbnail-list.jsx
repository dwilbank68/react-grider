var React = require('react');

var Thumbnail = require('./thumbnail.jsx');

var ThumbnailList = React.createClass({
    render(){

        var list = this.props.thumbnailData.map(function(thumbnailProps){
            return <Thumbnail {...thumbnailProps}/>
        })

        return (
            <div>
                {list}
            </div>
        )
    }
})

module.exports = ThumbnailList;