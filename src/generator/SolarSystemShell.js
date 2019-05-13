import planetTypes from '../constants/planets/_types'

const minPlanetSpacing = 100
const maxPlanetSpacing = 200

export default class {
  sunSize = Math.floor(Math.random() * 10) + 10
  planets = []

  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.r = size

    this.generatePlanetPaths()
  }

  generatePlanetPaths() {
    let usedSpace = this.sunSize
    let overflow = false
    while (!overflow) {
      const planetPathSize = Math.floor(Math.random() * (maxPlanetSpacing - minPlanetSpacing)) + minPlanetSpacing + usedSpace

      if (planetPathSize < this.r) {
        this.planets[this.planets.length] = {
          path: planetPathSize
        }
        usedSpace = planetPathSize
      } else {
        overflow = true
      }
    }

    this.generatePlanets()
  }
  // eslint-disable-next-line class-methods-use-this
  generateType() {
    const types = []
    let type

    planetTypes.forEach(name => {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const planet = require(`../constants/planets/${name}`)
      const id = types.length

      types[id] = planet
      types[id].name = name
    })

    if (types.length !== 1) {
      const rand = Math.floor(Math.random() * types.length)
      type = types[rand]
    } else {
      // eslint-disable-next-line prefer-destructuring
      type = types[0]
    }
    return type
  }

  generatePlanets() {
    this.planets.forEach((planet, i) => {
      const type = this.generateType()
      const size = Math.random() * (type.default.size[1] - type.default.size[0]) + type.default.size[0]

      const resources = {}

      Object.keys(type.default.resources).forEach(item => {
        const object = type.default.resources[item]

        resources[item] = Math.random() * (object[1] - object[0]) + object[0]
      })

      this.planets[i] = {
        path: planet.path,
        type,
        size,
        resources
      }
    })
  }
}
