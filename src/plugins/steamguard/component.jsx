var React = require('react');
var ReactDOM = require('react-dom');

var Loader = require('../../components/loader.js');

var SteamGuard = React.createClass({
  _proceedSteamGuard: function(event) {
    event.preventDefault();

    this.props.callback(this.refs.authCode.value);
    ReactDOM.render(<Loader />, document.getElementById('app'));
  },

  render: function() {
    return (
      <div className="window">
        <header className="toolbar toolbar-header">
          <h1 className="title">Punk</h1>
        </header>

        <div className="window-content">
          <div className="centered">
            <center><h1 className="brand logo">Punk</h1></center>
            <form>
              <div className="form-group">
                <label>SteamGuard Auth Code</label>
                <input type="text" name="steamguard" ref="authCode" className="form-control" placeholder="XXXXX"/>
              </div>
              <button className="btn btn-large btn-default" onClick={this._proceedSteamGuard}>Continue</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SteamGuard;
