import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import PokemonData from '../context/PokeContext'

function MyApp({ Component, pageProps }) {
  return (
    <PokemonData>
      <Component {...pageProps} />
    </PokemonData>
  )
}

export default MyApp
