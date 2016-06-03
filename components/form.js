import React from 'react'


module.exports = React.createClass({
  render: function() {

    return(
      <form method="post" action="/">
        <input type="text"></input>
        <input type="submit" value="Post"></input>
      </form>
      )
  }
})
