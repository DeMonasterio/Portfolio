import bbeam from "../../assets/beacon/beacon_beam.png"
import "./Beam.css"


function Beam(){
    return(
        <div class="beacon-container">
        <div class="beacon-cube">
          <div class="beacon-face beacon-front">
            <img src={bbeam} alt="Beacon Beam Texture" />
          </div>
          <div class="beacon-face beacon-back">
            <img src={bbeam} alt="Beacon Beam Texture" />
          </div>
          <div class="beacon-face beacon-left">
            <img src={bbeam} alt="Beacon Beam Texture" />
          </div>
          <div class="beacon-face beacon-right">
            <img src={bbeam} alt="Beacon Beam Texture" />
          </div>
          <div class="beacon-face beacon-top">
            <img src={bbeam} alt="Beacon Beam Texture" />
          </div>
          <div class="beacon-face beacon-bottom">
            <img src={bbeam} alt="Beacon Beam Texture" />
          </div>
        </div>
      </div>
    )

}
export default Beam;