import { Container, Graphics } from 'pixi.js'
import Planet from './planet'
import Star from './star'
import bus from '../bus'

class Bounds extends Graphics {
  constructor(color, size) {
    super()
    this.lineStyle(size, color, 1)
  }
}

class Galaxy extends Container {
  habitablePlanets = []

  constructor(galaxy, index) {
    super()
    this.x = galaxy.offsetX
    this.y = galaxy.offsetY

    this.index = index

    // 4b. Create a circle
    this.bounds = new Bounds(0xff3232, 110 * 6.5)

    this.addChild(this.bounds)

    this.sun = new Star(galaxy.sunSize)
    this.addChild(this.sun)

    this.planets = []
    galaxy.planets.forEach((planet, _index) => this.planets.push(new Planet(planet, [index, _index])))
    this.planets.forEach(planet => {
      if (planet.isHabitable) this.habitablePlanets.push(planet)
      this.addChild(planet)
    })

    bus.on(`SettleShow-${index}`, habitable => {
      habitable.forEach(_id => {
        this.bounds.drawCircle(0, 0, _id * 110 + 300)
      })
    })
    bus.on(`SettleHide-${index}`, () => {
      this.bounds.clear()
    })
  }
}

export default class SolarSystem extends Container {
  planets = []

  constructor(solarSystem) {
    super()
    this.x = 0
    this.y = 0

    this.galaxys = []
    solarSystem.forEach((galaxy, index) => this.galaxys.push(new Galaxy(galaxy, index)))
    this.galaxys.forEach(galaxy => this.addChild(galaxy))
  }
}
