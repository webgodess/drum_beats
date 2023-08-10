class Pads extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: 'Choose a beat'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleClick(e){
 const audio = e.target.children[0];
    audio.play();
   this.setState({display: e.target.id});
    
  }
  
  handleKeyDown(e){
   const key = e.key.toUpperCase();
const sound = document.getElementById(key);
    const parent = sound.parentElement
    sound.play();
  this.setState({
    display:parent.id
  })
    
    parent.classList.add("active") 
   setTimeout(function() {
    parent.classList.remove("active") 
},100);
  }
  componentDidMount() {
document.addEventListener('keydown',this.handleKeyDown)
  }
  componentWillUnmount() {
document.removeEventListener('keydown',this.handleKeyDown)
  }
  
  render() {
    return(
      <div>
       <h3 id="display">{this.state.display}</h3>
        <div className="container">
        <button className="drum-pad" id="punchy_Kick" onClick={this.handleClick} onKeyDown={this.handleKeyDown}>Q
    <audio src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3
" className="clip" id="Q">
   </audio>
    </button> 
 <button className="drum-pad"  id="side_Stick" onClick={this.handleClick} onKeyDown={this.handleKeyDown}>W
    <audio src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" className="clip" id="W">
    </audio>
    </button>
 <button className="drum-pad" id="brk_Snr" onClick={this.handleClick} onKeyDown={this.handleKeyDown}>E
    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="E" >
    </audio>
  </button>
 <button className="drum-pad" id="bld_H1" onClick={this.handleClick} onKeyDown={this.handleKeyDown}>A
    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" className="clip" id="A" >
     </audio>
    </button>
 <button className="drum-pad" id="dry_Ohh" onClick={this.handleClick}>S
    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" className="clip" id="S" >
       </audio>
  </button>
 <button className="drum-pad" id="dsc_Oh" onClick={this.handleClick}>D
    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D" > </audio>
    </button>
 <button className="drum-pad" id="rp4_Kick" onClick={this.handleClick}>Z
    <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="Z" >
     </audio>
    </button>
 <button className="drum-pad" id="kick_n_Hat" onClick={this.handleClick}>X
    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="X" >
     </audio>
    </button>
 <button className="drum-pad" id="twist" onClick={this.handleClick}>C
    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" className="clip" id="C" >
     </audio>
  </button>
   
        </div>
        </div>
    )
  }
}

class Drum extends React.Component{
  constructor(props) {
    super(props);
    
  }
 
  render() {
    return(
      <div>
      <h1>Drum Machine Simulation</h1>
        <div id="drum-machine" tabIndex="0">
          <Pads />
        </div> 
        </div>
      
    )
  }
    
}

ReactDOM.render(<Drum />, document.getElementById('root'))


/*
<button onClick={this.handleClick}>GUITAR TONE
          <audio preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
          </audio>
        </button>
*/