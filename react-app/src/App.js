import { useState } from 'react';
import { Contacts } from './components/Contacts';
import { Experience } from './components/Experience';
import { MyPhoto } from './components/MyPhoto';
import { Counter } from './components/Counter';
import  WorkExperienceDetails  from './components/WorkExperienceDetails';
import  AddExperienceForm  from './components/AddExperienceForm';

import '../src/styles.scss/styles.css';

const photoLink = './my-photo.jpg';

function App() {
  const [workExperienceItems, setWorkExperienceItems] = useState([]);

  function addWorkExperience(newItem) {
    setWorkExperienceItems([...workExperienceItems, newItem]);
  }

    return (
    <div className="my-theme">
      <div className="wrapper">
        <div className="side-block">
          <div className="fixed-block">
            <div className='images'>
              <MyPhoto imageLink={photoLink}/>
            </div>
            <Contacts/>
      
          </div>
        </div>
        <div className="central-block">
          <Experience/>
          {workExperienceItems.map(item => (
            <WorkExperienceDetails key={item.name} {...item} />
          ))}
          <AddExperienceForm addExperience={addWorkExperience}/>
          <Counter/>
        </div>
      </div>
    </div>
  )
}
export default App;
