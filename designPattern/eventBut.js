// 实现观察者模式
let bus = {
  eventNames: {
    // eventName1: [cb1, cb2]
    // eventName2: [cb1, cb2]
  },

  on: function (eventName, cb) {
    if (cb) {
      if (!(eventName in this.eventNames)){
        this.eventNames[eventName] = [];
      }
      this.eventNames[eventName].push(cb);
    }
  },

  emit: function (eventName, value) {
    if (eventName in this.eventNames) {
      this.eventNames[eventName].forEach((cb) => {
        cb(value);
      })
    }
  },

  off: function (eventName, cb) {
    // 没有这个事件，就什么都不做
    if (!(eventName in this.eventNames)) {
      return;
    }
    // 没有指定删除哪个监听器，就全删除。否则，删除指定的监听器
    if (!cb) {
      this.eventNames[eventName] = [];
    } else {
      let len = this.eventNames[eventName].length;
      for(let i = len - 1; i >= 0; i--){
        if (this.eventNames[eventName][i] == cb) {
          this.eventNames[eventName].splice(i, 1);
        }
      }
    }
  }
}

// 
function handle1 (v) {
  console.log(v);
}
function handle2 (v) {
  console.log(v + 2);
}
bus.on('eventName', handle1)
bus.on('eventName', handle2)
bus.emit('eventName', 3);
bus.off('eventName', handle1);
bus.emit('eventName', 3);