
document.addEventListener('DOMContentLoaded', function () {

  let Queue_Functional;
  let Queue_FunctionalShared;
  let Queue_Prototypal;
  let Queue_PseudoClassical;
  // let Queue_ES6;

  var numValue;
  $( "input").keyup(function() {
    numValue = $( this ).val();
  })

  $('#gc').click(function () {
    $('td').remove()
  })

//################################################################################################
  // functional Queue
  Queue_Functional = function () {
    var instance = {};
    var bucket = {};
    var numericKey = 0;
    var deqCounter = 0;
    var bucketSize = 0;

    instance.enqueue = function(value) {
      bucket[numericKey] = value;
      numericKey++;
      bucketSize++;
    };

    instance.dequeue = function() {
      if (numericKey > 0) {
        var itemDequeued = bucket[deqCounter];
        delete bucket[deqCounter];
        deqCounter++;
        bucketSize--;
        return itemDequeued;
      }
    };

    instance.size = function() {
      if (deqCounter > numericKey) {
        return 0;
      } else {
        return bucketSize;
      }
    };
    return instance;
  }

  // $i = $()

  $('#func').click(_.once(function () {
    var newInstance_QueueFunctional = Queue_Functional ()
    for (let i = 0; i < numValue; i++) {
      newInstance_QueueFunctional.enqueue(i)
      $('<tr><td>' + i +' : '+ newInstance_QueueFunctional.dequeue() + '</td></tr>').appendTo($('#func_data'))
    }
  }))


  //################################################################################################
  // functional shared

  Queue_FunctionalShared = function () {
    var instance = {
      bucket: {},
      numKey: 0,
      bucketSize: 0,
      deQCount: 0,
    };
    _.extend(instance, Queue_functionalSharedMethods);
    return instance;
  }

  var Queue_functionalSharedMethods = {
    enqueue: function (value) {
      this.bucket[this.numKey] = value;
      this.numKey++;
      this.bucketSize++;
    },
    dequeue: function () {
      if (this.bucketSize > 0) {
        var deqItem = this.bucket[this.deQCount];
        delete this.bucket[this.deQCount];
        this.bucketSize--;
        this.deQCount++;
        return deqItem;
      }
    },
    size: function () {
      return this.deQCount > this.numKey ? 0 : this.bucketSize;
    }
  }

  $('#func_share').click(_.once(function () {
    var newInstance_Queue_FunctionalShared = Queue_FunctionalShared ()
    for (let i = 0; i < numValue; i++) {
      newInstance_Queue_FunctionalShared.enqueue(i)
      $('<tr><td>' + i +' : '+ newInstance_Queue_FunctionalShared.dequeue() + '</td></tr>').appendTo($('#func_share_data'))
    }

  }))

  //################################################################################################
  // prototypal

  Queue_prototypal = function () {
    var instance = Object.create(Queue_prototypalMethods);
    return instance;
  }

  var Queue_prototypalMethods = {
    bucket: {},
    bucketSize: 0,
    numKey: 0,
    deqCount: 0,
    enqueue: function (value) {
      this.bucket[this.numKey] = value;
      this.numKey++;
      this.bucketSize++;
    },
    dequeue: function () {
      if (this.numKey > 0) {
        var deqItem = this.bucket[this.deqCount];
        delete this.bucket[this.deqCount];
        this.deqCount++;
        this.bucketSize--;
        return deqItem;
      }
    },
    size: function () {
      return this.deqCount > this.numKey ? 0 : this.bucketSize;
    }
  }

  $('#proto').click(_.once(function () {
    var newInstance_Queue_prototypal = Queue_prototypal ()
    for (let i = 0; i < numValue; i++) {
      newInstance_Queue_prototypal .enqueue(i)
      $('<tr><td>' + i +' : '+ newInstance_Queue_prototypal .dequeue() + '</td></tr>').appendTo($('#func_proto_data'))
    }

  }))

  //################################################################################################
  // pseudoClassical

  Queue_PseudoClassical = function () {
    this.bucket = {};
    this.numKey = 0;
    this.deqCount = 0;
    this.bucketSize = 0;
  }

  Queue_PseudoClassical.prototype.enqueue = function (value) {
    this.bucket[this.numKey] = value;
    this.numKey++;
    this.bucketSize++;
  }

  Queue_PseudoClassical.prototype.dequeue = function () {
    if (this.numKey > 0) {
      var itemDequeued = this.bucket[this.deqCount];
      delete this.bucket[this.deqCount];
      this.deqCount++;
      this.bucketSize--;
      return itemDequeued;
    }
  }

  Queue_PseudoClassical.prototype.size = function () {
    return this.deqCount > this.numKey ? 0 : this.bucketSize;
  }

  $('#pseudo').click(_.once(function () {
    var newInstance_Queue_pseudo = new Queue_PseudoClassical ()
    for (let i = 0; i < numValue; i++) {
      newInstance_Queue_pseudo .enqueue(i)
      $('<tr><td>' + i +' : '+ newInstance_Queue_pseudo .dequeue() + '</td></tr>').appendTo($('#func_pseudo_data'))
    }

  }))


  //################################################################################################
  // ES6

  class Queue_es6 {

    constructor () {
      this.bucket = {};
      this.numKey = 0;
      this.bucketSize = 0;
      this.deqCount = 0;
    }

    enqueue (value) {
      this.bucket[this.numKey] = value;
      this.numKey++;
      this.bucketSize++;
    }

    dequeue () {
      if (this.numKey > 0) {
        var itemDequeued = this.bucket[this.deqCount];
        delete this.bucket[this.deqCount];
        this.deqCount++;
        this.bucketSize--;
        return itemDequeued;
      }
    }

    size () {
      return this.deqCount > this.numKey ? 0 : this.bucketSize;
    }

  }

  $('#es6').click(_.once(function () {
    var newInstance_Queue_es6 = new Queue_es6 ()
    for (let i = 0; i < numValue; i++) {
      newInstance_Queue_es6.enqueue(i)
      $('<tr><td>' + i +' : '+ newInstance_Queue_es6.dequeue() + '</td></tr>').appendTo($('#func_es6_data'))
    }

  }))

})