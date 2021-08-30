import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import PokemonData from '../contexts/PokeContext'
import ScrollData from '../contexts/ScrollContext'

function MyApp({ Component, pageProps }) {
  return (

    <PokemonData>
      <ScrollData>
        <Component {...pageProps} />
      </ScrollData>
    </PokemonData>
  )
}

export default MyApp
