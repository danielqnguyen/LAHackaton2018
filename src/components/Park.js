import React, {Component} from 'react';
import ParkForm from "./ParkForm"

class Park extends Component {
    constructor (props) {
        super(props);
        this.state = {
            meterNum: "",
            time: "",
            card: "",
            total: ""


        }
    }

        onChange = evt => {
            const key = evt.target.name;
            const val = evt.target.value;
            this.setState(
              {
                [key]: val
              }
            );
          };
          componentDidMount(){
            window.V.init({
                apikey: "88XIS66LQV6WBYA417KW21-PekffcTrxMQFYlqkMumzwHOiio",
                paymentRequest: {
                  currencyCode: "USD",
                  subtotal: "11.00"
                }
              });
              window.V.on("payment.success", function (payment) { alert(JSON.stringify(payment)); });
              window.V.on("payment.cancel", function (payment) { alert(JSON.stringify(payment)); });
              window.V.on("payment.error", function (payment, error) { alert(JSON.stringify(error)); });
          }

          render() {
            return (
              <React.Fragment>
                  <div className="background">
              <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="authentication-wrapper authentication-2 ui-bg-cover ui-bg-overlay-container container-fluid px-4">
                  <div className="row">
                    <div className="authentication-inner py-5 mx-auto" >
                      <div className="card" style={{ minWidth: "25vw", maxWidth: "70vw", minHeight: "60vh", maxHeight: "85vh" }}>
                        <div className="d-flex justify-content-center align-items-center pb-2 mb-4" style={{ minWidth: "25vw", maxWidth: "70vw", minHeight: "60vh", maxHeight: "85vh" }}>
                          <div className="container">
                            <div className="card-body">
                              <div className="d-flex justify-content-center align-items-center pb-2 mb-4">
                                <img src="" alt="" />
                              </div>
                              <h3 className="text-center text-muted font-weight-normal mb-4">
                                Park
                              </h3>
                              <form className="me">
                    <ParkForm
                        meterNum = {this.state.meterNum}
                        onChange={this.onChange}
                        
                    />
                     <img alt="Visa Checkout" className="v-button" role="button" src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" />
                    <button
                    style={{ minWidth: "30vw", maxWidth: "100vw" }}
                     type="button"
                    className="btn btn-primary btn-block mt-4"
                    onClick={this.onClick}
                    >
                    Start Parking
                        </button>
                        </form>
                              <div className="card-footer px-4 px-md-3 px-xs-3 px-sm-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    </React.Fragment>
            )
    }
}

export default Park

