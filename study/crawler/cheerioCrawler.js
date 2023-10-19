import axios from 'axios'
import cheerio from 'cheerio'

async function fetchData() {

  const URL_PLAYER = 'https://sofifa.com/player/20801/c-ronaldo-dos-santos-aveiro/240002'
  const response = await axios.get(URL_PLAYER)

  if(response.status == 200){
    const html = response.dataconst
    const $ = cheerio.load(html)

    const divWithUrl = $('bp3-card player')
    const url = divWithUrl.find('data-src').attr('href')
    console.log(url)
  }
}

fetchData() 
