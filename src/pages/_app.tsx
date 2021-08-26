import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import PokemonData from '../context/PokeContext'
import ScrollData from '../context/ScrollContext'

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
