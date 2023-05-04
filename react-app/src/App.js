import { Contacts } from './components/Contacts';
import { Experience } from './components/Experience';
import { MyPhoto } from './components/MyPhoto';
import '../src/styles.scss/styles.css'

const photoLink = './my-photo.jpg';

function App() {
  return (
    <div className="my-theme">
  <div className="wrapper">

    <div className="side-block">
      <div className="fixed-block">
          <div className='images'>
              <MyPhoto imageLink = {photoLink}/>
          </div>
          <Contacts/>
          </div>
          </div>

          <div className="central-block">
          <Experience/>
      </div>
      </div>
  </div>
  )
}
export default App;
