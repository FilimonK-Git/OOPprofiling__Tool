
document.addEventListener('DOMContentLoaded', function () {

  let Stack_Functional;
  let Stack_FunctionalShared;
  let Stack_Prototypal;
  let Stack_PseudoClassical;
  // let Stack_ES6;

  var numValue;
  $( "input").keyup(function() {
    numValue = $( this ).val();
  })

//################################################################################################
  // functional stack
  Stack_Functional = function () {
    var bucket = {}
    var numKey = 0
    var instance = {
      push: function(value) {
        bucket[numKey] = value;
        numKey++;
      },
      pop: function() {
        if (numKey > 0) {
          numKey--;
          var itemPopped = bucket[numKey];
          delete bucket[numKey];
          return itemPopped;
        }
      },
      size: function() {
        return numKey;
      },
      storage: function () {
        return bucket
      }
  };
  return instance
  }

  $('#func').click(_.once(function () {
    var newInstance_StackFunctional = Stack_Functional ()
    for (let i = 0; i < numValue; i++) {
      newInstance_StackFunctional.push(i)
      $('<tr><td>' + i +' : '+ newInstance_StackFunctional.pop() + '</td></tr>').appendTo($('#func_data'))
    }
  }))


  //################################################################################################
  // functional shared

  Stack_FunctionalShared = function () {
    var instance = {
      bucket: {},
      numKey: 0
    }
    for (var key in stack_functionalSharedMethods) {
      instance[key] = stack_functionalSharedMethods[key];
    }
    return instance
  }

  var stack_functionalSharedMethods = {
    push: function (value) {
      this.bucket[this.numKey] = value;
      this.numKey++;
    },
    pop: function () {
      if (this.numKey > 0) {
        this.numKey--
        var itemPopped = this.bucket[this.numKey];
        delete this.bucket[this.numKey]
        return itemPopped
      }
    },
    size: function () {
      return this.numKey;
    },
    storage: function () {
      return bucket
    }
  }

  $('#func_share').click(_.once(function () {
    var newInstance_Stack_FunctionalShared = Stack_FunctionalShared ()
    for (let i = 0; i < numValue; i++) {
      newInstance_Stack_FunctionalShared.push(i)
      $('<tr><td>' + i +' : '+ newInstance_Stack_FunctionalShared.pop() + '</td></tr>').appendTo($('#func_share_data'))
    }

  }))

  //################################################################################################
  // prototypal

  Stack_prototypal = function () {
    var instance = Object.create(stack_prototypalMethods)
    instance.bucket = {}
    instance.numKey = 0
    return instance
  }

  var stack_prototypalMethods = {
    push: function (value) {
      this.bucket[this.numKey] = value
      this.numKey++
    },
    pop: function () {
      if (this.numKey > 0) {
        this.numKey--
        var itemPopped = this.bucket[this.numKey]
        delete this.bucket[this.numKey]
        return itemPopped
      }
    },
    size: function () {
      return this.numKey
    }
  }

  $('#proto').click(_.once(function () {
    var newInstance_Stack_prototypal = Stack_prototypal ()
    for (let i = 0; i < numValue; i++) {
      newInstance_Stack_prototypal .push(i)
      $('<tr><td>' + i +' : '+ newInstance_Stack_prototypal .pop() + '</td></tr>').appendTo($('#func_proto_data'))
    }

  }))

  //################################################################################################
  // pseudoClassical

  Stack_PseudoClassical = function () {
    this.bucket = {}
    this.numKey = 0
  }

  Stack_PseudoClassical.prototype.push = function (value) {
    this.bucket[this.numKey] = value
    this.numKey++
  }

  Stack_PseudoClassical.prototype.pop = function () {
    if (this.numKey > 0) {
      this.numKey--;
      var itemPopped = this.bucket[this.numKey];
      delete this.bucket[this.numKey];
      return itemPopped;
    }
  }

  Stack_PseudoClassical.prototype.size = function () {
    return this.numKey
  }

  $('#pseudo').click(_.once(function () {
    var newInstance_Stack_pseudo = new Stack_PseudoClassical ()
    for (let i = 0; i < numValue; i++) {
      newInstance_Stack_pseudo .push(i)
      $('<tr><td>' + i +' : '+ newInstance_Stack_pseudo .pop() + '</td></tr>').appendTo($('#func_pseudo_data'))
    }

  }))


  //################################################################################################
  // ES6

  class Stack_es6 {

    constructor () {
      this.bucket = {}
      this.numKey = 0
    }

    push (value) {
      this.bucket[this.numKey] = value
      this.numKey++
    }

    pop () {
      if (this.numKey > 0) {
        this.numKey--;
        var itemPopped = this.bucket[this.numKey];
        delete this.bucket[this.numKey];
        return itemPopped;
      }
    }

    size () {
      return this.numKey
    }

  }

  $('#es6').click(_.once(function () {
    var newInstance_Stack_es6 = new Stack_es6 ()
    for (let i = 0; i < numValue; i++) {
      newInstance_Stack_es6.push(i)
      $('<tr><td>' + i +' : '+ newInstance_Stack_es6.pop() + '</td></tr>').appendTo($('#func_es6_data'))
    }

  }))

})