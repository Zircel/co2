'use strict'

import input from '../nodes/input'
import button from '../nodes/button'
import h3 from '../nodes/h3'
import div from '../nodes/div'
import span from '../nodes/span'

import { addDistribution } from '../datastore'

const template = document.createElement('template')
template.innerHTML = `
    <style>  
      :host { 
        display: none;
      }
    </style>`

export default class Slider extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.sliders = null
      this.options = null
   }

   onConfirm(goto, id) {
      addDistribution(
         id,
         this.options,
         this.sliders.map(s => Number.parseInt(s.value))
      )
      goto('success')
   }

   init(goto, config) {
      // TODO: taking even distribution for the time being
      const values = [33, 33, 33]
      const names = config.options.split(',').map(o => o.trim())
      addDistribution(config.id, names, values)
      window.setTimeout(_ => {
         goto('success')
      }, 50)
      return
      // TODO: User Interface not yet implemented

      this.shadowRoot.appendChild(h3(config.text))

      console.log(config)
      this.options = config.options.split(',').map(o => o.trim())

      this.sliders = this.options.map((o, i) => {
         const slider = input({
            type: 'range',
            min: 0,
            max: 100,
            step: 5,
            value: 100
         })
         this.shadowRoot.appendChild(div('', span(o), slider))
         return slider
      })

      const btn = button('', 'Weiter', _ => {
         this.onConfirm(goto, config.id)
      })
      this.shadowRoot.appendChild(btn)
   }
}

customElements.define('carbon-food-distribution', Slider)
