import React, { Component, PropTypes } from "react"

export default class Execute extends Component {

  static propTypes = {
    specSelectors: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    operation: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    getComponent: PropTypes.func.isRequired,
    method: PropTypes.string.isRequired,
    onExecute: PropTypes.func
  }

  onClick=()=>{
    let { specSelectors, specActions, operation, path, method } = this.props

    specActions.validateParams( [path, method] )

    if ( specSelectors.validateBeforeExecute([path, method]) ) {
      if(this.props.onExecute) {
        this.props.onExecute()
      }
      // remove 'undefined' from path segments
      path = path.replace(/\/undefined/, '')
      specActions.execute( { operation, path, method } )
    }
  }

  onChangeProducesWrapper = ( val ) => this.props.specActions.changeProducesValue([this.props.path, this.props.method], val)

  render(){
    return (
        <button className="btn execute opblock-control__btn" onClick={ this.onClick }>
          Execute
        </button>
    )
  }
}
