import Button from '../components/Button'
import Input from '../components/Input'
import Layout from '../components/Layout'
import Line from '../components/Line'
import PokeList from '../components/home/PokeList'
import { usePokemonData } from '../hooks/usePokemonData'
import LoadingImg from '../components/LoadingImg'
import NotFound from '../components/NotFound'

export default function Home() {

  const { search, setShowAll, showAll, loading, pokemons } = usePokemonData()
  return (
    <Layout skip>
      <Input
        title='Pesquisar:'
        placeholder='Insira o nome do Pokémon'
        onChange={search}
      />
      <Line className='mb-5' />
      {pokemons.length > 0 && !loading ? (
        <PokeList />
      ) : (
        loading ? (
          <LoadingImg />
        ) : (
          <NotFound />
        )
      )}
      {showAll ? false : (
        loading ? false : (
          <Button label='Mostrar Mais'
            className='mt-5' onClick={setShowAll} />
        )
      )}
      <Line className='mt-5' />
    </Layout>
  )
}
