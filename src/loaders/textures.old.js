import planets from '../constants/planets/_types'
import resources from '../constants/resources/_types'

const texturePrefix = 'assets/img'

const textures = []

planets.forEach(element => {
  const texture = {
    name: `Planets_${element}`,
    url: `${texturePrefix}/Planets/${element}.pngs`
  }
  textures.push(texture)
})

resources.forEach(element => {
  const texture = {
    name: `Resources_${element}`,
    url: `${texturePrefix}/Resources/${element}.png`
  }
  textures.push(texture)
})

/* stars.forEach(element => {
  const texture = {
    name: `Stars_${element}`,
    url: `${texturePrefix}/Stars/${element}.png`
  }
  textures.push(texture)
}) */

//! Probibly could be improved somehow
textures.push({
  name: 'Atmosphere',
  url: `${texturePrefix}/Atmosphere1.svg`
})

//! Temprary code
textures.push({
  name: 'Stars_Sun',
  url: `${texturePrefix}/stars/Sun1.png`
})

export default textures
