import {connect} from 'react-redux';
import {testMessage} from '../actions/conversationActions';
import React from 'react';

class TestComponent extends React.Component {

  constructor(props){
    super(props);
    this.testClick = this.testClick.bind(this);
  }

  testClick(e) {
    e.preventDefault();
    this.props.testMessage();
  };

   render() {
     let message = 'Hello Vitya! It is a test button to check redux';

     return(
       <div>
         <p>{message}</p>
         <button onClick={this.testClick}>Test</button>
       </div>
     );
   };
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
    testMessage: () => {
      dispatch(testMessage());
    },
 });

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);

