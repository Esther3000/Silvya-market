
import './App.css';
import DropDownMenu from './components/DropMenu';
import SideBar from './components/sidebar';
import PageContent from './components/pagecontent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DropDownMenu />
        <SideBar />
       
      </header>
      <body>
        <PageContent />
      </body>
    </div>
  );
}

export default App;
