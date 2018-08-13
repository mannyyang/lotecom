import React, { Component } from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import EyeGazeTemplate from "./EyeGazeTemplate";
import Sidebar from "./Sidebar";

// images
import BathroomImg from "./images/bathroom.jpg";
import BedImg from "./images/bed.jpg";
import BedpanImg from "./images/bedpan.jpg";
import PainImg from "./images/pain.jpg";
import BreatheImg from "./images/breathe.jpg";
import ChairImg from "./images/chair.jpg";
import DoctorNurseImg from "./images/doctor and nurse.jpg";
import GroomingImg from "./images/grooming.jpg";
import HomeImg from "./images/home.jpg";
import HospitalImg from "./images/hospital.jpg";
import HungryImg from "./images/hungry.jpg";
import LightsImg from "./images/lights.jpg";
import NauseaImg from "./images/nausea.jpg";
import NoImg from "./images/no.jpg";
import PhoneImg from "./images/phone.jpg";
import ShowerImg from "./images/shower.jpg";
import TeethImg from "./images/teeth.jpg";
import TemperatureImg from "./images/temperature.jpg";
import ThirstyImg from "./images/thirsty.jpg";
import TurnImg from "./images/turn.jpg";
import TvImg from "./images/tv.jpg";
import UprightImg from "./images/upright.jpg";
import VisionHearingImg from "./images/vision and hearing.jpg";
import WalkingAidImg from "./images/walking aid.jpg";
import YesImg from "./images/yes.jpg";

const emptyGrid = [
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  },
  {
    id: "",
    title: "",
    image: null
  }
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      availableIcons: [
        {
          id: "bathroom",
          title: "Toilet",
          image: BathroomImg,
          translation: "I have pain/pain test"
        },
        {
          id: "bed",
          title: "Bed / I want to lie down",
          image: BedImg,
          translation: "I have pain/pain test"
        },
        {
          id: "bedpan",
          title: "Bed pan",
          image: BedpanImg,
          translation: "I have pain/pain test"
        },
        {
          id: "breathe",
          title: "Hard to breathe",
          image: BreatheImg,
          translation: "I have pain/pain test"
        },
        {
          id: "chair",
          title: "I want to sit",
          image: ChairImg,
          translation: "I have pain/pain test"
        },
        {
          id: "doctor&nurse",
          title: "Doctor / Nurse",
          image: DoctorNurseImg,
          translation: "I have pain/pain test"
        },
        {
          id: "grooming",
          title: "Shave / Comb",
          image: GroomingImg,
          translation: "I have pain/pain test"
        },
        {
          id: "home",
          title: "Home",
          image: HomeImg,
          translation: "I have pain/pain test"
        },
        {
          id: "hospital",
          title: "Hospital",
          image: HospitalImg,
          translation: "I have pain/pain test"
        },
        {
          id: "hungry",
          title: "I'm hungry",
          image: HungryImg,
          translation: "I have pain/pain test"
        },
        {
          id: "lights",
          title: "Lights on / Lights off",
          image: LightsImg,
          translation: "I have pain/pain test"
        },
        {
          id: "nausea",
          title: "Nausea / I feel sick",
          image: NauseaImg,
          translation: "I have pain/pain test"
        },
        {
          id: "no",
          title: "No",
          image: NoImg,
          translation: "I have pain/pain test"
        },
        {
          id: "pain",
          title: "I have pain",
          image: PainImg,
          translation: "I have pain/pain test"
        },
        {
          id: "phone",
          title: "Phone, please call my family",
          image: PhoneImg,
          translation: "I have pain/pain test"
        },
        {
          id: "shower",
          title: "Shower",
          image: ShowerImg,
          translation: "I have pain/pain test"
        },
        {
          id: "teeth",
          title: "Brush teeth / Dentures",
          image: TeethImg,
          translation: "I have pain/pain test"
        },
        {
          id: "temperature",
          title: "I feel hot / I feel cold",
          image: TemperatureImg,
          translation: "I have pain/pain test"
        },
        {
          id: "thirsty",
          title: "I'm thirsty",
          image: ThirstyImg,
          translation: "I have pain/pain test"
        },
        {
          id: "turn",
          title: "I'm uncomfortable / Change position",
          image: TurnImg,
          translation: "I have pain/pain test"
        },
        {
          id: "tv",
          title: "TV",
          image: TvImg,
          translation: "I have pain/pain test"
        },
        {
          id: "upright",
          title: "I want to sit up in bed",
          image: UprightImg,
          translation: "I have pain/pain test"
        },
        {
          id: "vision&hearing",
          title: "Glasses / Hearing aids",
          image: VisionHearingImg,
          translation: "I have pain/pain test"
        },
        {
          id: "walking aid",
          title: "I want to walk / Walking aid",
          image: WalkingAidImg,
          translation: "I have pain/pain test"
        },
        {
          id: "yes",
          title: "Yes",
          image: YesImg,
          translation: "I have pain/pain test"
        },
      ],
      selectedIcons: emptyGrid
    };
  }

  onDrop = (item, position) => {
    const updatedIcons = this.state.selectedIcons.map((icon, index) => {
      if (position === index) {
        return { ...item.icon };
      }
      return icon;
    });

    this.setState({
      selectedIcons: updatedIcons
    });
  };

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="App">
          <Sidebar availableIcons={this.state.availableIcons} />
          <EyeGazeTemplate
            selectedIcons={this.state.selectedIcons}
            onDrop={this.onDrop}
          />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
