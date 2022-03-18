import 'terminal.css';
import Header from './components/Header';
import Link from './components/Link';


function App() {
  return (
    <div className="container">
      <Header/>
      <h2>Useful Links</h2>
      <div className='links'>
        <Link 
        link='https://twitter.com/traderholt'
        linkName='@traderholt'
        linkText='Twitter Acc mainly crypto stuff'/>
        <Link 
        link='https://github.com/codingholt'
        linkName='@codingholt'
        linkText='Github account so you can see my shitty code'/>
    </div>

</div>
  );
}

export default App;
