import React ,{Component} from 'react'
class ParentComp extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'vishwas'
    }
  }
  componentDidMount(){
    setInterval(()=>{
      name:'Vishwas'
    })
  },2000)
}
render(){
  console.log('Parent Component Render');
  reutrn(
    <div>
    Parent Component
    <RegComp name={this.state.name} />
    <PureComp name={this.state.name} />
    </div>
    )
}
}
export default ParentComp
