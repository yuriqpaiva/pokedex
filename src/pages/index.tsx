import Button from '../components/Button'
import Input from '../components/Input'
import Layout from '../components/Layout'
import Line from '../components/Line'
import PokeList from '../components/PokeList'
import { usePokemonData } from '../hook/usePokemonData'

export default function Home() {

  const { search, setShowAll, showAll } = usePokemonData()

  return (
      <Layout skip>
        <Input
          title='Pesquisar:'
          placeholder='Insira o nome do Pokémon'
          onChange={search}
        />
        <Line className='mb-5'/>
        <PokeList />
        {showAll ? false : (
          <Button label='Mostrar Mais' 
          className='mt-5' onClick={setShowAll} />
        )}
        <Line className='mt-5'/>
      </Layout>
  )
}
