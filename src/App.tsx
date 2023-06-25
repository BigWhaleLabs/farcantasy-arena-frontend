import CardList from 'components/CardList'
import Navbar from 'components/Navbar'
import Rainbow from 'components/Rainbow'
import Rules from 'components/Rules'

export default function () {
  return (
    <Rainbow>
      <div className="container mx-auto px-4 py-10 prose">
        <Navbar />
        <p>
          Battle your Farcantasy cards! Join a battle bellow or create a new
          one. Harnessing the power of blockchain and ZK proofs.
        </p>
        <h2>Active battles</h2>
        <button className="btn btn-primary">Create new battle</button>
        <CardList />
        <h2>Completed battles</h2>
        <CardList />
        <Rules />
        <p>
          Made with ❤️ by{' '}
          <a href="https://warpcast.com/borodutch" target="_blank">
            borodutch
          </a>
        </p>
      </div>
    </Rainbow>
  )
}
