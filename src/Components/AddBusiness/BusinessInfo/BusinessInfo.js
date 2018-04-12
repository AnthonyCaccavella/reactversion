import React, { Component } from 'react';
import { Layout, Input, Button } from 'antd';
import firestore from '../../../firestore';
import '../../../App.css';

const { Header, Footer, Content } = Layout;
const { TextArea } = Input;

export default class BusinessInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      addingCompany: false,
      companyName: '',
      companyAddress: '',
      locationType: 'Main',
      businessEmail: '',
      companyCity: '',
      companyState: '',
      countryCode: '+1',
      companyPhone: null,
      buttonColor: '#7f7f7f',
      footerColor: '#7f7f7f',
      checkUrl: '',
      emailName: '',
      emailSubject: '',
      emailTemplate: '',
      textTitle: '',
      textTemplate: '',
      rotatorName: '',
      rotatorURL: '',
      l1: '',
      l2: '',
      l3: '',
      r1: '',
      r2: '',
      r3: '',
      react_app_place_id:"ChIJS8InlmeHUocRukhhOaYaSoQ",
      react_app_secret_key:"AIzaSyD1ob8HgASXwxgvByDemHZsXUwotUlayl4"

    }
    this.addCompany = this.addCompany.bind(this);
  }

  async addCompany(event) {
    this.setState({
      addingCompany: true
    })
    await firestore.collection('companies').add({
      Name: this.state.companyName,
      Address: this.state.companyAddress,
      Email: this.state.businessEmail,
      Location: this.state.locationType,
      City: this.state.companyCity,
      State: this.state.companyState,
      CountryCode: this.state.countryCode,
      Phone: this.state.companyPhone,
      ButtonColor: this.state.buttonColor,
      FooterColor: this.state.footerColor,
      checkUrl: this.state.checkUrl,
      EmailName: this.state.companyName,
      EmailSubject: this.state.emailSubject,
      EmailTemplate: this.state.emailTemplate,
      TextTitle: this.state.textTitle,
      TextTemplate: this.state.textTemplate,
      RotatorName: this.state.rotatorName,
      RotatorURL: this.state.rotatorURL,
      Landing1: this.state.l1,
      Landing2: this.state.l2,
      Landing3: this.state.l3,
      Review1: this.state.r1,
      Review2: this.state.r2,
      Review3: this.state.r3,      
      CreatedAt: new Date().toISOString()
    })
    this.setState({
      addingCompany: false,
      companyName: '',
      companyAddress: '',
      locationType: 'Main',
      businessEmail: '',
      companyCity: '',
      companyState: '',
      countryCode: '+1',
      companyPhone: null,
      buttonColor: '#7f7f7f',
      footerColor: '#7f7f7f',
      emailName: '',
      emailSubject: '',
      emailTemplate: '',
      textTitle: '',
      textTemplate: '',
      rotatorName: '',
      rotatorURL: '',
      checkUrl: ''
    })
  }
//   componentDidMount () {
//     const script = document.createElement("script");

//     script.src = "https://opiniiontestlocal.herokuapp.com/App.js";
//     script.async = true;

//     document.body.appendChild(script);
// }
  render() {

    return (

      <Layout className="App">
        <Header className="App-header">
        <h1>Opiniion</h1>
        </Header>
        <Content className="App-content">
        <h1>New Business</h1>
        
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Company Name" disabled={this.state.addingCompany} onChange={event => this.setState({ companyName: event.target.value})} value={this.state.companyName} required />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Company Address" disabled={this.state.addingCompany} onChange={event => this.setState({ companyAddress: event.target.value})} value={this.state.companyAddress} />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Business Email" disabled={this.state.addingCompany} onChange={event => this.setState({ businessEmail: event.target.value})} value={this.state.businessEmail} />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Company City" disabled={this.state.addingCompany} onChange={event => this.setState({ companyCity: event.target.value})} value={this.state.companyCity} />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Company State" disabled={this.state.addingCompany} onChange={event => this.setState({ companyState: event.target.value})} value={this.state.companyState} />
        <br />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Company Phone" disabled={this.state.addingCompany} onChange={event => this.setState({ companyPhone: event.target.value})} value={this.state.companyPhone} />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Button Background Color" disabled={this.state.addingCompany} onChange={event => this.setState({ buttonColor: event.target.value})} value={this.state.buttonColor} />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Footer Color" disabled={this.state.addingCompany} onChange={event => this.setState({ footerColor: event.target.value})} value={this.state.footerColor} />
        <br />
        <br />
        <h2>Email Template Setup</h2>
        <br />
        <br />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="From Email Name" disabled={this.state.addingCompany} onChange={event => this.setState({ emailName: event.target.value})} value={this.state.emailName} />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Email Subject" disabled={this.state.addingCompany} onChange={event => this.setState({ emailSubject: event.target.value})} value={this.state.emailSubject} />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Email Template" disabled={this.state.addingCompany} onChange={event => this.setState({ emailTemplate: event.target.value})} value={this.state.emailTemplate} />
        <br />
        <br />
        <h2>Text Message Template</h2>
        <br />
        <br />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Text Title" disabled={this.state.addingCompany} onChange={event => this.setState({ textTitle: event.target.value})} value={this.state.textTitle} />
        <br />
        <TextArea ref="app-company-input" className="App-add-company-textarea" size="small" placeholder="Text Template" disabled={this.state.addingCompany} onChange={event => this.setState({ textTemplate: event.target.value})} value={this.state.textTemplate} autosize={{ minRows: 5, maxRows: 7 }} defaultValue={"Thank you so much for being part of "+this.state.companyName+"! Please take a few seconds to tell us how we're doing."}/>
        <br />
        <br />
        <h2>Rotators</h2>
        <br />
        <Input ref="app-company-input" className="App-add-company-input" size="small" placeholder="Rotator Name" disabled={this.state.addingCompany} onChange={event => this.setState({ rotatorName: event.target.value})} value={this.state.rotatorName} />
        <Input ref="app-company-input" className="App-add-company-input2" size="small" placeholder="Rotator URL" disabled={this.state.addingCompany} onChange={event => this.setState({ rotatorURL: event.target.value})} value={this.state.rotatorURL} />
        <br />
        <h2>Landing and review</h2>
        <br />
        <Input ref="app-conpany-input" className="App-add-company-input" size="small" placeholder="How Are We Doing?" disabled={this.state.addingCompany} onChange={event => this.setState({l1: event.target.value})} value={this.state.l1} default={"How Are We Doing?"}/>
        <Input ref="app-conpany-input" className="App-add-company-input" size="small" placeholder="Please Rate Your Experience" disabled={this.state.addingCompany} onChange={event => this.setState({l2: event.target.value})} value={this.state.l2} default={"Please Rate Your Experience"}/>
        <Input ref="app-conpany-input" className="App-add-company-input" size="small" placeholder="Message" disabled={this.state.addingCompany} onChange={event => this.setState({l3: event.target.value})} value={this.state.l3} defaultValue={"At "+this.state.companyName+", we care about your exprience and want to hear about it. Please take a moment to let us know how we're doing!"}/>

        <Button className="App-add-company-button" size="default" type="primary" onClick={this.addCompany} loading={this.state.addingCompany}>Add Company</Button>
        {/* Example of implementing the Opiniion Widget */}
        <div><iframe src="https://opiniiontestlocal.herokuapp.com/#/ChIJ3bYLvl6BTYcRXKWyzRNeIhM/AIzaSyD1ob8HgASXwxgvByDemHZsXUwotUlayl4" className="iframewidget" title="ReactWidget" style={{margin:0, paddingRight:"-3px",border: "none", background:"#f9f9f9", boxShadow: "0px 2px 2px rgba(79, 79, 79, .5)", scrolling:"no", width: "75vw", overflow: "hidden", height: "323.5px"}}></iframe></div>
        </Content>
        <Footer className="App-footer">&copy; Opiniion Inc</Footer>
      </Layout>
    );

  }
}