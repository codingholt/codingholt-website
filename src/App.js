import 'terminal.css';
import Header from './components/Header';
import Link from './components/Link';


function App() {
  return (
    <div className="container">
      <Header/>

      <h2>Projects</h2>
      <div className='links'>
        <Link 
          link='https://openbook-solana.vercel.app'
          linkName='ð Open Book'
          linkText='My first web3 project! Everyone can write something in the web3 bookâ¨'
        />
           <Link 
          link='https://coingecko-cli.vercel.app/'
          linkName='ï¸ð» CoinGecko-CLI'
          linkText='Query everything from coingecko right in your command line'
        />
          <Link 
          link='https://randomdoggo.vercel.app/'
          linkName='ï¸ð¶ Random Doggo'
          linkText='Display a random image of a dog'
        />
           <Link 
          link='https://kenmerkende-aspecten.vercel.app/'
          linkName='ï¸ðï¸ Leer de kenmerkende aspecten'
          linkText='(Dutch) Een app die ik gemaakt heb om de kenmerkende aspecten te leren voor mijn geschiedenis examen.'
        />
          <Link
            link='https://self-driving-js.vercel.app/'
            linkName='ð Self driving car'
            linkText='A self driving car simulation made with help of a youtube course'
          />
      </div>
    <p></p>
      <h2>Social Links</h2>
      <div className='links'>
        <Link 
        link='https://twitter.com/traderholt'
        linkName='@traderholt'
        linkText='Twitter account mainly crypto stuff'/>
        <Link 
        link='https://github.com/codingholt'
        linkName='@codingholt'
        linkText='Github account so you can see my shitty code'/>
    </div>

</div>
  );
}

export default App;
