import React, { PropTypes } from "react"

export default class BaseLayout extends React.Component {

  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired
  }

  render() {
    let { specSelectors, specActions, getComponent } = this.props

    let info = specSelectors.info()
    let url = specSelectors.url()
    let basePath = specSelectors.basePath()
    let host = specSelectors.host()
    let securityDefinitions = specSelectors.securityDefinitions()
    let externalDocs = specSelectors.externalDocs()
    let schemes = specSelectors.schemes()

    let Info = getComponent("info")
    let Operations = getComponent("operations", true)
    let Models = getComponent("models", true)
    let AuthorizeBtn = getComponent("authorizeBtn", true)
    let Row = getComponent("Row")
    let Col = getComponent("Col")
    let Errors = getComponent("errors", true)
    const Schemes = getComponent("schemes")

    const isSpecEmpty = !specSelectors.specStr()

    if(isSpecEmpty) {
      return <h4>No spec provided.</h4>
    }

    return (

      <div className='swagger-ui'>
          <div>
            <Errors/>
            <Row>
              <Col mobile={12} desktop={12} >
                <Operations/>
              </Col>
            </Row>
            <Row>
              <Col mobile={12} desktop={12} >
                <Models/>
              </Col>
            </Row>
          </div>
        </div>
      )
  }
}
