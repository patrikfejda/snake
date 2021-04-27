class Node {
  constructor() {
      this.nodes = []
  }

  add(node) {
      if(!node) return false
      return this.nodes.push(node)
  }
  remove(node) {
      var index = this.nodes.indexOf(node)
      if (index >= 0) this.nodes.splice(index, 1)
  }
  notify( /*event , args ... */ ) {
      var event = arguments[0]
      var args = Array.prototype.slice.call(arguments, 1)

      for (var index in this.nodes) {
          var node = this.nodes[index]
          if (node && typeof(node[event]) == "function")
              node[event].apply(node, args)
      }
  }
}

class GameObject extends Node{
    constructor(game) {
      super()
      this.game = game
      // this.x = x
      // this.y = y
      // this.width = width
      // this.height = height
    }


    move(dt) {
      this.notify("move", dt)
    }
  
    draw(ctx) {
      this.notify("draw", ctx)
    }

    onmove(dt) {}

    ondraw(ctx) {}
} 

